const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

// MongoDB connection URI from environment
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ Error: MONGODB_URI not found in .env.local');
  console.log('Please make sure you have MONGODB_URI set in your .env.local file');
  process.exit(1);
}

async function bulkImportQuestions() {
  let client;
  
  try {
    console.log('🔌 Connecting to MongoDB...');
    
    // Connect to MongoDB
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    console.log('✅ Connected to MongoDB successfully!');
    
    // Get database and collection
    const db = client.db();
    const questionsCollection = db.collection('questions');
    
    // Read questions from questions.js file
    console.log('📖 Reading questions from questions.js...');
    const questionsPath = path.join(__dirname, 'questions.js');
    
    if (!fs.existsSync(questionsPath)) {
      console.error('❌ Error: questions.js file not found!');
      console.log('Please create a questions.js file in the scripts folder');
      process.exit(1);
    }
    
    // Import questions from the file
    delete require.cache[questionsPath]; // Clear cache for fresh import
    const { questions } = require('./questions.js');
    
    if (!Array.isArray(questions) || questions.length === 0) {
      console.error('❌ Error: No questions found or questions is not an array');
      process.exit(1);
    }
    
    console.log(`📋 Found ${questions.length} questions to import`);
    
    // Validate questions
    const validQuestions = [];
    const errors = [];
    
    questions.forEach((question, index) => {
      const { title, description, code, expectedOutput, points = 10 } = question;
      
      if (!title || !description || !code || !expectedOutput) {
        errors.push(`Question ${index + 1}: Missing required fields (title, description, code, expectedOutput)`);
        return;
      }
      
      validQuestions.push({
        title: title.trim(),
        description: description.trim(),
        code: code.trim(),
        expectedOutput: expectedOutput.trim(),
        points: typeof points === 'number' ? points : 10,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });
    
    if (errors.length > 0) {
      console.error('❌ Validation errors found:');
      errors.forEach(error => console.error(`  • ${error}`));
      process.exit(1);
    }
    
    console.log(`✅ All ${validQuestions.length} questions validated successfully`);
    
    // Check for existing questions to avoid duplicates
    console.log('🔍 Checking for duplicate questions...');
    const existingTitles = await questionsCollection.distinct('title');
    const newQuestions = validQuestions.filter(q => !existingTitles.includes(q.title));
    const duplicates = validQuestions.length - newQuestions.length;
    
    if (duplicates > 0) {
      console.log(`⚠️  Found ${duplicates} duplicate questions (will be skipped)`);
    }
    
    if (newQuestions.length === 0) {
      console.log('ℹ️  No new questions to import (all questions already exist)');
      return;
    }
    
    console.log(`📥 Importing ${newQuestions.length} new questions...`);
    
    // Insert questions in bulk
    const result = await questionsCollection.insertMany(newQuestions);
    
    console.log('🎉 Bulk import completed successfully!');
    console.log(`📊 Import Summary:`);
    console.log(`  • Total questions processed: ${questions.length}`);
    console.log(`  • New questions imported: ${result.insertedCount}`);
    console.log(`  • Duplicates skipped: ${duplicates}`);
    console.log(`  • Total questions in database: ${await questionsCollection.countDocuments()}`);
    
  } catch (error) {
    console.error('❌ Error during bulk import:', error.message);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('🔌 MongoDB connection closed');
    }
  }
}

// Show usage info
function showUsage() {
  console.log(`
🚀 MongoDB Bulk Question Import Tool
====================================

📋 Collection: questions
🗂️  Database: As defined in MONGODB_URI

📝 Required Fields:
  • title (string)
  • description (string) 
  • code (string)
  • expectedOutput (string)

📝 Optional Fields:
  • points (number, default: 10)

🎯 Usage:
  1. Create questions.js file in scripts folder
  2. Run: node scripts/bulk-import.js
  3. Check your MongoDB dashboard

📁 File Structure:
  scripts/
    ├── bulk-import.js (this file)
    └── questions.js (your questions data)
`);
}

// Main execution
if (require.main === module) {
  console.log('🚀 Starting MongoDB Bulk Question Import...\n');
  showUsage();
  bulkImportQuestions();
}

module.exports = { bulkImportQuestions };
