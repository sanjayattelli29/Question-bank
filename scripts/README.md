# 📦 Bulk Question Import Guide

This guide will help you import multiple questions into your MongoDB database using command line tools.

## 🎯 Quick Start

1. **Install Dependencies** (if not already installed):
```bash
npm install mongodb dotenv
```

2. **Prepare Your Questions**:
   - Edit `scripts/questions.js` with your questions
   - Follow the format shown in the sample file

3. **Run the Import**:
```bash
cd "d:\qurstion bank\question-bank-app"
node scripts/bulk-import.js
```

## 📋 Database Information

- **Collection Name**: `questions`
- **Database**: Uses your `MONGODB_URI` from `.env.local`
- **Auto-generated fields**: `createdAt`, `updatedAt`, `_id`

## 📝 Question Format

Each question in `scripts/questions.js` must have:

```javascript
{
  title: "Your Question Title",           // Required: String
  description: "Problem description",     // Required: String  
  code: "Python code here",              // Required: String
  expectedOutput: "Expected result",      // Required: String
  points: 10                             // Optional: Number (default: 10)
}
```

## 🛠️ Step-by-Step Instructions

### Step 1: Prepare Your Environment

Make sure you have:
- ✅ MongoDB connection working
- ✅ `.env.local` file with `MONGODB_URI`
- ✅ Node.js installed

### Step 2: Create Your Questions File

Edit `scripts/questions.js`:

```javascript
const questions = [
  {
    title: "Find Maximum Number",
    description: "Write a program to find the largest number in an array",
    code: `numbers = [3, 7, 2, 9, 1]
max_num = max(numbers)
print("Maximum number:", max_num)`,
    expectedOutput: "Maximum number: 9",
    points: 5
  },
  // Add more questions here...
];

module.exports = { questions };
```

### Step 3: Run the Import

Open terminal/command prompt:

```bash
# Navigate to your project
cd "d:\qurstion bank\question-bank-app"

# Run the bulk import
node scripts/bulk-import.js
```

## 🎉 Expected Output

```
🚀 Starting MongoDB Bulk Question Import...

🔌 Connecting to MongoDB...
✅ Connected to MongoDB successfully!
📖 Reading questions from questions.js...
📋 Found 10 questions to import
✅ All 10 questions validated successfully
🔍 Checking for duplicate questions...
📥 Importing 10 new questions...
🎉 Bulk import completed successfully!

📊 Import Summary:
  • Total questions processed: 10
  • New questions imported: 10
  • Duplicates skipped: 0
  • Total questions in database: 10

🔌 MongoDB connection closed
```

## 🚨 Common Issues & Solutions

### Issue: `MONGODB_URI not found`
**Solution**: Check your `.env.local` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
```

### Issue: `questions.js file not found`
**Solution**: Make sure the file exists in `scripts/questions.js`

### Issue: `Validation errors`
**Solution**: Check that all questions have required fields:
- `title` (string)
- `description` (string)
- `code` (string)
- `expectedOutput` (string)

### Issue: `A require() style import is forbidden`
**Solution**: This is just a linting warning - the script will still work fine. This is normal for Node.js scripts.

## 📊 Validation Rules

The script validates each question for:
- ✅ All required fields present
- ✅ Fields are not empty strings
- ✅ Points is a valid number (if provided)
- ✅ No duplicate titles

## 🔄 Re-running the Script

- ✅ **Safe to run multiple times**
- ✅ **Skips duplicates** (based on title)
- ✅ **Only imports new questions**

## 📁 File Structure

```
scripts/
├── bulk-import.js     # Main import script
├── questions.js       # Your questions data
└── README.md         # This guide
```

## 🎯 Tips for Large Imports

1. **Test with small batches first** (5-10 questions)
2. **Use unique, descriptive titles** to avoid duplicates
3. **Validate your Python code** before importing
4. **Keep backups** of your questions.js file
5. **Check MongoDB dashboard** after import

## 🔍 Verifying Import

After import, check your database:
1. Open MongoDB Compass/Atlas
2. Navigate to your database
3. Check the `questions` collection
4. Verify question count and data

## 📞 Need Help?

If you encounter issues:
1. Check the error message carefully
2. Verify your `.env.local` file
3. Test MongoDB connection
4. Validate questions.js format
5. Check Node.js and npm versions

Happy importing! 🚀



const questions = [
  {
    title: "Your Question Title",
    description: "Detailed problem description",
    code: `# Your Python code here
print("Hello World")`,
    expectedOutput: "Hello World",
    points: 10  // Optional
  },
  // Add more questions...
];