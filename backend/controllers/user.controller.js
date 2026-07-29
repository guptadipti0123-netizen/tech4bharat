const asyncHandler = require("../utils/asyncHandler");
const { sendSuccess, sendCreated } = require("../utils/apiResponse");
const userService = require("../services/user.service");

const list = asyncHandler(async (req, res) => {
  const { items, meta } = await userService.list(req.query);
  sendSuccess(res, { message: "Users fetched.", data: items, meta });
});

const getOne = asyncHandler(async (req, res) => {
  const user = await userService.getById(req.params.id);
  sendSuccess(res, { message: "User fetched.", data: user });
});

const create = asyncHandler(async (req, res) => {
  const user = await userService.create(req.body, req.user.id);
  sendCreated(res, "User created.", user);
});

const update = asyncHandler(async (req, res) => {
  const user = await userService.update(req.params.id, req.body, req.user);
  sendSuccess(res, { message: "User updated.", data: user });
});

const resetPassword = asyncHandler(async (req, res) => {
  await userService.resetPassword(req.params.id, req.body.password);
  sendSuccess(res, { message: "Password reset successfully." });
});

const remove = asyncHandler(async (req, res) => {
  await userService.remove(req.params.id, req.user);
  sendSuccess(res, { message: "User deleted." });
});

module.exports = { list, getOne, create, update, resetPassword, remove };
