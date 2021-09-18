import React, { memo, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/icons';
import { InputGroup, Input, InputLeftAddon } from '@chakra-ui/input';
import { Box, Stack, Text } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { FcReddit } from 'react-icons/fc';
import { AiFillStar } from 'react-icons/ai';

import { useSidebar } from '../../hooks/useSidebar';
import { useFavorite } from '../../hooks/useFavorite';
import { exists } from '../../lib/reddit';

function Sidebar() {
  const { isOpen, onOpen, onClose } = useSidebar();
  const { favorites, setFavorite } = useFavorite();
  const [subReddit, setSubReddit] = useState('');
  const [subRedditErro, setSubRedditErro] = useState<boolean>();

  useEffect(() => {
    setSubRedditErro(false);

    const delayDebounceFn = setTimeout(async () => {
      if (subReddit.length <= 3) {
        setSubRedditErro(true);
        return;
      }

      console.log('Request');

      // try {
      //   // const exist = await exists(subReddit);
      //   if (exist) {
      //     setSubRedditErro(false);
      //   } else {
      //     setSubRedditErro(true);
      //   }
      // } catch (err) {
      //   setSubRedditErro(true);
      //   console.log(err);
      // }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [subReddit]);

  function remove(favorite: string) {
    setFavorite(favorites.filter((_, i) => i !== favorites.indexOf(favorite)));

    localStorage.removeItem('@scroller/favorites');
    localStorage.setItem(
      '@scroller/favorites',
      favorites.filter((_, i) => i !== favorites.indexOf(favorite)).join(',')
    );
  }

  function append(favorite: string) {
    setFavorite([...favorites, favorite]);

    localStorage.removeItem('@scroller/favorites');
    localStorage.setItem(
      '@scroller/favorites',
      [...favorites, favorite].join(',')
    );
  }

  function focusBorderColor() {
    return subRedditErro ? 'red.400' : 'green.400';
  }

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.50">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Search Reddit or User
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <InputGroup>
                  <InputLeftAddon>
                    <Icon as={FcReddit} w={10} h={10} />
                  </InputLeftAddon>
                  <Input
                    type="text"
                    id="reddit"
                    placeholder="Please enter reddit or user"
                    focusBorderColor={focusBorderColor()}
                    onKeyUp={(event) => {
                      const target = event.target as HTMLInputElement;
                      setSubReddit(target.value);
                    }}
                  />
                </InputGroup>
                {subRedditErro && (
                  <Text
                    color="red.400"
                    fontWeight="bold"
                    fontSize="x-small"
                    mt="1%"
                    ml="40%"
                  >
                    Reddit or User not found
                  </Text>
                )}
              </Box>

              {subReddit && !subRedditErro && (
                <Stack direction="row" justifyContent={'space-between'}>
                  <Text fontSize="sm">{subReddit}</Text>
                  <Icon
                    as={AiFillStar}
                    w={5}
                    h={5}
                    cursor={'pointer'}
                    _hover={{ transition: 'color 0.4s', color: 'yellow.300' }}
                    onClick={() => {
                      append(subReddit);
                    }}
                  />
                </Stack>
              )}

              <Stack>
                <Text fontSize="lg">Favorite</Text>
                {favorites &&
                  favorites.map((favorite) => (
                    <Stack
                      direction="row"
                      justifyContent={'space-between'}
                      key={favorite}
                    >
                      <Text fontSize="sm">r/{favorite}</Text>
                      <Icon
                        as={AiFillStar}
                        w={5}
                        h={5}
                        onClick={() => {
                          remove(favorite);
                        }}
                        color={'yellow.300'}
                        cursor={'pointer'}
                        _hover={{ transition: 'color 0.4s', color: 'Black' }}
                      />
                    </Stack>
                  ))}
              </Stack>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              bg={'orange.400'}
              color={'white'}
              _hover={{ bg: 'orange.500' }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default memo(Sidebar);
