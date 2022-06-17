import asyncHandler from "express-async-handler";
import Query from "../models/queryModel.js";

// @desc    Fetch all queries
// @route   GET /api/queries
// @access   Private/Admin
const getQueries = asyncHandler(async (req, res) => {
  const queries = await Query.find({});
  res.json(queries);
});

// @desc    Delete a query
// @route   DELETE /api/queries/:id
// @access   Private/Admin
const deleteQuery = asyncHandler(async (req, res) => {
  const query = await Query.findById(req.params.id);
  if (query) {
    await query.remove();
    res.json({ message: "Query removed" });
  } else {
    res.status(404);
    throw new Error("Query not found");
  }
});

// @desc    Create a query
// @route   POST /api/query
// @access   Private
const createQuery = asyncHandler(async (req, res) => {
  const query = new Query({
    name: req.body.name,
    contactNumber: req.body.contactNumber,
    message: req.body.message,
  });
  const createdQuery = await query.save();
  res.status(201).json(createdQuery);
});

export { createQuery, getQueries, deleteQuery };
