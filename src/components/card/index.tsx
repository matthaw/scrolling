import {
  Flex,
  Box,
  Image,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

interface CardProps {
  id: string;
  url: string;
  permalink: string;
  title: string;
}

function formateTitle(text: string) {
  return text.length >= 100 ? text.slice(0, 70) + ' ...' : text;
}

function Card({ id, url, permalink, title }: CardProps) {
  return (
    <Flex
      p={2}
      w="full"
      alignItems="center"
      justifyContent="center"
      transition="padding 0.6s ease"
      _hover={{
        p: -5,
        _after: {
          p: -5,
          transition: 'padding 0.6s ease-out',
        },
      }}
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image src={url} roundedTop="lg" />

        <Box p="6">
          <Text fontWeight="bold">
            {formateTitle(
              'Took a month, but finished my newest 3D Gon / Killua / Hisoka (Hunter X Hunter) Artwosdsdfdsfsdsdfsdfsdfsdfsdfdsfsdfsdfsdfsdfsdfsdfdssdfsdfsdfsdfrk!'
            )}
          </Text>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Text fontSize="sm">
              Visit post{' '}
              <Link
                color={'orange.400'}
                href={`https://www.reddit.com${permalink}`}
                target={'_blank'}
              >
                r/stalker
              </Link>
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export { Card };
