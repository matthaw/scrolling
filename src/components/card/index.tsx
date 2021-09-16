import React, { useEffect, useRef } from 'react';
import {
  Flex,
  Box,
  Image,
  Skeleton,
  useColorModeValue,
  AspectRatio,
} from '@chakra-ui/react';
import { Posts } from '../../lib/reddit';
import { useModal } from '../../hooks/useModal';

interface PostsProps extends Partial<Posts> {}

function Card({ url, permalink, title, reddit, media }: PostsProps) {
  const { onOpen, setPost } = useModal();

  function renderMedia(url: string, type: string) {
    if (type === 'video') {
      return (
        <video autoPlay={true} loop={true} muted onClick={onOpen}>
          <source src={url} type="video/mp4"></source>
        </video>
      );
    }

    if (type === 'image') {
      return (
        <AspectRatio onClick={onOpen} height="100%" width="100%" ratio={1}>
          <Image src={url} scrolling="no" width="100%" height="100%" />
        </AspectRatio>
      );
    }
  }

  return (
    <Flex p={2} alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="2xl"
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
      >
        <Box width={media?.oembed?.width} height={media?.oembed?.height}>
          {url && media?.oembed?.type && renderMedia(url, media?.oembed?.type)}

          {!url && (
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

        {/* <Box p="6">
          {title && <Text fontWeight="bold">{formateTitle(title)}</Text>}
          {!title && <Skeleton width="80%" height="20px" />}

          <Flex
            mt="1"
            alignContent="center"
            display="inline-flex"
            width="200px"
          >
            <Text fontSize="sm">
              Visit post{' '}
              {reddit && (
                <Link
                  ml="1"
                  color={'orange.400'}
                  href={`https://www.reddit.com${permalink}`}
                  target={'_blank'}
                >
                  {reddit}
                </Link>
              )}
            </Text>
            {!reddit && <Skeleton ml="1" width="40%" height="18px" />}
          </Flex>
        </Box> */}
      </Box>
    </Flex>
  );
}

export { Card };
