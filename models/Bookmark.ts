import mongoose from 'mongoose';

const BookmarkSchema = new mongoose.Schema({
  questionId: {
    type: String,
    required: true,
    unique: true,
  },
  isBookmarked: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.models.Bookmark || mongoose.model('Bookmark', BookmarkSchema);
