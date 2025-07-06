import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../lib/mongodb';
import CompletedQuestion from '../../../../models/CompletedQuestion';

// GET - Get all completed questions for a session
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId') || 'default';
    
    const completedQuestions = await CompletedQuestion.find({ sessionId });
    
    return NextResponse.json({
      success: true,
      completed: completedQuestions.map((cq) => cq.questionId)
    });
  } catch (error) {
    console.error('Error fetching completed questions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch completed questions' },
      { status: 500 }
    );
  }
}

// POST - Toggle completion status for a question
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
    
    // Find existing completion record
    const existingCompletion = await CompletedQuestion.findOne({ questionId, sessionId });
    
    if (existingCompletion) {
      // Remove completion (mark as not completed)
      await CompletedQuestion.deleteOne({ questionId, sessionId });
      
      return NextResponse.json({
        success: true,
        isCompleted: false,
        message: 'Question marked as not completed'
      });
    } else {
      // Add completion record
      const newCompletion = new CompletedQuestion({
        questionId,
        sessionId,
        completedAt: new Date()
      });
      
      await newCompletion.save();
      
      return NextResponse.json({
        success: true,
        isCompleted: true,
        message: 'Question marked as completed'
      });
    }
  } catch (error) {
    console.error('Error toggling completion:', error);
    
    // Handle duplicate key error (race condition)
    if (typeof error === 'object' && error !== null && 'code' in error && (error as { code: number }).code === 11000) {
      return NextResponse.json({
        success: true,
        isCompleted: true,
        message: 'Question already completed'
      });
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to toggle completion status' },
      { status: 500 }
    );
  }
}

// DELETE - Remove completion for a question (alternative to POST toggle)
export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const questionId = searchParams.get('questionId');
    const sessionId = searchParams.get('sessionId') || 'default';
    
    if (!questionId) {
      return NextResponse.json(
        { success: false, error: 'Question ID is required' },
        { status: 400 }
      );
    }
    
    await CompletedQuestion.deleteOne({ questionId, sessionId });
    
    return NextResponse.json({
      success: true,
      message: 'Completion record deleted'
    });
  } catch (error) {
    console.error('Error deleting completion:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete completion record' },
      { status: 500 }
    );
  }
}
