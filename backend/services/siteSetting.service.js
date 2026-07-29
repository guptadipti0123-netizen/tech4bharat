const siteSettingModel = require("../models/siteSetting.model");
const AppError = require("../utils/AppError");

async function list() {
  return siteSettingModel.findAll({ orderBy: "section_key ASC" });
}

async function getByKey(sectionKey) {
  const row = await siteSettingModel.findByKey(sectionKey);
  if (!row) throw AppError.notFound(`No homepage content found for section "${sectionKey}".`);
  return row;
}

async function upsert(sectionKey, content, updatedBy) {
  const existing = await siteSettingModel.findByKey(sectionKey);
  const payload = { content: JSON.stringify(content), updated_by: updatedBy };

  if (existing) {
    await siteSettingModel.update(existing.id, payload);
  } else {
    await siteSettingModel.create({ section_key: sectionKey, ...payload });
  }

  return getByKey(sectionKey);
}

module.exports = { list, getByKey, upsert };
