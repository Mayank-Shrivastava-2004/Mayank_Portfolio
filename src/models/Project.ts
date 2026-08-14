import mongoose, { Schema, Model } from "mongoose";
import { IProject } from "@/types/portfolio";

const ProjectSchema = new Schema<IProject>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, required: true },
    timeline: { type: String, required: true },
    tag: { type: String, required: true },
    tagColor: { type: String },
    tech: [{ type: String }],
    links: {
      github: { type: String },
      live: { type: String },
      vercel: { type: String },
      backendSource: { type: String },
      appetize: { type: String },
      video: { type: String },
    },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const ProjectModel: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
