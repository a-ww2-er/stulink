import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    ProjectName: {
      type: String,
      required: [true, "Your project must have a name"],
    },
    ProjectStatus: {
      type: String,
      enum: ["completed", "incomplete"],
    },
    ProjectImage: {
      type: String,
      required: [true, "Project image is missing"],
    },
    Team: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    Description: {
      type: String,
      required: [true, "A description is required for your project"],
    },
    // Team: { type: Schema.Types.ObjectId, ref: "User" },

    ProjectOwner: { type: String, required:true },

    DueDate: {
      type: String,
      required: [true, "Please input a due date"],
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);
