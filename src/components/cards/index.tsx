import { Grid } from '@chakra-ui/layout';
import React, { ReactNode } from 'react';
import { useFilter } from '../../hooks/useFilter';
import { usePosts } from '../../hooks/usePosts';
import { Card } from '../card';

function Cards() {
  const { filter, setFilter } = useFilter();
  const { posts, setPosts } = usePosts();

  function renderPosts(): ReactNode {
    if (posts.length >= 1) {
      return posts.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          permalink={post.permalink}
          reddit={post.reddit}
          url={post.url}
        />
      ));
    }

    let card: ReactNode[] = [];

    for (let i = 0; i < 9; i++) {
      card.push(<Card key={i} />);
    }

    return card;
  }

  return (
    <Grid gridTemplateColumns="repeat(4, 1fr)" overflowX="hidden">
      {renderPosts()}
    </Grid>
  );
}

export { Cards };
