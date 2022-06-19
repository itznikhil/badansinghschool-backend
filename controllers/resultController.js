import asyncHandler from "express-async-handler";
import Result from "../models/resultModel.js";

// @desc    Fetch all queries
// @route   GET /api/results
// @access   Private/Admin
const getResults = asyncHandler(async (req, res) => {
  const results = await Result.find({});
  res.json(results);
});

// @desc    Fetch the result
// @route   POST /api/results/getByClassAndYear
// @access   publi
const getResultByClassAndYear = asyncHandler(async (req, res) => {
  const results = await Result.find({
    class: req.body.class,
    year: req.body.year,
  });
  res.json(results);
});

// @desc    Delete a Result
// @route   DELETE /api/results/:id
// @access   Private/Admin
const deleteResult = asyncHandler(async (req, res) => {
  const result = await Result.findById(req.params.id);
  if (result) {
    await result.remove();
    res.json({ message: "result removed" });
  } else {
    res.status(404);
    throw new Error("result not found");
  }
});

// @desc    Create a result
// @route   POST /api/results
// @access   Private
const createResult = asyncHandler(async (req, res) => {
  const result = new Result({
    class: req.body.class,
    file: req.file.path,
    year: req.body.year,
  });
  const createdResult = await result.save();
  res.status(201).json(createdResult);
});

export { createResult, getResults, deleteResult, getResultByClassAndYear };
