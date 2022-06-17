import mongoose from "mongoose";

const NoticeBoardSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const NoticeBoard = mongoose.model("NoticeBoard", NoticeBoardSchema);
export default NoticeBoard;
