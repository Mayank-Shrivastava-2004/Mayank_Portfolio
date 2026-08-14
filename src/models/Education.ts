import mongoose, { Schema, Model } from "mongoose";
import { IEducation } from "@/types/portfolio";

const EducationSchema = new Schema<IEducation>(
  {
    id: { type: String, required: true, unique: true },
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String, required: true },
    timeline: { type: String, required: true },
    cgpa: { type: String, required: true },
    highlights: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const EducationModel: Model<IEducation> =
  mongoose.models.Education || mongoose.model<IEducation>("Education", EducationSchema);
