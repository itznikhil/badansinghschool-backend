import mongoose from "mongoose";

const ImportantLinkSchema = mongoose.Schema(
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
const ImportantLink = mongoose.model("ImportantLink", ImportantLinkSchema);
export default ImportantLink;
