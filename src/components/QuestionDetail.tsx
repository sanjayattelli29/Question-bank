'use client';

import {
  Box,
  Text,
  Button,
  VStack,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { useQuestion } from '@/context/QuestionContext';

interface Question {
  _id: string;
  title: string;
  description: string;
  code: string;
  expectedOutput: string;
  points?: number;
}

interface QuestionDetailProps {
  question: Question;
  onBack?: () => void;
}

export default function QuestionDetail({ question, onBack }: QuestionDetailProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);
  const { isCompleted, toggleCompleted } = useQuestion();

  const handleMarkComplete = () => {
    toggleCompleted(question._id);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(question.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <Box 
      w="100vw"
      h="100vh"
      bg="#0f0f0f"
      overflow="hidden"
    >
      {/* Back Button - Fixed at top */}
      {onBack && (
        <Box
          position="fixed"
          top={4}
          left={4}
          zIndex={1000}
        >
          <Button
            variant="ghost"
            color="#007acc"
            _hover={{ bg: '#1a1a1a' }}
            onClick={onBack}
            size="sm"
          >
            ← Back to Questions
          </Button>
        </Box>
      )}

      {/* Main 2-Column Layout */}
      <Flex h="100vh" pt={onBack ? "60px" : "0"}>
        {/* Left Column - Question Details */}
        <Box
          w="50%"
          h="100%"
          overflowY="auto"
          bg="#0f0f0f"
          borderRight="1px solid #333333"
          className="custom-scrollbar"
        >
          <Box p={8}>
            <VStack align="stretch" gap={6}>
              {/* Header */}
              <Box>
                <Flex align="center" gap={3} mb={4}>
                  <Text
                    color={isCompleted(question._id) ? '#22c55e' : '#666666'}
                    fontSize="3xl"
                  >
                    {isCompleted(question._id) ? '✅' : '⭕'}
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="#ffffff">
                    {question.title}
                  </Text>
                </Flex>
                
                <Flex align="center" gap={4} mb={6}>
                  <Badge 
                    bg="#007acc"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="600"
                  >
                    Python
                  </Badge>
                  {question.points && (
                    <Badge 
                      bg="#22c55e"
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="600"
                    >
                      {question.points} points
                    </Badge>
                  )}
                </Flex>
                
                <Button
                  onClick={handleMarkComplete}
                  bg={isCompleted(question._id) ? '#22c55e' : '#007acc'}
                  color="white"
                  _hover={{ 
                    bg: isCompleted(question._id) ? '#16a34a' : '#0099ff',
                    transform: 'translateY(-2px)'
                  }}
                  size="lg"
                  fontWeight="600"
                  transition="all 0.2s ease"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  w="full"
                >
                  <Text fontSize="lg" mr={1}>
                    {isCompleted(question._id) ? '✅' : '⭕'}
                  </Text>
                  {isCompleted(question._id) ? 'Completed' : 'Mark Complete'}
                </Button>
              </Box>

              {/* Description */}
              <Box
                bg="#1a1a1a"
                border="1px solid #333333"
                borderRadius="8px"
                p={6}
              >
                <Text 
                  fontSize="lg" 
                  color="#b3b3b3" 
                  lineHeight="1.7"
                  mb={4}
                >
                  📘 <Text as="span" fontWeight="600" color="#ffffff">Problem Description:</Text>
                </Text>
                <Text 
                  fontSize="md" 
                  color="#b3b3b3" 
                  lineHeight="1.7"
                >
                  {question.description}
                </Text>
              </Box>

              {/* Instructions */}
              <Box
                bg="#1a1a1a"
                border="1px solid #333333"
                borderRadius="8px"
                p={6}
              >
                <Text 
                  fontSize="lg" 
                  color="#b3b3b3" 
                  lineHeight="1.7"
                  mb={4}
                >
                  🎯 <Text as="span" fontWeight="600" color="#ffffff">Instructions:</Text>
                </Text>
                <VStack align="start" gap={2}>
                  <Text fontSize="sm" color="#b3b3b3">• Study the problem description carefully</Text>
                  <Text fontSize="sm" color="#b3b3b3">• Analyze the code on the right panel</Text>
                  <Text fontSize="sm" color="#b3b3b3">• Copy the code to your IDE for testing</Text>
                  <Text fontSize="sm" color="#b3b3b3">• Check the expected output below the code</Text>
                  <Text fontSize="sm" color="#b3b3b3">• Mark as complete when you understand the solution</Text>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Box>

        {/* Right Column - Code and Output */}
        <Box
          w="50%"
          h="100%"
          bg="#1a1a1a"
          display="flex"
          flexDirection="column"
        >
          {/* Code Section */}
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            borderBottom="1px solid #333333"
          >
            {/* Code Header */}
            <Flex 
              justify="space-between" 
              align="center" 
              px={6} 
              py={4} 
              bg="#2a2a2a"
              borderBottom="1px solid #333333"
              flexShrink={0}
            >
              <Text fontSize="lg" fontWeight="600" color="#ffffff">
                🐍 Python Code
              </Text>
              <Button
                onClick={copyToClipboard}
                size="sm"
                bg="#007acc"
                color="white"
                _hover={{ bg: '#0099ff' }}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Text fontSize="lg" mr={1}>
                  {copied ? '✅' : '📋'}
                </Text>
                {copied ? 'Copied!' : 'Copy Code'}
              </Button>
            </Flex>

            {/* Code Block */}
            <Box 
              flex="1" 
              overflow="auto"
              className="custom-scrollbar"
            >
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '24px',
                  background: '#1e1e1e',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  fontFamily: 'var(--font-fira-code), Consolas, Monaco, monospace',
                  height: '100%',
                  minHeight: '100%'
                }}
                showLineNumbers
                lineNumberStyle={{
                  color: '#666666',
                  marginRight: '16px',
                  userSelect: 'none'
                }}
              >
                {question.code}
              </SyntaxHighlighter>
            </Box>
          </Box>

          {/* Output Section - Expandable */}
          <Box
            h={showAnswer ? "300px" : "50px"}
            bg="#1a1a1a"
            borderTop="1px solid #333333"
            display="flex"
            flexDirection="column"
            transition="height 0.3s ease"
          >
            {/* Output Header */}
            <Flex 
              justify="space-between" 
              align="center" 
              px={4} 
              py={2} 
              bg="#2a2a2a"
              borderBottom="1px solid #333333"
              flexShrink={0}
            >
              <Text fontSize="lg" fontWeight="600" color="#ffffff">
                � Expected Output
              </Text>
              <Button
                onClick={() => setShowAnswer(!showAnswer)}
                size="sm"
                bg={showAnswer ? "#22c55e" : "#666666"}
                color="white"
                _hover={{ 
                  bg: showAnswer ? "#16a34a" : "#007acc"
                }}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Text fontSize="lg" mr={1}>
                  {showAnswer ? '🙈' : '👁️'}
                </Text>
                {showAnswer ? 'Hide' : 'Show'}
              </Button>
            </Flex>

            {/* Output Content */}
            {showAnswer && (
              <Box 
                flex="1" 
                p={4}
                overflowY="auto"
                className="custom-scrollbar"
              >
                <Box
                  bg="#2a2a2a"
                  border="1px solid #333333"
                  borderRadius="6px"
                  p={4}
                >
                  <Text
                    fontFamily="var(--font-fira-code), Consolas, Monaco, monospace"
                    fontSize="sm"
                    color="#22c55e"
                    bg="#1e1e1e"
                    p={4}
                    borderRadius="4px"
                    whiteSpace="pre-wrap"
                    lineHeight="1.5"
                  >
                    {question.expectedOutput}
                  </Text>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}


