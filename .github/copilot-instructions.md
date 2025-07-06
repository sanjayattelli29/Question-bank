<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a Next.js Question Bank Web Application with the following characteristics:

## Project Structure
- **Frontend**: Next.js 14 with App Router and TypeScript
- **Styling**: Chakra UI with dark theme for coding-friendly interface
- **Database**: MongoDB Atlas with Mongoose ODM
- **Code Highlighting**: react-syntax-highlighter for Python code blocks
- **State Management**: React Context for tracking completed questions

## Key Features
- Student dashboard with sidebar listing all questions
- Question detail view with Python code blocks and toggleable answers
- Admin section for adding new questions (password protected)
- Dark theme optimized for coding environments
- Responsive layout with sidebar + detail panel design

## Code Conventions
- Use TypeScript for all components and API routes
- Follow Next.js App Router patterns
- Use Chakra UI components for consistent styling
- Implement proper error handling and loading states
- Use environment variables for configuration (MongoDB URI, admin key)

## Database Schema
- Questions collection with: title, description, code, expectedOutput, points, createdAt
- Track question completion status in localStorage/context

When generating code, prioritize:
1. Clean, readable TypeScript code
2. Proper error handling
3. Responsive design patterns
4. Accessibility considerations
5. Performance optimizations
