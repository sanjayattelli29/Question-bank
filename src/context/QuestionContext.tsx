'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface QuestionContextType {
  completedQuestions: Set<string>;
  bookmarkedQuestions: Set<string>;
  isLoading: boolean;
  toggleCompleted: (questionId: string) => Promise<void>;
  toggleBookmark: (questionId: string) => Promise<void>;
  isCompleted: (questionId: string) => boolean;
  isBookmarked: (questionId: string) => boolean;
}

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export function QuestionProvider({ children }: { children: ReactNode }) {
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Initialize and load data from APIs
  useEffect(() => {
    const initializeData = async () => {
      try {
        setIsLoading(true);

        // Load completed questions from API
        const completedResponse = await fetch(`/api/completed`);
        const completedData = await completedResponse.json();
        if (completedData.success) {
          setCompletedQuestions(new Set(completedData.completed));
        }

        // Load bookmarks from API
        const bookmarkResponse = await fetch(`/api/bookmarks`);
        const bookmarkData = await bookmarkResponse.json();
        if (bookmarkData.success) {
          setBookmarkedQuestions(new Set(bookmarkData.bookmarks));
        }
      } catch (error) {
        console.error('Error initializing data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  const toggleCompleted = async (questionId: string) => {
    try {
      const response = await fetch('/api/completed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId }),
      });

      const data = await response.json();

      if (data.success) {
        setCompletedQuestions(prev => {
          const newSet = new Set(prev);
          if (data.isCompleted) {
            newSet.add(questionId);
          } else {
            newSet.delete(questionId);
          }
          return newSet;
        });
      }
    } catch (error) {
      console.error('Error toggling completion:', error);
    }
  };

  const toggleBookmark = async (questionId: string) => {
    try {
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId }),
      });

      const data = await response.json();

      if (data.success) {
        setBookmarkedQuestions(prev => {
          const newSet = new Set(prev);
          if (data.isBookmarked) {
            newSet.add(questionId);
          } else {
            newSet.delete(questionId);
          }
          return newSet;
        });
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  const isCompleted = (questionId: string) => {
    return completedQuestions.has(questionId);
  };

  const isBookmarked = (questionId: string) => {
    return bookmarkedQuestions.has(questionId);
  };

  return (
    <QuestionContext.Provider value={{ 
      completedQuestions, 
      bookmarkedQuestions,
      isLoading,
      toggleCompleted, 
      toggleBookmark,
      isCompleted,
      isBookmarked
    }}>
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestion() {
  const context = useContext(QuestionContext);
  if (context === undefined) {
    throw new Error('useQuestion must be used within a QuestionProvider');
  }
  return context;
}
