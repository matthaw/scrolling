import React from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  Link,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Posts } from '../../lib/reddit';

function formateTitle(text: string) {
  return text.length >= 100 ? text.slice(0, 70) + ' ...' : text;
}

interface PostsProps extends Partial<Posts> {}

function Card({ url, permalink, title, reddit, media }: PostsProps) {
  function renderMedia(url: string, type: string) {
    if (type == 'video') {
      return (
        <iframe src={url} scrolling="no" width="100%" height="100%"></iframe>
      );
    }

    if (type == 'image') {
      return (
        <Image
          src={url}
          roundedTop="lg"
          scrolling="no"
          width="100%"
          height="100%"
        />
      );
    }
  }

  return (
    <Flex p={2} w="full" alignItems="center" justifyContent="center">
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
      >
        <Box width={300} height={400}>
          {url && renderMedia(url, media?.oembed?.type as string)}

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

        <Box p="6">
          {title && <Text fontWeight="bold">{formateTitle(title)}</Text>}
          {!title && <Skeleton width="80%" height="20px" />}

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Text fontSize="sm" display="inline-flex" width="130px">
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
              {!reddit && <Skeleton ml="1" width="50%" height="18px" />}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export { Card };
