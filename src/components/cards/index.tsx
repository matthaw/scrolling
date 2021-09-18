import { Grid, Flex } from '@chakra-ui/layout';
import React, { useEffect } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { usePosts } from '../../hooks/usePosts';
import { Posts, request } from '../../lib/reddit';
import Card from '../card';

function Cards() {
  const { filter, setFilter } = useFilter();
  const { posts, setPosts } = usePosts();

  useEffect(() => {
    async function requestPosts() {
      const posts = await request({ name: 'gifs' });
      setPosts(posts);
    }

    requestPosts();
  }, []);

  function renderPosts() {
    if (!posts) return;

    let last = Math.round(posts.length / 3);

    const fristListsPosts = posts.slice(0, last) as unknown as Posts[];
    const secondListsPosts = posts.slice(
      last,
      last + last
    ) as unknown as Posts[];
    const thirdListsPosts = posts.slice(
      last + last,
      last + last + last
    ) as unknown as Posts[];

    return (
      <>
        <Flex flexDirection="column">
          {fristListsPosts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </Flex>

        <Flex flexDirection="column">
          {secondListsPosts.map((post) => (
            <Card key={post.id} post={post as Posts} />
          ))}
        </Flex>

        <Flex flexDirection="column">
          {thirdListsPosts.map((post) => (
            <Card key={post.id} post={post as Posts} />
          ))}
        </Flex>
      </>
    );
  }

  return (
    <Grid
      gridTemplateColumns="repeat(3, 1fr)"
      overflowX="hidden"
      overflowY="hidden"
      mb="10%"
    >
      {renderPosts()}
    </Grid>
  );
}

export { Cards };
