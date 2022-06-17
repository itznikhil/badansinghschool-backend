import mongoose from "mongoose";

const ResultSchema = mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,
    },
    class: {
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
const Result = mongoose.model("Result", ResultSchema);
export default Result;
