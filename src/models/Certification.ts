import mongoose, { Schema, Model } from "mongoose";
import { ICertification } from "@/types/portfolio";

const CertificationSchema = new Schema<ICertification>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    icon: { type: String, required: true },
    iconColor: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const CertificationModel: Model<ICertification> =
  mongoose.models.Certification || mongoose.model<ICertification>("Certification", CertificationSchema);
