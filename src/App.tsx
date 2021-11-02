import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/themes';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
};
