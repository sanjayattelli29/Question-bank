import mongoose, { Document, Schema } from 'mongoose';

export interface IBookmark extends Document {
  questionId: string;
  userId?: string; // For future user authentication
  sessionId: string; // For current session-based bookmarks
  isBookmarked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BookmarkSchema = new Schema<IBookmark>(
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
      required: true, // For session-based bookmarking
    },
    isBookmarked: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index for efficient queries
BookmarkSchema.index({ questionId: 1, sessionId: 1 }, { unique: true });

// Prevent model re-compilation during development
const Bookmark = mongoose.models.Bookmark || mongoose.model<IBookmark>('Bookmark', BookmarkSchema);

export default Bookmark;
