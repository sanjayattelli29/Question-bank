# 🧠 Question Bank Web App

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Chakra UI](https://img.shields.io/badge/Chakra%20UI-3.21.1-teal?style=for-the-badge&logo=chakraui&logoColor=white)](https://chakra-ui.com/)
[![React](https://img.shields.io/badge/React-19.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Mongoose](https://img.shields.io/badge/Mongoose-8.16.1-red?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

[![Deployment](https://img.shields.io/badge/Deploy%20with-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/yourusername/question-bank-app/graphs/commit-activity)

</div>

---

## 🌟 Overview

A **modern**, **interactive** Python programming practice platform built with **Next.js 15**, **TypeScript**, and **MongoDB Atlas**. This application provides a comprehensive solution for students to practice programming problems with an intuitive interface, progress tracking, and advanced filtering capabilities.

### 🎯 Key Highlights

- **� Modern Tech Stack**: Built with the latest Next.js 15, React 19, and TypeScript 5
- **� Beautiful UI/UX**: Professional dark theme optimized for coding environments
- **📊 Advanced Filtering**: Smart filters for bookmarks, completion status, and search
- **💾 Database Persistence**: MongoDB Atlas for scalable data storage
- **🔄 Real-time Updates**: Instant state synchronization across sessions
- **📱 Responsive Design**: Perfect experience on desktop, tablet, and mobile
- **⚡ Performance Optimized**: Turbopack for lightning-fast development

---

## ✨ Features

### 🎓 **Student Experience**

#### **Dashboard & Navigation**
- **📚 Question Library**: Browse 100+ programming questions with smart categorization
- **🎯 Progress Tracking**: Visual completion indicators and progress statistics
- **⭐ Bookmark System**: Save favorite questions for quick access
- **🔍 Advanced Search**: Real-time search across question titles and descriptions
- **🏷️ Smart Filtering**: Filter by starred, completed, not completed, date added
- **📊 Progress Analytics**: Track completion rates and learning progress

#### **Question Interface**
- **💻 Interactive Code Blocks**: Beautiful syntax-highlighted Python code with line numbers
- **👁️ Toggleable Solutions**: Show/hide expected outputs with smooth animations
- **📋 Copy Code Feature**: One-click code copying with visual feedback
- **🎮 Points System**: Gamified learning with point rewards
- **⚡ Quick Actions**: Instant bookmark and completion toggles
- **🖥️ Full-Screen Mode**: Distraction-free coding environment

#### **Learning Tools**
- **📈 Difficulty Progression**: Questions organized by complexity
- **🎯 Focused Practice**: Filter questions by specific topics or difficulty
- **📝 Detailed Descriptions**: Comprehensive problem explanations
- **💡 Learning Hints**: Helpful tips and best practices
- **🔄 Session Persistence**: Resume exactly where you left off

### �️ **Admin Panel**

#### **Question Management**
- **🔐 Secure Access**: Password-protected admin interface
- **➕ Quick Add**: Streamlined form for adding new questions
- **📝 Rich Editor**: Full-featured question editor with validation
- **🗂️ Bulk Import**: Import multiple questions from structured files
- **📊 Analytics Dashboard**: Question usage and completion statistics
- **🔄 Real-time Updates**: Instant question availability after creation

#### **Content Tools**
- **✅ Input Validation**: Comprehensive form validation and error handling
- **🎨 Preview Mode**: Preview questions before publishing
- **📂 Category Management**: Organize questions by topics and difficulty
- **🔍 Search & Filter**: Find and manage existing questions efficiently

### 🎨 **UI/UX Design Philosophy**

#### **Visual Design**
- **🌙 Dark Theme**: Carefully crafted dark theme optimized for long coding sessions
- **🎯 Minimalist Interface**: Clean, distraction-free design focused on content
- **🌈 Consistent Colors**: Professional color palette with accessibility in mind
- **📱 Responsive Layout**: Fluid design that adapts to any screen size
- **⚡ Smooth Animations**: Subtle transitions and micro-interactions

#### **User Experience**
- **🚀 Fast Loading**: Optimized performance with minimal loading times
- **🧭 Intuitive Navigation**: Logical information architecture and user flows
- **♿ Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **🎮 Interactive Elements**: Engaging hover effects and visual feedback
- **📊 Visual Hierarchy**: Clear content organization with proper typography

---

## 🚀 Technology Stack

### **Frontend Architecture**
```typescript
// Modern React with TypeScript
- Next.js 15.3.5 (App Router)
- React 19.0+ (Latest Features)
- TypeScript 5.0+ (Type Safety)
- Chakra UI 3.21.1 (Component Library)
- Framer Motion 12.23.0 (Animations)
```

### **Backend & Database**
```typescript
// Full-stack capabilities
- MongoDB Atlas (Cloud Database)
- Mongoose 8.16.1 (ODM)
- Next.js API Routes (Serverless)
- RESTful API Design
```

### **Developer Experience**
```typescript
// Modern development tools
- Turbopack (Ultra-fast bundling)
- ESLint 9 (Code quality)
- Tailwind CSS 4 (Utility-first CSS)
- Hot Module Replacement
- TypeScript IntelliSense
```

### **Code Quality & Syntax**
```typescript
// Enhanced code presentation
- react-syntax-highlighter 15.6.1
- VS Code Dark+ Theme
- Line Numbers & Highlighting
- Copy-to-clipboard functionality
```

---

## 📁 Project Architecture

### **Directory Structure**
```
question-bank-app/
├── 📂 src/
│   ├── 📂 app/                          # Next.js App Router
│   │   ├── 📂 api/                      # API Routes
│   │   │   ├── 📂 questions/
│   │   │   │   └── 📄 route.ts          # CRUD operations for questions
│   │   │   ├── 📂 bookmarks/
│   │   │   │   └── 📄 route.ts          # Bookmark management API
│   │   │   └── 📂 completed/
│   │   │       └── 📄 route.ts          # Completion tracking API
│   │   ├── 📂 dashboard/
│   │   │   └── 📄 page.tsx              # Main dashboard interface
│   │   ├── 📄 page.tsx                  # Landing page
│   │   ├── 📄 layout.tsx                # Root layout with providers
│   │   ├── 📄 globals.css               # Global styles & animations
│   │   └── 📄 favicon.ico               # Application favicon
│   ├── 📂 components/                   # Reusable UI Components
│   │   ├── 📄 Sidebar.tsx               # Question list & navigation
│   │   ├── 📄 QuestionDetail.tsx        # Question display component
│   │   ├── 📄 AddQuestionForm.tsx       # Admin question form
│   │   ├── 📄 FilterPanel.tsx           # Advanced filtering UI
│   │   └── 📄 Providers.tsx             # Context providers wrapper
│   └── 📂 context/
│       └── 📄 QuestionContext.tsx       # Global state management
├── 📂 lib/
│   └── 📄 mongodb.ts                    # Database connection & caching
├── 📂 models/                           # Mongoose Schemas
│   ├── 📄 Question.ts                   # Question data model
│   ├── 📄 Bookmark.ts                   # Bookmark tracking model
│   └── 📄 CompletedQuestion.ts          # Completion tracking model
├── 📂 scripts/                          # Utility Scripts
│   ├── 📄 bulk-import.js                # Mass question import tool
│   ├── 📄 questions.js                  # Sample questions data
│   ├── 📄 sample-questions.js           # Question generation utility
│   └── 📄 README.md                     # Script documentation
├── 📂 types/                            # TypeScript Definitions
│   └── 📄 mongoose.d.ts                 # Mongoose type extensions
├── 📂 public/                           # Static Assets
│   ├── 📄 next.svg                      # Next.js logo
│   ├── 📄 vercel.svg                    # Vercel logo
│   └── 📄 *.svg                         # Various UI icons
├── 📄 package.json                      # Dependencies & scripts
├── 📄 tsconfig.json                     # TypeScript configuration
├── 📄 next.config.ts                    # Next.js configuration
├── 📄 eslint.config.mjs                 # ESLint rules
├── 📄 postcss.config.mjs                # PostCSS configuration
├── 📄 tailwind.config.js                # Tailwind CSS setup
└── 📄 .env.local                        # Environment variables
```

### **Component Architecture**

#### **State Management Flow**
```typescript
// Global State with React Context
QuestionProvider
├── Completed Questions (MongoDB)
├── Bookmarked Questions (MongoDB)
├── Session Management (SessionStorage)
└── Real-time Synchronization
```

#### **API Architecture**
```typescript
// RESTful API Endpoints
/api/questions     → GET, POST (CRUD operations)
/api/bookmarks     → GET, POST (Bookmark management)
/api/completed     → GET, POST, DELETE (Progress tracking)
```

---

## 🛠️ Installation & Setup

### **Prerequisites**
```bash
Node.js 18.0+ (LTS recommended)
npm 9.0+ or yarn 1.22+
MongoDB Atlas account
Git 2.0+
```

### **Environment Configuration**

Create a `.env.local` file in the root directory:

```env
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster0.grdl0.mongodb.net/questionbank?retryWrites=true&w=majority

# Admin Access
ADMIN_KEY=your_secure_admin_key_here

# Optional: Custom Configuration
NEXT_PUBLIC_APP_NAME=Question Bank Pro
NEXT_PUBLIC_MAX_QUESTIONS=1000
```

### **Quick Start Guide**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/question-bank-app.git
   cd question-bank-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your MongoDB URI and admin key
   ```

4. **Database Setup**
   ```bash
   # Import sample questions (optional)
   npm run import-questions
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open Application**
   ```
   Navigate to: http://localhost:3000
   ```

### **Production Deployment**

#### **Deploy to Netlify**
```bash
# Build the application
npm run build

# Deploy to Netlify
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=.next
```

#### **Deploy to Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### **Environment Variables for Production**
```env
MONGODB_URI=your_production_mongodb_uri
ADMIN_KEY=your_secure_production_admin_key
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your_nextauth_secret
```

---

## 📖 Usage Guide

### **🎓 For Students**

#### **Getting Started**
1. **Visit the Application**: Navigate to the deployed URL or localhost:3000
2. **Explore Questions**: Browse the comprehensive question library
3. **Use Filters**: Utilize advanced filtering to find relevant questions
4. **Track Progress**: Mark questions as completed to monitor your learning journey

#### **Navigation & Interface**
```typescript
// Main Dashboard Features
- 📚 Question Library (Left Sidebar)
- 🎯 Question Details (Main Panel)  
- 🔍 Search & Filter (Top Panel)
- 📊 Progress Tracking (Status Indicators)
```

#### **Advanced Features**
- **⭐ Bookmark Questions**: Save important questions for quick access
- **🔍 Smart Search**: Real-time search across titles and descriptions
- **📱 Mobile Responsive**: Full functionality on mobile devices
- **⚡ Keyboard Shortcuts**: Navigate efficiently with keyboard commands

### **🔧 For Administrators**

#### **Adding Questions**
1. **Access Admin Panel**: Click "Add Question" in the dashboard
2. **Authenticate**: Enter the admin key
3. **Fill Question Details**:
   ```typescript
   interface QuestionForm {
     title: string;           // Question title
     description: string;     // Detailed problem description
     code: string;           // Python code block
     expectedOutput: string; // Expected program output
     points?: number;        // Point value (optional)
   }
   ```
4. **Preview & Submit**: Review and add to database

#### **Bulk Import**
```bash
# Prepare questions in scripts/questions.js
npm run bulk-import

# Import with validation
node scripts/bulk-import.js
```

---

## 🎨 Design System & UI Components

### **Color Palette**
```css
/* Primary Colors */
--primary-bg: #0f0f0f;        /* Main background */
--secondary-bg: #1a1a1a;      /* Card backgrounds */
--accent-blue: #007acc;       /* Primary accent */
--accent-green: #22c55e;      /* Success states */
--text-primary: #ffffff;      /* Primary text */
--text-secondary: #b3b3b3;    /* Secondary text */
--border-color: #333333;      /* Borders and dividers */
```

### **Typography Scale**
```css
/* Font Hierarchy */
--font-heading: 'Inter', sans-serif;
--font-body: 'Inter', sans-serif;
--font-code: 'JetBrains Mono', monospace;

/* Size Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
```

### **Component Design Patterns**

#### **Button Variations**
```typescript
// Primary Button
<Button bg="#007acc" color="white" _hover={{ bg: "#0099ff" }}>
  Primary Action
</Button>

// Secondary Button  
<Button variant="outline" color="#007acc" borderColor="#007acc">
  Secondary Action
</Button>

// Ghost Button
<Button variant="ghost" color="#b3b3b3" _hover={{ bg: "#1a1a1a" }}>
  Subtle Action
</Button>
```

#### **Card Components**
```typescript
// Question Card
<Box
  bg="#1a1a1a"
  border="1px solid #333333"
  borderRadius="12px"
  p={6}
  _hover={{ borderColor: "#007acc", transform: "translateY(-2px)" }}
  transition="all 0.2s ease"
>
  {/* Card Content */}
</Box>
```

### **Responsive Breakpoints**
```css
/* Mobile First Approach */
--mobile: 320px;     /* Small phones */
--tablet: 768px;     /* Tablets */
--desktop: 1024px;   /* Small desktops */
--wide: 1280px;      /* Large desktops */
--ultrawide: 1536px; /* Ultra-wide displays */
```

---

## 🔧 Development Guide

### **Code Quality Standards**

#### **TypeScript Configuration**
```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### **ESLint Rules**
```javascript
// eslint.config.mjs
export default [
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "react-hooks/exhaustive-deps": "error",
      "prefer-const": "error"
    }
  }
];
```

### **Testing Strategy**

#### **Unit Tests**
```bash
# Run unit tests
npm run test

# Run with coverage
npm run test:coverage
```

#### **E2E Testing**
```bash
# Install Playwright
npm install @playwright/test

# Run E2E tests
npm run test:e2e
```

### **Performance Optimization**

#### **Bundle Analysis**
```bash
# Analyze bundle size
npm run analyze

# Build performance report
npm run build:analyze
```

#### **Database Optimization**
```typescript
// MongoDB Indexing Strategy
const questionSchema = new Schema({
  title: { type: String, index: true },
  createdAt: { type: Date, index: true },
  points: { type: Number, index: true }
});

// Compound Indexes
questionSchema.index({ title: 'text', description: 'text' });
```

---

## 📊 API Documentation

### **Questions API**

#### **GET /api/questions**
```typescript
// Get all questions
Response: {
  success: boolean;
  data: Question[];
  total: number;
}
```

#### **POST /api/questions**
```typescript
// Create new question (Admin only)
Request: {
  title: string;
  description: string;
  code: string;
  expectedOutput: string;
  points?: number;
  adminKey: string;
}

Response: {
  success: boolean;
  data: Question;
  message: string;
}
```

### **Bookmarks API**

#### **GET /api/bookmarks**
```typescript
// Get user bookmarks
Request Query: {
  sessionId: string;
}

Response: {
  success: boolean;
  bookmarks: string[]; // Question IDs
}
```

#### **POST /api/bookmarks**
```typescript
// Toggle bookmark
Request: {
  questionId: string;
  sessionId: string;
}

Response: {
  success: boolean;
  isBookmarked: boolean;
  message: string;
}
```

### **Completion API**

#### **GET /api/completed**
```typescript
// Get completed questions
Request Query: {
  sessionId: string;
}

Response: {
  success: boolean;
  completed: string[]; // Question IDs
}
```

#### **POST /api/completed**
```typescript
// Toggle completion status
Request: {
  questionId: string;
  sessionId: string;
}

Response: {
  success: boolean;
  isCompleted: boolean;
  message: string;
}
```

---

## 🔍 Advanced Features

### **Search & Filter System**

#### **Search Implementation**
```typescript
// Real-time search with debouncing
const useSearch = (questions: Question[], query: string) => {
  return useMemo(() => {
    if (!query.trim()) return questions;
    
    return questions.filter(q => 
      q.title.toLowerCase().includes(query.toLowerCase()) ||
      q.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [questions, query]);
};
```

#### **Filter Categories**
```typescript
type FilterType = 
  | 'all'           // Show all questions
  | 'starred'       // Bookmarked questions only
  | 'completed'     // Completed questions only
  | 'not-completed' // Incomplete questions only
  | 'last-added'    // Recently added (newest first)
  | 'first-added'   // Oldest questions first
```

### **Progress Tracking**

#### **Completion Analytics**
```typescript
interface ProgressStats {
  totalQuestions: number;
  completedQuestions: number;
  completionRate: number;
  totalPoints: number;
  earnedPoints: number;
  streak: number;
  lastActivity: Date;
}
```

#### **Session Management**
```typescript
// Session-based persistence
const sessionManager = {
  generateSessionId: () => 'session_' + Math.random().toString(36).substr(2, 9),
  getSessionId: () => sessionStorage.getItem('questionBankSessionId'),
  setSessionId: (id: string) => sessionStorage.setItem('questionBankSessionId', id)
};
```

---

## 🚀 Performance & Optimization

### **Core Web Vitals**
```typescript
// Performance Metrics Target
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
```

### **Optimization Techniques**

#### **Code Splitting**
```typescript
// Dynamic imports for better performance
const QuestionDetail = dynamic(() => import('@/components/QuestionDetail'), {
  loading: () => <QuestionSkeleton />
});
```

#### **Image Optimization**
```typescript
// Next.js Image optimization
import Image from 'next/image';

<Image
  src="/hero-image.png"
  alt="Question Bank"
  width={1200}
  height={600}
  priority
  placeholder="blur"
/>
```

#### **Database Connection Pooling**
```typescript
// MongoDB connection optimization
const connectDB = async () => {
  if (cached.conn) return cached.conn;
  
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
};
```

---

## 📈 Analytics & Monitoring

### **Error Tracking**
```typescript
// Error boundary implementation
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Error:', error, errorInfo);
    // Send to error tracking service
  }
}
```

### **Performance Monitoring**
```typescript
// Custom performance tracking
const trackPerformance = (metric: string, value: number) => {
  // Send metrics to analytics service
  console.log(`Performance: ${metric} = ${value}ms`);
};
```

---

## 🤝 Contributing

### **Development Workflow**

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/question-bank-app.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow the coding standards
   - Add tests for new features
   - Update documentation

4. **Run Tests**
   ```bash
   npm run test
   npm run lint
   npm run type-check
   ```

5. **Submit Pull Request**
   - Clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

### **Coding Standards**

#### **Component Structure**
```typescript
// Recommended component pattern
interface ComponentProps {
  // Props interface
}

export default function Component({ props }: ComponentProps) {
  // Hooks at the top
  const [state, setState] = useState();
  
  // Event handlers
  const handleAction = () => {
    // Implementation
  };
  
  // Render
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}
```

#### **File Naming Conventions**
```
Components: PascalCase (QuestionDetail.tsx)
Pages: lowercase (dashboard/page.tsx)
Utilities: camelCase (mongodb.ts)
Constants: UPPER_CASE (API_ENDPOINTS.ts)
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 🙏 Acknowledgments

### **Technologies & Libraries**
- **[Next.js](https://nextjs.org/)** - The React Framework for Production
- **[Chakra UI](https://chakra-ui.com/)** - Modular and Accessible UI Components
- **[MongoDB](https://www.mongodb.com/)** - The Database for Modern Applications
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript at Any Scale
- **[Mongoose](https://mongoosejs.com/)** - Elegant MongoDB Object Modeling

### **Inspiration & Resources**
- **Design System**: Inspired by modern coding environments
- **UX Patterns**: Based on popular learning platforms
- **Performance**: Following Next.js and React best practices

---

## 📞 Support & Contact

### **Getting Help**
- 📖 **Documentation**: Check this README and inline code comments
- 🐛 **Bug Reports**: Create an issue on GitHub
- 💡 **Feature Requests**: Open a discussion thread
- 📧 **Direct Contact**: [your.email@example.com](mailto:your.email@example.com)

### **Community**
- 🌟 **Star the Project**: If you find it useful
- 🔄 **Share**: Help others discover this project
- 🤝 **Contribute**: Join the development community

---

<div align="center">

**Built with ❤️ using Next.js, MongoDB Atlas, and Chakra UI**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/question-bank-app?style=social)](https://github.com/yourusername/question-bank-app/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/question-bank-app?style=social)](https://github.com/yourusername/question-bank-app/network/members)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/question-bank-app)](https://github.com/yourusername/question-bank-app/issues)

</div>

---

*Last updated: July 2025*
