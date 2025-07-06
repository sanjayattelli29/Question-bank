'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { QuestionProvider } from '@/context/QuestionContext';

const system = createSystem(defaultConfig);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <QuestionProvider>
        {children}
      </QuestionProvider>
    </ChakraProvider>
  );
}
