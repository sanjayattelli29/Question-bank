'use client';

import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

interface AddQuestionFormProps {
  onQuestionAddedAction: () => void;
}

export default function AddQuestionForm({ onQuestionAddedAction }: AddQuestionFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    code: '',
    expectedOutput: '',
    points: 10,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Reset form
        setFormData({
          title: '',
          description: '',
          code: '',
          expectedOutput: '',
          points: 10,
        });
        onQuestionAddedAction();
        alert('Question added successfully!');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      alert('Error submitting question');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box 
      bg="#0f0f0f" 
      minH="100vh"
      p={8}
    >
      <Box 
        maxW="4xl" 
        mx="auto"
        bg="#1a1a1a"
        border="1px solid #333333"
        borderRadius="16px"
        overflow="hidden"
        boxShadow="0 10px 30px rgba(0, 0, 0, 0.5)"
      >
        {/* Header */}
        <Box 
          bg="#2a2a2a" 
          p={6} 
          borderBottom="1px solid #333333"
        >
          <Text fontSize="2xl" fontWeight="bold" color="#ffffff" mb={1}>
            ➕ Add New Question
          </Text>
          <Text color="#b3b3b3" fontSize="md">
            Create a new Python programming challenge for students to solve
          </Text>
        </Box>

        {/* Form */}
        <Box p={6}>
          <form onSubmit={handleSubmit}>
            <VStack gap={5} align="stretch">
              {/* Question Title */}
              <Box>
                <Box 
                  mb={2} 
                  color="#ffffff" 
                  fontSize="md" 
                  fontWeight="600"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Text>📋 Question Title</Text>
                  <Text color="#ff6b6b" fontSize="md">*</Text>
                </Box>
                <Input
                  placeholder="e.g., Find the smallest number in an array"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  bg="#2a2a2a"
                  border="2px solid #333333"
                  borderRadius="8px"
                  color="#ffffff"
                  fontSize="sm"
                  h="40px"
                  _placeholder={{ color: '#666666' }}
                  _hover={{ borderColor: '#007acc' }}
                  _focus={{ 
                    borderColor: '#007acc', 
                    boxShadow: '0 0 0 1px #007acc',
                    bg: '#333333'
                  }}
                  required
                />
              </Box>

              {/* Description */}
              <Box>
                <Box 
                  mb={2} 
                  color="#ffffff" 
                  fontSize="md" 
                  fontWeight="600"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Text>📖 Problem Description</Text>
                  <Text color="#ff6b6b" fontSize="md">*</Text>
                </Box>
                <Textarea
                  placeholder="Explain what the student needs to understand, implement, or solve..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  bg="#2a2a2a"
                  border="2px solid #333333"
                  borderRadius="8px"
                  color="#ffffff"
                  fontSize="sm"
                  _placeholder={{ color: '#666666' }}
                  _hover={{ borderColor: '#007acc' }}
                  _focus={{ 
                    borderColor: '#007acc', 
                    boxShadow: '0 0 0 1px #007acc',
                    bg: '#333333'
                  }}
                  resize="vertical"
                  required
                />
              </Box>

              {/* Python Code */}
              <Box>
                <Box 
                  mb={2} 
                  color="#ffffff" 
                  fontSize="md" 
                  fontWeight="600"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Text>🐍 Python Code</Text>
                  <Text color="#ff6b6b" fontSize="md">*</Text>
                </Box>
                <Box 
                  bg="#1a1a1a" 
                  border="2px solid #333333" 
                  borderRadius="8px"
                  p={1}
                  _focusWithin={{ 
                    borderColor: '#007acc',
                    boxShadow: '0 0 0 1px #007acc'
                  }}
                >
                  <Textarea
                    placeholder="# Enter your Python code here..."
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    rows={8}
                    fontFamily="'Fira Code', 'Cascadia Code', 'Consolas', monospace"
                    fontSize="13px"
                    bg="transparent"
                    border="none"
                    color="#ffffff"
                    _placeholder={{ color: '#666666' }}
                    _focus={{ 
                      boxShadow: 'none',
                      border: 'none'
                    }}
                    resize="vertical"
                    required
                  />
                </Box>
              </Box>

              {/* Expected Output */}
              <Box>
                <Box 
                  mb={2} 
                  color="#ffffff" 
                  fontSize="md" 
                  fontWeight="600"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Text>📤 Expected Output</Text>
                  <Text color="#ff6b6b" fontSize="md">*</Text>
                </Box>
                <Box 
                  bg="#1a1a1a" 
                  border="2px solid #333333" 
                  borderRadius="8px"
                  p={1}
                  _focusWithin={{ 
                    borderColor: '#007acc',
                    boxShadow: '0 0 0 1px #007acc'
                  }}
                >
                  <Textarea
                    placeholder="Enter the expected output..."
                    value={formData.expectedOutput}
                    onChange={(e) => setFormData({ ...formData, expectedOutput: e.target.value })}
                    rows={3}
                    fontFamily="'Fira Code', 'Cascadia Code', 'Consolas', monospace"
                    fontSize="13px"
                    bg="transparent"
                    border="none"
                    color="#ffffff"
                    _placeholder={{ color: '#666666' }}
                    _focus={{ 
                      boxShadow: 'none',
                      border: 'none'
                    }}
                    resize="vertical"
                    required
                  />
                </Box>
              </Box>

              {/* Submit Button */}
              <Box pt={2}>
                <Button
                  type="submit"
                  bg="#007acc"
                  color="white"
                  size="md"
                  h="45px"
                  fontSize="md"
                  fontWeight="600"
                  borderRadius="8px"
                  w="full"
                  _hover={{ 
                    bg: '#0099ff',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 122, 204, 0.4)'
                  }}
                  _active={{ transform: 'translateY(0)' }}
                  transition="all 0.3s ease"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "⏳ Adding Question..."
                  ) : (
                    "✨ Add Question to Bank"
                  )}
                </Button>
              </Box>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  );
}