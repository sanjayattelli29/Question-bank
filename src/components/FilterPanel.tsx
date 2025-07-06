'use client';

import {
  Box,
  Text,
  Button,
  Flex,
  Input,
} from '@chakra-ui/react';

export type FilterType = 'all' | 'starred' | 'completed' | 'not-completed' | 'last-added' | 'first-added';

interface FilterPanelProps {
  activeFilter: FilterType;
  onFilterChangeAction: (filter: FilterType) => void;
  isOpen: boolean;
  onToggleAction: () => void;
  searchQuery: string;
  onSearchAction: (query: string) => void;
  counts: {
    all: number;
    starred: number;
    completed: number;
    notCompleted: number;
  };
}

export default function FilterPanel({ activeFilter, onFilterChangeAction, isOpen, onToggleAction, searchQuery, onSearchAction, counts }: FilterPanelProps) {
  const filters = [
    { key: 'all' as FilterType, label: 'All Questions', count: counts.all, icon: '📚' },
    { key: 'starred' as FilterType, label: 'Starred', count: counts.starred, icon: '⭐' },
    { key: 'completed' as FilterType, label: 'Completed', count: counts.completed, icon: '✅' },
    { key: 'not-completed' as FilterType, label: 'Not Completed', count: counts.notCompleted, icon: '⏳' },
  ];

  const sortFilters = [
    { key: 'last-added' as FilterType, label: 'Recently Added', icon: '🕐' },
    { key: 'first-added' as FilterType, label: 'Oldest First', icon: '📅' },
  ];

  return (
    <Box
      position="relative"
      bg="gray.800"
      borderLeft={isOpen ? "1px solid" : "none"}
      borderColor="gray.700"
      w={isOpen ? "320px" : "60px"}
      h="full"
      className="filter-transition custom-scrollbar"
      overflowY="auto"
      boxShadow={isOpen ? "lg" : "none"}
    >
      {/* Toggle Button */}
      <Box
        position="absolute"
        top={4}
        left={isOpen ? 4 : 2}
        zIndex={10}
      >
        <Button
          size="sm"
          variant="ghost"
          color="blue.400"
          _hover={{ bg: 'gray.700', color: 'blue.300' }}
          onClick={onToggleAction}
          w={isOpen ? "auto" : "44px"}
          h="44px"
          justifyContent="center"
        >
          <Flex align="center" gap={2}>
            <Text fontSize="lg" color="blue.400">{isOpen ? '◀' : '▶'}</Text>
            {isOpen && <Text fontSize="sm" color="blue.400">Filters</Text>}
          </Flex>
        </Button>
      </Box>

      {/* Filter Content */}
      {isOpen && (
        <Box pt="70px" px={6} pb={6}>
          <Flex direction="column" gap={4}>
            {/* Search Input */}
            <Box>
              <Text fontSize="sm" fontWeight="semibold" color="green.400" mb={2}>
                🔍 Search Questions
              </Text>
              <Flex gap={2}>
                <Input
                  placeholder="Search by title or keywords..."
                  value={searchQuery}
                  onChange={(e) => onSearchAction(e.target.value)}
                  bg="gray.700"
                  border="1px solid"
                  borderColor="gray.600"
                  color="white"
                  _placeholder={{ color: 'gray.400' }}
                  _focus={{
                    borderColor: 'green.400',
                    boxShadow: '0 0 0 1px rgba(72, 187, 120, 0.3)'
                  }}
                  size="sm"
                  flex={1}
                />
                {searchQuery && (
                  <Button
                    size="sm"
                    variant="ghost"
                    color="gray.400"
                    _hover={{ color: 'white', bg: 'gray.600' }}
                    onClick={() => onSearchAction('')}
                    px={2}
                  >
                    ✕
                  </Button>
                )}
              </Flex>
            </Box>

            <Text fontSize="lg" fontWeight="bold" color="blue.400">
              📋 Filters
            </Text>
            
            <Flex direction="column" gap={2}>
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? 'solid' : 'ghost'}
                  colorScheme={activeFilter === filter.key ? 'blue' : 'gray'}
                  justifyContent="space-between"
                  onClick={() => onFilterChangeAction(filter.key)}
                  size="sm"
                  w="full"
                  h="40px"
                  color={activeFilter === filter.key ? 'white' : 'white'}
                  _hover={{
                    bg: activeFilter === filter.key ? 'blue.600' : 'gray.700',
                    color: 'white'
                  }}
                >
                  <Flex align="center" gap={2} flex={1}>
                    <Text fontSize="md">{filter.icon}</Text>
                    <Text 
                      flex={1} 
                      textAlign="left" 
                      fontSize="sm"
                      color={activeFilter === filter.key ? 'white' : 'white'}
                    >
                      {filter.label}
                    </Text>
                  </Flex>
                  <Text
                    fontSize="xs"
                    color={activeFilter === filter.key ? 'white' : 'white'}
                    bg={activeFilter === filter.key ? 'whiteAlpha.200' : 'gray.700'}
                    px={2}
                    py={1}
                    borderRadius="md"
                    minW="24px"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {filter.count}
                  </Text>
                </Button>
              ))}
            </Flex>

            <Box h="1px" bg="gray.700" my={2} />

            <Text fontSize="md" fontWeight="semibold" color="purple.400">
              🔄 Sort By
            </Text>
            
            <Flex direction="column" gap={2}>
              {sortFilters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? 'solid' : 'ghost'}
                  colorScheme={activeFilter === filter.key ? 'purple' : 'gray'}
                  justifyContent="flex-start"
                  onClick={() => onFilterChangeAction(filter.key)}
                  size="sm"
                  w="full"
                  h="40px"
                  color={activeFilter === filter.key ? 'white' : 'white'}
                  _hover={{
                    bg: activeFilter === filter.key ? 'purple.600' : 'gray.700',
                    color: 'white'
                  }}
                >
                  <Flex align="center" gap={2}>
                    <Text fontSize="md">{filter.icon}</Text>
                    <Text 
                      fontSize="sm"
                      color={activeFilter === filter.key ? 'white' : 'white'}
                    >
                      {filter.label}
                    </Text>
                  </Flex>
                </Button>
              ))}
            </Flex>
          </Flex>
        </Box>
      )}

      {/* Collapsed State Indicators */}
      {!isOpen && (
        <Box pt="70px" px={2}>
          <Flex direction="column" gap={3} align="center">
            <Box
              w="8"
              h="8"
              bg={activeFilter === 'starred' ? 'yellow.500' : 'gray.600'}
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="lg"
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{ 
                bg: 'yellow.400',
                transform: 'scale(1.1)',
                boxShadow: '0 2px 8px rgba(251, 191, 36, 0.3)'
              }}
              onClick={() => onFilterChangeAction('starred')}
              title="Starred Questions"
            >
              ⭐
            </Box>
            <Box
              w="8"
              h="8"
              bg={activeFilter === 'completed' ? 'green.500' : 'gray.600'}
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="lg"
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{ 
                bg: 'green.400',
                transform: 'scale(1.1)',
                boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)'
              }}
              onClick={() => onFilterChangeAction('completed')}
              title="Completed Questions"
            >
              ✅
            </Box>
            <Box
              w="8"
              h="8"
              bg={activeFilter === 'not-completed' ? 'orange.500' : 'gray.600'}
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="lg"
              cursor="pointer"
              transition="all 0.2s ease"
              _hover={{ 
                bg: 'orange.400',
                transform: 'scale(1.1)',
                boxShadow: '0 2px 8px rgba(251, 146, 60, 0.3)'
              }}
              onClick={() => onFilterChangeAction('not-completed')}
              title="Not Completed Questions"
            >
              ⏳
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
