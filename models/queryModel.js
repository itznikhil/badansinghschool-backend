import mongoose from "mongoose";

const QuerySchema = mongoose.Schema(
  {
    contactNumber: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Query = mongoose.model("Query", QuerySchema);
export default Query;
