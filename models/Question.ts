import mongoose, { Document, Schema } from 'mongoose';

export interface IQuestion extends Document {
  title: string;
  description: string;
  code: string;
  expectedOutput: string;
  points?: number;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionSchema = new Schema<IQuestion>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    expectedOutput: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      default: 10,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model re-compilation during development
const Question = mongoose.models.Question || mongoose.model<IQuestion>('Question', QuestionSchema);

export default Question;
