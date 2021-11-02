import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import { FilterContext, Filter } from '../../hooks/useFilter';
import { Posts, request } from '../../lib/reddit';
import { Navbar } from '../../components/navbar';
import { SidebarContext } from '../../hooks/useSidebar';
import Sidebar from '../../components/drawer';
import { Cards } from '../../components/cards';
import { FavoriteContext } from '../../hooks/useFavorite';
import { ModalContext } from '../..//hooks/useModal';
import ModalPost from '../../components/modal';
import { PostsContext } from '../../hooks/usePosts';

function Home() {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const [filter, setFilter] = useState<Filter>({} as Filter);
  const [posts, setPosts] = useState<Posts[]>([]);

  const [post, setPost] = useState<Posts>({} as Posts);
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
    <FilterContext.Provider value={{ filter, setFilter }}>
      <FavoriteContext.Provider value={{ favorites, setFavorite }}>
        <SidebarContext.Provider>
          <Navbar />
        </SidebarContext.Provider>

        <PostsContext.Provider value={{ posts, setPosts }}>
          <ModalContext.Provider
            value={{
              isOpen: isOpenModal,
              onOpen: onOpenModal,
              onClose: onCloseModal,
              post,
              setPost,
            }}
          >
            {posts.length >= 1 && <Cards />}
            {post.id && <ModalPost />}
          </ModalContext.Provider>
        </PostsContext.Provider>
      </FavoriteContext.Provider>
    </FilterContext.Provider>
  );
}

export { Home };
