'use client';

import {
  Box,
  Text,
  Badge,
  Flex,
  Button,
} from '@chakra-ui/react';
import { useQuestion } from '@/context/QuestionContext';

interface Question {
  _id: string;
  title: string;
  points?: number;
}

interface SidebarProps {
  questions: Question[];
  selectedQuestionId: string | null;
  onQuestionSelectAction: (questionId: string) => void;
  isFullPage?: boolean;
  showBookmarkButton?: boolean;
}

export default function Sidebar({ questions, selectedQuestionId, onQuestionSelectAction, isFullPage = false, showBookmarkButton = false }: SidebarProps) {
  const { isCompleted, isBookmarked, toggleBookmark } = useQuestion();

  return (
    <Box
      w={isFullPage ? "100%" : "320px"}
      h="100vh"
      bg="#1a1a1a"
      borderRight={isFullPage ? "none" : "1px solid #333333"}
      overflowY="auto"
      position={isFullPage ? "relative" : "fixed"}
      left={isFullPage ? "auto" : 0}
      top={isFullPage ? "auto" : 0}
      zIndex={100}
      css={{
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#1a1a1a',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#333333',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#666666',
        }
      }}
    >
      {/* Header */}
      <Box p={6} borderBottom="1px solid #333333" bg="#2a2a2a">
        <Text 
          fontSize={isFullPage ? "2xl" : "lg"}
          fontWeight="bold" 
          mb={3} 
          color="#007acc"
          display="flex"
          alignItems="center"
          gap={2}
        >
          📚 {isFullPage ? "Programming Practice Questions" : "Question Bank"}
        </Text>
        
        {/* Progress Info */}
        <Text fontSize="sm" color="#b3b3b3">
          {questions.filter(q => isCompleted(q._id)).length} of {questions.length} completed
        </Text>
      </Box>
      
      {/* Questions List */}
      <Box p={isFullPage ? 6 : 2} className="custom-scrollbar">
        {isFullPage && questions.length > 0 && (
          <Flex align="center" justify="space-between" mb={6}>
            <Text fontSize="lg" color="#b3b3b3">
              Select a question to start practicing:
            </Text>
            <Text fontSize="sm" color="#666666" bg="#2a2a2a" px={3} py={1} borderRadius="full">
              {questions.length} total
            </Text>
          </Flex>
        )}
        
        {questions.map((question, index) => {
          const completed = isCompleted(question._id);
          const selected = selectedQuestionId === question._id;
          
          return (
            <Box
              key={question._id}
              mb={isFullPage ? 2 : 1}
              cursor="pointer"
              onClick={() => onQuestionSelectAction(question._id)}
            >
              <Box
                p={isFullPage ? 4 : 3}
                borderRadius={isFullPage ? "8px" : "6px"}
                borderLeft="3px solid"
                borderLeftColor={selected ? '#007acc' : 'transparent'}
                bg={selected ? '#007acc' : 'transparent'}
                color={selected ? 'white' : completed ? '#22c55e' : '#ffffff'}
                border={isFullPage ? "1px solid #333333" : "none"}
                transition="all 0.2s ease"
                _hover={{
                  bg: selected ? '#007acc' : '#2a2a2a',
                  borderLeftColor: '#007acc',
                  transform: isFullPage ? 'translateY(-1px)' : 'translateX(2px)',
                  boxShadow: isFullPage ? '0 2px 8px rgba(0, 122, 204, 0.2)' : 'none'
                }}
                minH={isFullPage ? "50px" : "auto"}
              >
                <Flex align="center" justify="space-between" h="full">
                  <Flex align="center" flex={1} gap={3}>
                    <Text
                      color={completed ? '#22c55e' : '#666666'}
                      fontSize={isFullPage ? "lg" : "md"}
                      flexShrink={0}
                    >
                      {completed ? '✅' : '⭕'}
                    </Text>
                    {showBookmarkButton && (
                      <Button
                        variant="ghost"
                        size="sm"
                        p={1}
                        minW="auto"
                        h="auto"
                        w="32px"
                        color={isBookmarked(question._id) ? '#fbbf24' : '#666666'}
                        fontSize="lg"
                        transition="all 0.2s ease"
                        _hover={{
                          color: '#fbbf24',
                          bg: 'rgba(251, 191, 36, 0.1)',
                          transform: 'scale(1.1)'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(question._id);
                        }}
                        title={isBookmarked(question._id) ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {isBookmarked(question._id) ? '⭐' : '☆'}
                      </Button>
                    )}
                    <Box flex={1}>
                      <Text 
                        fontSize={isFullPage ? "sm" : "sm"}
                        fontWeight="500" 
                        overflow="hidden"
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        lineHeight="1.3"
                      >
                        Problem {index + 1}: {question.title}
                      </Text>
                    </Box>
                  </Flex>
                  
                  {question.points && (
                    <Badge
                      bg={completed ? '#22c55e' : '#2a2a2a'}
                      color={completed ? 'white' : '#b3b3b3'}
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="full"
                      ml={2}
                      flexShrink={0}
                    >
                      {question.points}pt
                    </Badge>
                  )}
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Box>
      
      {questions.length === 0 && (
        <Box textAlign="center" mt={8} p={4}>
          <Text color="#666666" fontSize="sm">
            No questions available
          </Text>
        </Box>
      )}
    </Box>
  );
}
