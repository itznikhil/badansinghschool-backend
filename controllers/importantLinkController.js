import asyncHandler from "express-async-handler";
import ImportantLink from "../models/importantLinkModel.js";

// @desc    Fetch all ImportantLink
// @route   GET /api/importantlink
// @access   Private/Admin
const getImportantLinks = asyncHandler(async (req, res) => {
  const ImportantLinks = await ImportantLink.find({});
  res.json(ImportantLinks);
});

// @desc    Delete a application
// @route   DELETE /api/importantlink/:id
// @access   Private/Admin
const deleteImportantLink = asyncHandler(async (req, res) => {
  const importantlink = await ImportantLink.findById(req.params.id);
  if (importantlink) {
    await importantlink.remove();
    res.json({ message: "importantlink removed" });
  } else {
    res.status(404);
    throw new Error("importantlink not found");
  }
});

// @desc    Create a important link
// @route   POST /api/importantlink
// @access   Private
const createImportantLink = asyncHandler(async (req, res) => {
  const importantlink = new ImportantLink({
    message: req.body.message,
    file: req.file.path,
  });
  const createdImportantLink = await importantlink.save();
  res.status(201).json(createdImportantLink);
});

export { getImportantLinks, createImportantLink, deleteImportantLink };
