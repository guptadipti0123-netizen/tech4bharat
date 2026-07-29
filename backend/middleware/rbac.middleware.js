const AppError = require("../utils/AppError");

/** "*" grants everything; "<resource>:manage" implies every action on that resource. */
function hasPermission(userPermissions, resource, action) {
  if (!Array.isArray(userPermissions)) return false;
  if (userPermissions.includes("*")) return true;
  if (userPermissions.includes(`${resource}:manage`)) return true;
  return userPermissions.includes(`${resource}:${action}`);
}

/** Route guard factory: requirePermission("startups", "delete") */
function requirePermission(resource, action) {
  return function rbac(req, res, next) {
    if (!req.user) {
      next(AppError.unauthorized());
      return;
    }
    if (!hasPermission(req.user.permissions, resource, action)) {
      next(AppError.forbidden(`You do not have permission to ${action} ${resource}.`));
      return;
    }
    next();
  };
}

module.exports = { requirePermission, hasPermission };
