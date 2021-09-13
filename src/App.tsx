import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/theme';
import { useDisclosure } from '@chakra-ui/hooks';

import { Navbar } from './components/navbar';
import { SidebarContext } from './hooks/useSidebar';
import { Sidebar } from './components/drawer';
import { Cards } from './components/cards';
import { useFilter, FilterContext } from './hooks/useFilter';

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { filter, setFilter } = useFilter();

  return (
    <ChakraProvider theme={theme}>
      <SidebarContext.Provider value={{ isOpen, onOpen, onClose }}>
        <FilterContext.Provider value={{ filter, setFilter }}>
          <Navbar />
          <Sidebar />
          <Cards />
        </FilterContext.Provider>
      </SidebarContext.Provider>
    </ChakraProvider>
  );
};
