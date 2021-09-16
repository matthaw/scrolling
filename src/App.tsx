import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@chakra-ui/theme';
import { useDisclosure } from '@chakra-ui/hooks';

import { Navbar } from './components/navbar';
import { SidebarContext } from './hooks/useSidebar';
import { Sidebar } from './components/drawer';
import { Cards } from './components/cards';
import { FilterContext, Filter } from './hooks/useFilter';
import { PostsContext } from './hooks/usePosts';
import { Posts, request } from './lib/reddit';
import { FavoriteContext } from './hooks/useFavorite';

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState<Filter>({} as Filter);

  const [posts, setPosts] = useState<Posts[]>([]);
  const [favorites, setFavorite] = useState<Array<string>>([]);

  useEffect(() => {
    async function fetch() {
      try {
        const posts = await request({ name: 'gifs' });
        setPosts(posts);
      } catch (err) {
        console.error(err);
      }
    }

    fetch();

    const load = localStorage.getItem('@scroller/favorites')?.split(',');

    if (!load) {
      setFavorite(['gifs']);
    } else {
      setFavorite(load);
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <SidebarContext.Provider value={{ isOpen, onOpen, onClose }}>
        <FilterContext.Provider value={{ filter, setFilter }}>
          <Navbar />
          <FavoriteContext.Provider value={{ favorites, setFavorite }}>
            <Sidebar />
            <PostsContext.Provider value={{ posts, setPosts }}>
              <Cards />
            </PostsContext.Provider>
          </FavoriteContext.Provider>
        </FilterContext.Provider>
      </SidebarContext.Provider>
    </ChakraProvider>
  );
};
