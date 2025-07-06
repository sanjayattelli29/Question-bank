import mongoose, { Document, Schema } from 'mongoose';

export interface ICompletedQuestion extends Document {
  questionId: string;
  userId?: string; // For future user authentication
  sessionId: string; // For current session-based completion tracking
  completedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const CompletedQuestionSchema = new Schema<ICompletedQuestion>(
  {
    questionId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: false, // Optional for future user auth
    },
    sessionId: {
      type: String,
      required: true, // For session-based completion tracking
    },
    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index for efficient queries
CompletedQuestionSchema.index({ questionId: 1, sessionId: 1 }, { unique: true });
CompletedQuestionSchema.index({ sessionId: 1 });
CompletedQuestionSchema.index({ userId: 1 }); // For future user auth

// Prevent model re-compilation during development
const CompletedQuestion = mongoose.models.CompletedQuestion || mongoose.model<ICompletedQuestion>('CompletedQuestion', CompletedQuestionSchema);

export default CompletedQuestion;
