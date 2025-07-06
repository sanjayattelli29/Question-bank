import { Box, VStack, Text, Button, Container, Heading, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box bg="#0f0f0f" minH="100vh" color="white" position="relative" overflow="hidden">
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="radial-gradient(circle at 25% 25%, #007acc20 0%, transparent 50%), radial-gradient(circle at 75% 75%, #22c55e20 0%, transparent 50%)"
        pointerEvents="none"
      />
      
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        minH="100vh" 
        w="100%"
        position="relative" 
        zIndex={1}
      >
        <Container maxW="6xl" centerContent py={20}>
          <VStack gap={12} textAlign="center" w="100%" alignItems="center" justify="center">
            {/* Hero Section */}
            <VStack gap={6} alignItems="center" w="100%" mt={16}>
              <Box mb={4} w="100%" display="flex" justifyContent="center">
                <Text 
                  fontSize="6xl" 
                  fontWeight="900" 
                  bgGradient="linear-gradient(135deg, #007acc, #22c55e)"
                  bgClip="text"
                  lineHeight="1.1"
                  textAlign="center"
                >
                  📚 Question Bank
                </Text>
              </Box>
              <Box w="100%" display="flex" justifyContent="center">
                <Heading 
                  size="lg" 
                  color="#b3b3b3" 
                  maxW="800px" 
                  fontWeight="400"
                  lineHeight="1.6"
                  fontSize="xl"
                  textAlign="center"
                >
                  Interactive Python programming practice with syntax-highlighted code blocks, 
                  toggleable answers, and progress tracking.
                </Heading>
              </Box>
            </VStack>

            {/* CTA Buttons */}
            <Box w="100%" display="flex" justifyContent="center" mt={8}>
              <HStack gap={4}>
                <Link href="/dashboard">
                  <Button
                    bg="linear-gradient(135deg, #007acc, #0099ff)"
                    color="white"
                    size="lg"
                    px={12}
                    py={8}
                    fontSize="lg"
                    fontWeight="600"
                    borderRadius="12px"
                    _hover={{ 
                      transform: "translateY(-3px)", 
                      boxShadow: "0 20px 40px rgba(0, 122, 204, 0.3)",
                      bg: "linear-gradient(135deg, #0099ff, #007acc)"
                    }}
                    transition="all 0.3s ease"
                    height="60px"
                  >
                    Start Practicing →
                  </Button>
                </Link>
                
                <Button
                  bg="transparent"
                  color="#ffffff"
                  border="2px solid #333333"
                  size="lg"
                  px={12}
                  py={8}
                  fontSize="lg"
                  fontWeight="600"
                  borderRadius="12px"
                  _hover={{ 
                    borderColor: "#007acc",
                    color: "#007acc",
                    transform: "translateY(-3px)"
                  }}
                  transition="all 0.3s ease"
                  height="60px"
                >
                  View Demo
                </Button>
              </HStack>
            </Box>

            {/* Feature Cards */}
            <Box mt={16} mb={12} w="100%" display="flex" flexDirection="column" alignItems="center">
              <Text fontSize="xl" color="#ffffff" mb={8} fontWeight="600" textAlign="center">
                Why Choose Question Bank?
              </Text>
              <Box w="100%" display="flex" justifyContent="center">
                <Flex 
                  wrap="wrap" 
                  justify="center" 
                  gap={6} 
                  maxW="1200px"
                >
              {[
                {
                  emoji: "🐍",
                  title: "Syntax Highlighting",
                  description: "Beautiful Python code with professional syntax highlighting"
                },
                {
                  emoji: "✅",
                  title: "Progress Tracking",
                  description: "Track your completion status and monitor your learning journey"
                },
                {
                  emoji: "👁️",
                  title: "Toggleable Outputs",
                  description: "Reveal expected outputs when you need hints or verification"
                },
                {
                  emoji: "⚙️",
                  title: "Admin Panel",
                  description: "Easy-to-use interface for adding and managing questions"
                },
                {
                  emoji: "📚",
                  title: "Clean Interface",
                  description: "Distraction-free dark theme optimized for coding practice"
                },
                {
                  emoji: "⚡",
                  title: "Fast & Responsive",
                  description: "Built with modern web technologies for optimal performance"
                }
              ].map((feature, index) => (
                <Box
                  key={index}
                  bg="#1a1a1a"
                  border="1px solid #333333"
                  borderRadius="12px"
                  p={6}
                  maxW="350px"
                  w="full"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-8px)",
                    borderColor: "#007acc",
                    boxShadow: "0 20px 40px rgba(0, 122, 204, 0.1)"
                  }}
                  cursor="pointer"
                >
                  <VStack gap={4} textAlign="center">
                    <Box
                      bg="#007acc"
                      color="white"
                      p={3}
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="2xl">
                        {feature.emoji}
                      </Text>
                    </Box>
                    <Text fontSize="lg" fontWeight="600" color="#ffffff">
                      {feature.title}
                    </Text>
                    <Text fontSize="sm" color="#b3b3b3" lineHeight="1.6">
                      {feature.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
                </Flex>
              </Box>
            </Box>

            {/* Additional CTA Section */}
            <VStack gap={6} mt={16} alignItems="center" w="100%">
              <Text fontSize="2xl" fontWeight="700" color="#ffffff" textAlign="center">
                Ready to Start Coding?
              </Text>
              <Text fontSize="lg" color="#b3b3b3" maxW="600px" textAlign="center">
                Join thousands of developers improving their Python skills with our interactive question bank.
              </Text>
            </VStack>

            {/* Footer */}
            <Box mt={20} pt={8} borderTop="1px solid #333333" w="100%" textAlign="center">
              <Text fontSize="sm" color="#666666">
                Built with ❤️ using Next.js, MongoDB Atlas, and Chakra UI
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
