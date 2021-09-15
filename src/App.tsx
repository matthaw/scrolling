import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/theme';
import { useDisclosure } from '@chakra-ui/hooks';

import { Navbar } from './components/navbar';
import { SidebarContext } from './hooks/useSidebar';
import { Sidebar } from './components/drawer';
import { Cards } from './components/cards';
import { useFilter, FilterContext } from './hooks/useFilter';
import { PostsContext } from './hooks/usePosts';
import { Posts, request } from './lib/reddit';

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { filter, setFilter } = useFilter();
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    async function fetch() {
      try {
        const posts = await request({ name: 'gifs', filter });
        setPosts(posts);
        console.log(posts);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <SidebarContext.Provider value={{ isOpen, onOpen, onClose }}>
        <FilterContext.Provider value={{ filter, setFilter }}>
          <Navbar />
          <Sidebar />
          <PostsContext.Provider value={{ posts, setPosts }}>
            <Cards />
          </PostsContext.Provider>
        </FilterContext.Provider>
      </SidebarContext.Provider>
    </ChakraProvider>
  );
};
