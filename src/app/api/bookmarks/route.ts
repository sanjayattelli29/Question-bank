import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import Bookmark from '../../../../models/Bookmark';

// GET - Get all bookmarks for a session
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId') || 'default';
    
    const bookmarks = await Bookmark.find({ sessionId, isBookmarked: true });
    
    return NextResponse.json({
      success: true,
      bookmarks: bookmarks.map((bookmark) => bookmark.questionId)
    });
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch bookmarks' },
      { status: 500 }
    );
  }
}

// POST - Toggle bookmark for a question
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const { questionId, sessionId = 'default' } = await request.json();
    
    if (!questionId) {
      return NextResponse.json(
        { success: false, error: 'Question ID is required' },
        { status: 400 }
      );
    }
    
    // Find existing bookmark
    const existingBookmark = await Bookmark.findOne({ questionId, sessionId });
    
    if (existingBookmark) {
      // Toggle bookmark status
      existingBookmark.isBookmarked = !existingBookmark.isBookmarked;
      await existingBookmark.save();
      
      return NextResponse.json({
        success: true,
        isBookmarked: existingBookmark.isBookmarked
      });
    } else {
      // Create new bookmark
      const newBookmark = new Bookmark({
        questionId,
        sessionId,
        isBookmarked: true
      });
      
      await newBookmark.save();
      
      return NextResponse.json({
        success: true,
        isBookmarked: true
      });
    }
  } catch (error) {
    console.error('Error toggling bookmark:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to toggle bookmark' },
      { status: 500 }
    );
  }
}
