import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Question from '@/models/Question';

// GET - Fetch all questions
export async function GET() {
  try {
    await connectDB();
    
    const questions = await Question.find({})
      .select('_id title description code expectedOutput points createdAt')
      .sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      data: questions,
    });
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}

// POST - Create new question (Admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, code, expectedOutput, points, adminKey } = body;

    // Verify admin key
    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Validate required fields
    if (!title || !description || !code || !expectedOutput) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();

    const newQuestion = new Question({
      title: title.trim(),
      description: description.trim(),
      code: code.trim(),
      expectedOutput: expectedOutput.trim(),
      points: points || 10,
    });

    const savedQuestion = await newQuestion.save();

    return NextResponse.json({
      success: true,
      data: savedQuestion,
      message: 'Question created successfully',
    });
  } catch (error) {
    console.error('Error creating question:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create question' },
      { status: 500 }
    );
  }
}
