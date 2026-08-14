import mongoose, { Schema, Model } from "mongoose";
import { IExperience } from "@/types/portfolio";

const ExperienceSchema = new Schema<IExperience>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    timeline: { type: String, required: true },
    accentColor: { type: String },
    bullets: [{ type: String }],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const ExperienceModel: Model<IExperience> =
  mongoose.models.Experience || mongoose.model<IExperience>("Experience", ExperienceSchema);
