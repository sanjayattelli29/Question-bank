'use client';

import {
  Box,
  Text,
  VStack,
  Badge,
  Flex,
  Button,
  Container,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

const problemCategories = [
  {
    id: 1,
    title: "Array-Based Problems",
    count: 28,
    color: "#22c55e",
    problems: [
      "Find the smallest number in an array",
      "Find the largest number in an array", 
      "Find the second smallest and second largest element in an array",
      "Reverse a given array",
      "Count frequency of each element in an array",
      "Rearrange array in increasing-decreasing order",
      "Calculate sum of the elements of the array",
      "Rotate array by K elements (Block Swap Algorithm)",
      "Average of all elements in an array",
      "Find the median of the given array",
      "Remove duplicates from a sorted array",
      "Remove duplicates from an unsorted array",
      "Add an element in an array",
      "Find all repeating elements in an array",
      "Find all non-repeating elements in an array",
      "Find all symmetric pairs in an array",
      "Maximum product subarray in an array",
      "Replace each element of the array by its rank",
      "Sort elements of an array by frequency",
      "Rotate array elements to left",
      "Rotate array elements to right",
      "Find equilibrium index of an array",
      "Circular rotation of an array by K positions",
      "Sort array according to the order of another array",
      "Search an element in an array",
      "Check if one array is a subset of another",
      "Count distinct elements in an array",
      "Move all zeros to end of array (common TCS variant)"
    ]
  },
  {
    id: 2,
    title: "Number-Based Problems",
    count: 42,
    color: "#007acc",
    problems: [
      "Check if a number is palindrome or not",
      "Find all palindrome numbers in a range",
      "Check if a number is prime",
      "Find all prime numbers in a range",
      "Check if a number is an Armstrong number",
      "Check if a number is a perfect number",
      "Check if number is even or odd",
      "Check if number is positive or negative",
      "Sum of first N natural numbers",
      "Sum of AP (Arithmetic Progression) series",
      "Sum of GP (Geometric Progression) series",
      "Greatest of two numbers",
      "Greatest of three numbers",
      "Leap year check",
      "Reverse digits of a number",
      "Find maximum digit in a number",
      "Find minimum digit in a number",
      "Print Fibonacci up to Nth term",
      "Factorial of a number",
      "Power of a number",
      "Find all factors of a number",
      "Find all prime factors of a number",
      "Check if a number is a strong number",
      "Check if a number is automorphic",
      "GCD of two numbers",
      "LCM of two numbers",
      "Check if a number is a Harshad number",
      "Check if a number is an abundant number",
      "Sum of digits of a number",
      "Sum of numbers in a range",
      "Permutations: N people in R seats",
      "Add two fractions",
      "Replace all 0s with 1s in an integer",
      "Check if number can be sum of two primes",
      "Area of a circle",
      "Roots of a quadratic equation",
      "Count digits in a number",
      "Convert number to binary string manually",
      "Convert number to hexadecimal manually",
      "Count trailing zeros in factorial",
      "Print binary representation of power of 2",
      "Find Nth digit in a sequence of integers"
    ]
  },
  {
    id: 3,
    title: "Number System Problems",
    count: 7,
    color: "#f59e0b",
    problems: [
      "Convert Binary to Decimal",
      "Convert Binary to Octal",
      "Convert Decimal to Binary",
      "Convert Decimal to Octal",
      "Convert Octal to Binary",
      "Convert Octal to Decimal",
      "Convert digits/numbers to words"
    ]
  },
  {
    id: 4,
    title: "Sorting Algorithm Problems",
    count: 5,
    color: "#ef4444",
    problems: [
      "Bubble Sort Algorithm",
      "Selection Sort Algorithm",
      "Insertion Sort Algorithm",
      "Quick Sort Algorithm",
      "Merge Sort Algorithm"
    ]
  },
  {
    id: 5,
    title: "String-Based Problems",
    count: 20,
    color: "#8b5cf6",
    problems: [
      "Check if a string is palindrome",
      "Count vowels, consonants, spaces",
      "Find ASCII value of a character",
      "Remove all vowels from string",
      "Remove spaces from a string",
      "Remove all non-alphabet characters",
      "Reverse a string",
      "Remove brackets from algebraic expression",
      "Sum of all numbers in a string",
      "Capitalize first and last character of each word",
      "Frequency of characters in a string",
      "Find non-repeating characters",
      "Check if two strings are anagrams",
      "Count common subsequences between two strings",
      "Wildcard matching of two strings",
      "Return maximum occurring character",
      "Remove all duplicates from a string",
      "Print all duplicate characters",
      "Remove characters from string1 present in string2",
      "Replace each letter with next lexicographic letter"
    ]
  },
  {
    id: 6,
    title: "Advanced String and Word Logic",
    count: 8,
    color: "#06b6d4",
    problems: [
      "Find the largest word in a string",
      "Sort characters in a string",
      "Count number of words in a string",
      "Find word with highest repeated letters",
      "Change case of each character",
      "Concatenate two strings",
      "Find substring in a string and its index",
      "Reverse words in a string"
    ]
  }
];

export default function ProblemListPage() {
  const totalProblems = problemCategories.reduce((sum, category) => sum + category.count, 0);
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);

  const toggleCategory = (categoryId: number) => {
    setVisibleCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const showAllCategories = () => {
    setVisibleCategories(problemCategories.map(cat => cat.id));
  };

  const hideAllCategories = () => {
    setVisibleCategories([]);
  };

  return (
    <Box
      minH="100vh"
      bg="#0f0f0f"
      color="#ffffff"
    >
      {/* Header */}
      <Box
        bg="#1a1a1a"
        borderBottom="1px solid #333333"
        py={6}
        px={8}
      >
        <Container maxW="1400px">
          <Flex justify="space-between" align="center" mb={4}>
            <VStack align="start" gap={2}>
              <Text fontSize="3xl" fontWeight="bold" color="#ffffff">
                📚 Python Programming Problems List
              </Text>
              <Text fontSize="lg" color="#b3b3b3">
                Complete collection of {totalProblems} programming problems across {problemCategories.length} categories
                {visibleCategories.length > 0 && (
                  <Text as="span" color="#22c55e" fontWeight="600">
                    {' '}• Showing {visibleCategories.length} of {problemCategories.length} categories
                  </Text>
                )}
              </Text>
            </VStack>
            
            <Link href="/dashboard" passHref>
              <Button
                bg="linear-gradient(135deg, #007acc 0%, #0099ff 100%)"
                color="white"
                _hover={{ 
                  bg: "linear-gradient(135deg, #0099ff 0%, #00bfff 100%)",
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0, 122, 204, 0.4)'
                }}
                _active={{
                  transform: 'translateY(0px)'
                }}
                size="lg"
                fontWeight="600"
                transition="all 0.3s ease"
                display="flex"
                alignItems="center"
                gap={2}
                px={6}
                py={6}
                borderRadius="8px"
                border="1px solid rgba(0, 122, 204, 0.3)"
              >
                <Text>Back to Dashboard</Text>
              </Button>
            </Link>
          </Flex>
          
          {/* Category Summary */}
          <VStack gap={4} align="stretch">
            {/* Control Buttons */}
            <Flex gap={3} justify="center">
              <Button
                onClick={showAllCategories}
                size="sm"
                bg="linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
                color="white"
                _hover={{ 
                  bg: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)'
                }}
                transition="all 0.2s ease"
                fontWeight="600"
                px={4}
                borderRadius="6px"
              >
                <Text fontSize="14px" mr={2}>👁️</Text>
                Show All
              </Button>
              <Button
                onClick={hideAllCategories}
                size="sm"
                bg="linear-gradient(135deg, #666666 0%, #4a5568 100%)"
                color="white"
                _hover={{ 
                  bg: "linear-gradient(135deg, #4a5568 0%, #2d3748 100%)",
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(102, 102, 102, 0.4)'
                }}
                transition="all 0.2s ease"
                fontWeight="600"
                px={4}
                borderRadius="6px"
              >
                <Text fontSize="14px" mr={2}>🙈</Text>
                Hide All
              </Button>
            </Flex>

            {/* Category Badges */}
            <Flex gap={4} wrap="wrap" justify="center">
              {problemCategories.map((category) => (
                <Badge
                  key={category.id}
                  bg={visibleCategories.includes(category.id) ? category.color : "#666666"}
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="600"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  cursor="pointer"
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${visibleCategories.includes(category.id) ? category.color + '40' : '#66666640'}`,
                  }}
                  _active={{
                    transform: 'translateY(0px)'
                  }}
                  transition="all 0.2s ease"
                  onClick={() => toggleCategory(category.id)}
                  border={visibleCategories.includes(category.id) ? `2px solid ${category.color}` : "2px solid transparent"}
                >
                  <Text>{visibleCategories.includes(category.id) ? '✅' : '⭕'}</Text>
                  <Text>{category.title}: {category.count} Problems</Text>
                </Badge>
              ))}
            </Flex>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="2000px" py={10} px={10}>
        {visibleCategories.length === 0 ? (
          /* No categories selected message */
          <Box
            bg="#1a1a1a"
            border="1px solid #333333"
            borderRadius="8px"
            p={12}
            textAlign="center"
          >
            <Text fontSize="24px" mb={4}>📂</Text>
            <Text fontSize="xl" fontWeight="bold" color="#ffffff" mb={2}>
              No Categories Selected
            </Text>
            <Text fontSize="md" color="#b3b3b3" mb={6}>
              Click on any category above to view its problems, or use &quot;Show All&quot; to see everything.
            </Text>
            <Button
              onClick={showAllCategories}
              bg="linear-gradient(135deg, #007acc 0%, #0099ff 100%)"
              color="white"
              _hover={{ 
                bg: "linear-gradient(135deg, #0099ff 0%, #00bfff 100%)",
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0, 122, 204, 0.4)'
              }}
              size="lg"
              fontWeight="600"
              gap={2}
            >
              <Text fontSize="16px">👁️</Text>
              <Text>Show All Categories</Text>
            </Button>
          </Box>
        ) : (
          <VStack gap={8} align="stretch">
            {problemCategories
              .filter(category => visibleCategories.includes(category.id))
              .map((category, categoryIndex) => (
              <Box key={category.id}>
                {/* Category Header */}
                <Box
                  bg="#1a1a1a"
                  border="1px solid #333333"
                  borderRadius="8px"
                  p={6}
                  mb={4}
                >
                  <Flex align="center" gap={4} mb={2}>
                    <Text fontSize="24px">✅</Text>
                    <Text fontSize="xl" fontWeight="bold" color="#ffffff">
                      {problemCategories.findIndex(cat => cat.id === category.id) + 1}. {category.title}
                    </Text>
                    <Badge
                      bg={category.color}
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="600"
                    >
                      {category.count} Problems
                    </Badge>
                    
                    {/* Hide button for individual category */}
                    <Button
                      onClick={() => toggleCategory(category.id)}
                      size="sm"
                      variant="ghost"
                      color="#b3b3b3"
                      _hover={{ 
                        bg: '#ef4444', 
                        color: 'white',
                        transform: 'scale(1.05)'
                      }}
                      transition="all 0.2s ease"
                      ml="auto"
                    >
                      <Text fontSize="14px">🙈 Hide</Text>
                    </Button>
                  </Flex>
                </Box>

                {/* Problems Table */}
              <Box
                bg="#1a1a1a"
                border="1px solid #333333"
                borderRadius="8px"
                overflow="hidden"
              >
                <Box overflowX="auto">
                  <Box 
                    as="table" 
                    w="100%" 
                    className="problem-table"
                    style={{ borderCollapse: 'collapse' }}
                  >
                    <Box as="thead" bg="#2a2a2a">
                      <Box as="tr">
                        <Box 
                          as="th"
                          color="#ffffff" 
                          fontSize="md" 
                          fontWeight="600"
                          borderBottom="1px solid #333333"
                          py={4}
                          px={6}
                          w="100px"
                          textAlign="left"
                        >
                          S.No
                        </Box>
                        <Box 
                          as="th"
                          color="#ffffff" 
                          fontSize="md" 
                          fontWeight="600"
                          borderBottom="1px solid #333333"
                          py={4}
                          px={6}
                          textAlign="left"
                        >
                          Question
                        </Box>
                      </Box>
                    </Box>
                    <Box as="tbody">
                      {category.problems.map((problem, index) => (
                        <Box 
                          key={index} 
                          as="tr" 
                          _hover={{ bg: "#2a2a2a" }} 
                          transition="all 0.2s ease"
                          borderBottom="1px solid #333333"
                        >
                          <Box 
                            as="td"
                            py={4}
                            px={6}
                            color="#b3b3b3"
                            fontWeight="600"
                            verticalAlign="top"
                          >
                            {index + 1}
                          </Box>
                          <Box 
                            as="td"
                            py={4}
                            px={6}
                            color="#ffffff"
                            fontSize="md"
                            lineHeight="1.6"
                          >
                            {problem}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>

                {/* Divider between categories */}
                {categoryIndex < visibleCategories.length - 1 && (
                  <Box 
                    my={8} 
                    h="1px"
                    bg="#333333"
                    opacity={0.5}
                  />
                )}
              </Box>
            ))}
          </VStack>
        )}
      </Container>

      {/* Footer */}
      <Box
        bg="#1a1a1a"
        borderTop="1px solid #333333"
        py={8}
        px={8}
        mt={12}
      >
        <Container maxW="1400px">
          <VStack gap={4}>
            <Text fontSize="lg" color="#b3b3b3" textAlign="center">
              🎯 <Text as="span" fontWeight="600" color="#ffffff">
                Total: {totalProblems} Programming Problems
              </Text>
            </Text>
            <Text fontSize="sm" color="#666666" textAlign="center">
              Complete your Python programming journey with these carefully curated problems
            </Text>
            
            <Link href="/dashboard" passHref>
              <Button
                variant="ghost"
                color="#007acc"
                _hover={{ 
                  bg: '#1a1a1a',
                  color: '#0099ff'
                }}
                size="lg"
                fontWeight="600"
                display="flex"
                alignItems="center"
                gap={2}
              >
                <Text fontSize="16px">🏠</Text>
                <Text>Return to Question Bank</Text>
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
