const slugify = require("./slugify");

/**
 * Builds a unique slug by appending -2, -3, ... until `checkExists` returns
 * false. `checkExists(slug)` should resolve to true only if the slug is
 * already taken by a *different* record than the one being saved.
 */
async function generateUniqueSlug(baseText, checkExists) {
  const base = slugify(baseText) || "item";
  let slug = base;
  let counter = 1;

  // eslint-disable-next-line no-await-in-loop
  while (await checkExists(slug)) {
    counter += 1;
    slug = `${base}-${counter}`;
  }

  return slug;
}

module.exports = generateUniqueSlug;
