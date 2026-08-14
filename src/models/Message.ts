import mongoose, { Schema, Model } from "mongoose";
import { IContactMessage } from "@/types/portfolio";

const MessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, trim: true },
    message: { type: String, required: true },
    ipAddress: { type: String },
  },
  { timestamps: true }
);

export const MessageModel: Model<IContactMessage> =
  mongoose.models.Message || mongoose.model<IContactMessage>("Message", MessageSchema);
