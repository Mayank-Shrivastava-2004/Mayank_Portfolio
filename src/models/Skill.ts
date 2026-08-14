import mongoose, { Schema, Model } from "mongoose";
import { ISkillCategory } from "@/types/portfolio";

const SkillItemSchema = new Schema(
  {
    label: { type: String, required: true },
    pct: { type: Number },
  },
  { _id: false }
);

const SkillCategorySchema = new Schema<ISkillCategory>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    icon: { type: String, required: true },
    iconColor: { type: String },
    type: { type: String, enum: ["bars", "tags"], required: true },
    items: [SkillItemSchema],
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const SkillModel: Model<ISkillCategory> =
  mongoose.models.Skill || mongoose.model<ISkillCategory>("Skill", SkillCategorySchema);
