import mongoose from 'mongoose';

const CompletedQuestionSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
    unique: true,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.CompletedQuestion || mongoose.model('CompletedQuestion', CompletedQuestionSchema);
