import asyncHandler from "express-async-handler";
import NoticeBoard from "../models/noticeBoardModel.js";

// @desc    Fetch all notice board
// @route   GET /api/noticeboards
// @access   Private/Admin
const getNoticeBoards = asyncHandler(async (req, res) => {
  const noticeboards = await NoticeBoard.find({});
  res.json(noticeboards);
});

// @desc    Delete a application
// @route   DELETE /api/noticeboards/:id
// @access   Private/Admin
const deleteNoticeBoard = asyncHandler(async (req, res) => {
  const noticeBoard = await NoticeBoard.findById(req.params.id);
  if (noticeBoard) {
    await NoticeBoard.remove();
    res.json({ message: "NoticeBoard removed" });
  } else {
    res.status(404);
    throw new Error("NoticeBoard not found");
  }
});

// @desc    Create a notice board
// @route   POST /api/noticeboards
// @access   Private
const createNoticeBoard = asyncHandler(async (req, res) => {
  const noticeBoard = new NoticeBoard({
    message: req.body.message,
    file: req.file.path,
  });
  const createdNoticeBoard = await noticeBoard.save();
  res.status(201).json(createdNoticeBoard);
});

export { createNoticeBoard, deleteNoticeBoard, getNoticeBoards };
