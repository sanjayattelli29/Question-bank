'use client';

import {
  Box,
  Text,
  Button,
  VStack,
  Badge,
  Flex,
  Textarea,
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

export default function QuestionDetail({ question: initialQuestion, onBack }: QuestionDetailProps) {
  const [question, setQuestion] = useState(initialQuestion);
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied] = useState(false);
  const [editedCode, setEditedCode] = useState(question.code);
  const [editedOutput, setEditedOutput] = useState(question.expectedOutput);
  const adminKey = '652487';
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  
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

  const handleEditClick = () => {
    setEditedCode(question.code);
    setEditedOutput(question.expectedOutput);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    if (!editedCode.trim() || !editedOutput.trim()) {
      setSaveMessage('Both code and expected output are required.');
      return;
    }

    setIsLoading(true);
    setSaveMessage('');

    try {
      const response = await fetch('/api/questions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionId: question._id,
          code: editedCode,
          expectedOutput: editedOutput,
          adminKey: adminKey,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSaveMessage('Question updated successfully!');
        
        // Update the question data locally
        setQuestion({
          ...question,
          code: editedCode,
          expectedOutput: editedOutput
        });
        
        // Close modal after 2 seconds to give more time
        setTimeout(() => {
          setShowEditModal(false);
          setSaveMessage('');
        }, 2000);
      } else {
        setSaveMessage(data.error || 'Failed to update question.');
      }
    } catch (error) {
      console.error('Error updating question:', error);
      setSaveMessage('Failed to update question. Please try again.');
    } finally {
      setIsLoading(false);
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
                  bg={isCompleted(question._id) 
                    ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
                    : "linear-gradient(135deg, #007acc 0%, #0099ff 100%)"
                  }
                  color="white"
                  _hover={{ 
                    bg: isCompleted(question._id) 
                      ? "linear-gradient(135deg, #16a34a 0%, #15803d 100%)"
                      : "linear-gradient(135deg, #0099ff 0%, #00bfff 100%)",
                    transform: 'translateY(-2px)',
                    boxShadow: isCompleted(question._id)
                      ? '0 6px 20px rgba(34, 197, 94, 0.4)'
                      : '0 6px 20px rgba(0, 122, 204, 0.4)'
                  }}
                  _active={{
                    transform: 'translateY(0px)'
                  }}
                  size="lg"
                  fontWeight="600"
                  transition="all 0.3s ease"
                  display="flex"
                  alignItems="center"
                  gap={3}
                  w="full"
                  py={6}
                  borderRadius="8px"
                  border={isCompleted(question._id) 
                    ? "1px solid rgba(34, 197, 94, 0.3)"
                    : "1px solid rgba(0, 122, 204, 0.3)"
                  }
                >
                  <Text fontSize="20px">
                    {isCompleted(question._id) ? '✅' : '⭕'}
                  </Text>
                  <Text fontSize="md">
                    {isCompleted(question._id) ? 'Completed' : 'Mark Complete'}
                  </Text>
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
            minH="400px" // Minimum height for code section
            maxH="calc(100vh - 350px)" // Maximum height to leave space for output
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
              <Flex gap={3}>
                <Button
                  onClick={handleEditClick}
                  size="sm"
                  bg="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                  color="white"
                  _hover={{ 
                    bg: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
                  }}
                  _active={{
                    transform: 'translateY(0px)',
                    boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
                  }}
                  transition="all 0.2s ease"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontWeight="600"
                  px={4}
                  py={2}
                  borderRadius="6px"
                  border="1px solid rgba(245, 158, 11, 0.3)"
                >
                  <Text fontSize="16px">
                    ✏️
                  </Text>
                  <Text fontSize="sm">Edit Code</Text>
                </Button>
                <Button
                  onClick={copyToClipboard}
                  size="sm"
                  bg="linear-gradient(135deg, #007acc 0%, #0099ff 100%)"
                  color="white"
                  _hover={{ 
                    bg: "linear-gradient(135deg, #0099ff 0%, #00bfff 100%)",
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(0, 122, 204, 0.4)'
                  }}
                  _active={{
                    transform: 'translateY(0px)',
                    boxShadow: '0 2px 8px rgba(0, 122, 204, 0.3)'
                  }}
                  transition="all 0.2s ease"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  fontWeight="600"
                  px={4}
                  py={2}
                  borderRadius="6px"
                  border="1px solid rgba(0, 122, 204, 0.3)"
                >
                  <Text fontSize="16px">
                    {copied ? '✅' : '📋'}
                  </Text>
                  <Text fontSize="sm">{copied ? 'Copied!' : 'Copy Code'}</Text>
                </Button>
              </Flex>
            </Flex>

            {/* Code Block */}
            <Box 
              flex="1" 
              overflow="auto"
              className="custom-scrollbar code-scroll-area"
              maxH="calc(100vh - 200px)" // Limit the maximum height
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
                  minHeight: 'auto', // Changed from '100%'
                  height: 'auto', // Changed from '100%'
                  overflow: 'visible' // Allow natural overflow
                }}
                showLineNumbers
                lineNumberStyle={{
                  color: '#666666',
                  marginRight: '16px',
                  userSelect: 'none'
                }}
                wrapLongLines={true} // Enable line wrapping for very long lines
              >
                {question.code}
              </SyntaxHighlighter>
            </Box>
          </Box>

          {/* Output Section - Expandable */}
          <Box
            h={showAnswer ? "250px" : "50px"} // Reduced expanded height
            minH="50px" // Ensure minimum height
            bg="#1a1a1a"
            borderTop="1px solid #333333"
            display="flex"
            flexDirection="column"
            transition="height 0.3s ease"
            flexShrink={0} // Prevent shrinking
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
                bg={showAnswer 
                  ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
                  : "linear-gradient(135deg, #666666 0%, #4a5568 100%)"
                }
                color="white"
                _hover={{ 
                  bg: showAnswer 
                    ? "linear-gradient(135deg, #16a34a 0%, #15803d 100%)"
                    : "linear-gradient(135deg, #007acc 0%, #0099ff 100%)",
                  transform: 'translateY(-1px)',
                  boxShadow: showAnswer
                    ? '0 4px 12px rgba(34, 197, 94, 0.4)'
                    : '0 4px 12px rgba(0, 122, 204, 0.4)'
                }}
                _active={{
                  transform: 'translateY(0px)'
                }}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                gap={2}
                fontWeight="600"
                px={4}
                py={2}
                borderRadius="6px"
                border={showAnswer
                  ? "1px solid rgba(34, 197, 94, 0.3)"
                  : "1px solid rgba(102, 102, 102, 0.3)"
                }
              >
                <Text fontSize="16px">
                  {showAnswer ? '🙈' : '👁️'}
                </Text>
                <Text fontSize="sm">
                  {showAnswer ? 'Hide Output' : 'Show Output'}
                </Text>
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

      {/* Edit Overlay */}
      {showEditModal && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.8)"
          zIndex={2000}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Box
            bg="#1a1a1a"
            border="1px solid #333333"
            borderRadius="8px"
            maxW="90vw"
            maxH="90vh"
            w="1000px"
            display="flex"
            flexDirection="column"
            overflow="hidden"
          >
            {/* Header */}
            <Flex 
              justify="space-between" 
              align="center" 
              p={4} 
              borderBottom="1px solid #333333"
              bg="#2a2a2a"
            >
              <Flex align="center" gap={3}>
                <Text fontSize="20px">✏️</Text>
                <Text color="#ffffff" fontSize="lg" fontWeight="600">
                  Edit Question Code & Output
                </Text>
              </Flex>
              <Button
                onClick={() => setShowEditModal(false)}
                size="sm"
                variant="ghost"
                color="#b3b3b3"
                _hover={{ 
                  bg: '#ef4444', 
                  color: 'white',
                  transform: 'scale(1.05)'
                }}
                _active={{
                  transform: 'scale(0.95)'
                }}
                transition="all 0.2s ease"
                borderRadius="6px"
                w="32px"
                h="32px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="16px" fontWeight="bold">✕</Text>
              </Button>
            </Flex>

            {/* Content */}
            <Box p={6} overflowY="auto" flex="1">
              <VStack gap={6} align="stretch">
                {/* Save Message */}
                {saveMessage && (
                  <Box
                    p={3}
                    borderRadius="6px"
                    bg={saveMessage.includes('successfully') ? '#22c55e' : '#ef4444'}
                    color="white"
                    fontSize="sm"
                    textAlign="center"
                  >
                    {saveMessage}
                  </Box>
                )}

                {/* Code Editor */}
                <Box>
                  <Text color="#ffffff" mb={2} fontSize="sm" fontWeight="600">
                    Python Code *
                  </Text>
                  <Textarea
                    value={editedCode}
                    onChange={(e) => setEditedCode(e.target.value)}
                    placeholder="Enter Python code..."
                    minH="300px"
                    bg="#2a2a2a"
                    border="1px solid #333333"
                    color="#ffffff"
                    fontFamily="var(--font-fira-code), Consolas, Monaco, monospace"
                    fontSize="14px"
                    lineHeight="1.6"
                    _placeholder={{ color: '#666666' }}
                    _focus={{ borderColor: '#007acc', boxShadow: '0 0 0 1px #007acc' }}
                    resize="vertical"
                  />
                </Box>

                {/* Expected Output Editor */}
                <Box>
                  <Text color="#ffffff" mb={2} fontSize="sm" fontWeight="600">
                    Expected Output *
                  </Text>
                  <Textarea
                    value={editedOutput}
                    onChange={(e) => setEditedOutput(e.target.value)}
                    placeholder="Enter expected output..."
                    minH="150px"
                    bg="#2a2a2a"
                    border="1px solid #333333"
                    color="#ffffff"
                    fontFamily="var(--font-fira-code), Consolas, Monaco, monospace"
                    fontSize="14px"
                    lineHeight="1.6"
                    _placeholder={{ color: '#666666' }}
                    _focus={{ borderColor: '#007acc', boxShadow: '0 0 0 1px #007acc' }}
                    resize="vertical"
                  />
                </Box>
              </VStack>
            </Box>

            {/* Footer */}
            <Flex 
              justify="end" 
              align="center" 
              p={4} 
              borderTop="1px solid #333333" 
              gap={3}
              bg="#2a2a2a"
            >
              <Button
                variant="ghost"
                onClick={() => setShowEditModal(false)}
                color="#b3b3b3"
                _hover={{ bg: '#333333', color: '#ffffff' }}
                transition="all 0.2s ease"
                px={6}
                py={2}
                borderRadius="6px"
                fontWeight="500"
              >
                <Text fontSize="14px" mr={2}>❌</Text>
                Cancel
              </Button>
              <Button
                onClick={handleSaveEdit}
                bg="linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
                color="white"
                _hover={{ 
                  bg: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)'
                }}
                _active={{
                  transform: 'translateY(0px)',
                  boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)'
                }}
                loading={isLoading}
                loadingText="Saving..."
                disabled={!editedCode.trim() || !editedOutput.trim()}
                transition="all 0.2s ease"
                display="flex"
                alignItems="center"
                gap={2}
                fontWeight="600"
                px={6}
                py={2}
                borderRadius="6px"
                border="1px solid rgba(34, 197, 94, 0.3)"
                _disabled={{
                  bg: '#666666',
                  color: '#999999',
                  cursor: 'not-allowed',
                  transform: 'none',
                  boxShadow: 'none'
                }}
              >
                <Text fontSize="14px">💾</Text>
                Save Changes
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
}


