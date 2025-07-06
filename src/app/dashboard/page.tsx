'use client';

import { useState, useEffect, useMemo } from 'react';
import { Box, Flex, Text, VStack, Button } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import QuestionDetail from '@/components/QuestionDetail';
import AddQuestionForm from '@/components/AddQuestionForm';
import FilterPanel, { FilterType } from '@/components/FilterPanel';
import { useQuestion } from '@/context/QuestionContext';

interface Question {
  _id: string;
  title: string;
  description: string;
  code: string;
  expectedOutput: string;
  points?: number;
  createdAt?: string;
}

export default function Dashboard() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { isCompleted, isBookmarked } = useQuestion();

  const selectedQuestion = questions.find(q => q._id === selectedQuestionId);

  // Filter and sort questions based on active filter
  const filteredQuestions = useMemo(() => {
    let filtered = [...questions];

    // Apply search filter first
    if (searchQuery.trim()) {
      filtered = filtered.filter(q => 
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (activeFilter) {
      case 'starred':
        filtered = filtered.filter(q => isBookmarked(q._id));
        break;
      case 'completed':
        filtered = filtered.filter(q => isCompleted(q._id));
        break;
      case 'not-completed':
        filtered = filtered.filter(q => !isCompleted(q._id));
        break;
      case 'last-added':
        filtered = filtered.sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime());
        break;
      case 'first-added':
        filtered = filtered.sort((a, b) => new Date(a.createdAt || '').getTime() - new Date(b.createdAt || '').getTime());
        break;
      default:
        // 'all' - no filtering
        break;
    }

    return filtered;
  }, [questions, activeFilter, isCompleted, isBookmarked, searchQuery]);

  // Calculate counts for filter panel
  const filterCounts = useMemo(() => ({
    all: questions.length,
    starred: questions.filter(q => isBookmarked(q._id)).length,
    completed: questions.filter(q => isCompleted(q._id)).length,
    notCompleted: questions.filter(q => !isCompleted(q._id)).length,
  }), [questions, isCompleted, isBookmarked]);

  const fetchQuestions = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/questions');
      const data = await response.json();
      
      if (data.success) {
        setQuestions(data.data);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleQuestionSelectAction = (questionId: string) => {
    setSelectedQuestionId(questionId);
    setShowAddForm(false);
  };

  const handleQuestionAddedAction = () => {
    fetchQuestions();
    setShowAddForm(false);
  };

  const handleBackToList = () => {
    setSelectedQuestionId(null);
    setShowAddForm(false);
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setSelectedQuestionId(null);
  };

  const handleFilterChangeAction = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearchAction = (query: string) => {
    setSearchQuery(query);
  };

  if (isLoading) {
    return (
      <Flex h="100vh" align="center" justify="center" bg="#0f0f0f">
        <VStack gap={4}>
          <Box className="loading" />
          <Text color="#b3b3b3" fontSize="lg">Loading questions...</Text>
        </VStack>
      </Flex>
    );
  }

  return (
    <Box bg="#0f0f0f" minH="100vh">
      {/* Header - Only show when not viewing a specific question */}
      {!selectedQuestionId && !showAddForm && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          h="70px"
          bg="#1a1a1a"
          borderBottom="1px solid #333333"
          zIndex={1000}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Flex h="full" px={8} align="center" justify="space-between">
            <Text fontSize="xl" fontWeight="bold" color="#007acc">
              📚 Question Bank - Programming Practice
            </Text>
            <Flex align="center" gap={4}>
              <Text fontSize="sm" color="#b3b3b3">
                {filteredQuestions.length} of {questions.length} questions shown
              </Text>
              {searchQuery && (
                <Text fontSize="sm" color="#22c55e" bg="rgba(34, 197, 94, 0.1)" px={2} py={1} borderRadius="md">
                  Search: &ldquo;{searchQuery}&rdquo;
                </Text>
              )}
              {activeFilter !== 'all' && (
                <Text fontSize="sm" color="#007acc" bg="rgba(0, 122, 204, 0.1)" px={2} py={1} borderRadius="md">
                  Filter: {activeFilter.replace('-', ' ')}
                </Text>
              )}
              <Button
                size="sm"
                variant="ghost"
                color="#007acc"
                _hover={{ bg: 'rgba(0, 122, 204, 0.1)' }}
                onClick={handleFilterToggle}
              >
                {isFilterOpen ? '◀ Hide Filters' : '▶ Show Filters'}
              </Button>
              <Button
                size="sm"
                bg="#007acc"
                color="white"
                _hover={{ bg: '#0099ff' }}
                onClick={handleShowAddForm}
              >
                + Add Question
              </Button>
            </Flex>
          </Flex>
        </Box>
      )}

      {/* Full-page Question List with Filters */}
      {!selectedQuestionId && !showAddForm && (
        <Box pt={questions.length > 0 ? "70px" : "0"} minH="100vh">
          <Flex h={`calc(100vh - ${questions.length > 0 ? '70px' : '0px'})`}>
            <Box flex={1}>
              <Sidebar
                questions={filteredQuestions}
                selectedQuestionId={selectedQuestionId}
                onQuestionSelectAction={handleQuestionSelectAction}
                isFullPage={true}
                showBookmarkButton={true}
              />
            </Box>
            <FilterPanel 
              activeFilter={activeFilter}
              onFilterChangeAction={handleFilterChangeAction}
              isOpen={isFilterOpen}
              onToggleAction={handleFilterToggle}
              searchQuery={searchQuery}
              onSearchAction={handleSearchAction}
              counts={filterCounts}
            />
          </Flex>
        </Box>
      )}

      {/* Add Question Form */}
      {showAddForm && (
        <Box minH="100vh" p={8}>
          <Box maxW="4xl" mx="auto">
            <Flex align="center" mb={6}>
              <Button
                variant="ghost"
                color="#007acc"
                _hover={{ bg: '#1a1a1a' }}
                onClick={handleBackToList}
              >
                ← Back to Questions
              </Button>
            </Flex>
            <AddQuestionForm onQuestionAddedAction={handleQuestionAddedAction} />
          </Box>
        </Box>
      )}

      {/* Question Detail View */}
      {selectedQuestion && !showAddForm && (
        <Box minH="100vh">
          <QuestionDetail 
            question={selectedQuestion} 
            onBack={handleBackToList}
          />
        </Box>
      )}

      {/* Empty State - No questions match filter */}
      {!selectedQuestionId && !showAddForm && questions.length > 0 && filteredQuestions.length === 0 && (
        <Flex h={`calc(100vh - 70px)`} align="center" justify="center" p={8}>
          <VStack gap={6} textAlign="center" maxW="600px">
            <Box fontSize="4rem" mb={4}>
              🔍
            </Box>
            <Text fontSize="2xl" fontWeight="bold" color="#ffffff">
              No questions match your filter
            </Text>
            <Text fontSize="lg" color="#b3b3b3" lineHeight="1.6">
              Try adjusting your filter criteria or add more questions to the bank.
            </Text>
            <Button
              size="lg"
              variant="outline"
              color="#007acc"
              borderColor="#007acc"
              _hover={{ bg: 'rgba(0, 122, 204, 0.1)' }}
              onClick={() => setActiveFilter('all')}
              mt={4}
            >
              Show All Questions
            </Button>
          </VStack>
        </Flex>
      )}

      {/* Empty State - No questions and not showing add form */}
      {!selectedQuestionId && !showAddForm && questions.length === 0 && (
        <Flex h="100vh" align="center" justify="center" p={8}>
          <VStack gap={6} textAlign="center" maxW="600px">
            <Box fontSize="4rem" mb={4}>
              🎯
            </Box>
            <Text fontSize="2xl" fontWeight="bold" color="#ffffff">
              Welcome to Question Bank
            </Text>
            <Text fontSize="lg" color="#b3b3b3" lineHeight="1.6">
              No questions available yet. Start by adding your first programming question!
            </Text>
            <Button
              size="lg"
              bg="#007acc"
              color="white"
              _hover={{ bg: '#0099ff', transform: 'translateY(-2px)' }}
              onClick={handleShowAddForm}
              mt={4}
            >
              Add First Question
            </Button>
          </VStack>
        </Flex>
      )}
      </Box>
  );
}
