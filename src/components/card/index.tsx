import React from 'react';
import { Flex, Box, Skeleton, useColorModeValue } from '@chakra-ui/react';

import Media from '../media/index';
import { Posts } from '../../lib/reddit';
import { useModal } from '../../hooks/useModal';

interface CardProps {
  post: Posts;
}

function Card({ post }: CardProps) {
  const { onOpen, setPost } = useModal();

  return (
    <Flex p={2} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        transition="margin 0.8s ease, width 0.8s, transform 0.8s ease"
        _hover={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 5,
          marginTop: 5,
          transform: 'scale(1.1)',
          _after: {},
        }}
        onClick={() => {
          setPost(post);
        }}
      >
        <Box width={400}>
          {post.url &&
            Media({
              post,
              muted: true,
              autoPlay: true,
              onOpen,
              controls: false,
              loop: true,
            })}

          {!post.url && (
            <Skeleton
              height="100%"
              width="100%"
              startColor="pink.500"
              endColor="orange.500"
              transition="width 0.6s ease"
              _hover={{
                width: '125%',
              }}
            />
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default Card;
