import React from "react";
import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { Icon } from "@chakra-ui/icons";
import { InputGroup, Input, InputLeftAddon } from "@chakra-ui/input";
import { Box, HStack, VStack, Stack, Text } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { FcReddit } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";

import { useSidebar } from "../../hooks/useSidebar";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useSidebar();

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
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
                  />
                </InputGroup>
              </Box>

              <Stack direction="row" justifyContent={"space-between"}>
                <Text fontSize="sm">r/stalker</Text>
                <Icon
                  as={AiFillStar}
                  w={5}
                  h={5}
                  cursor={"pointer"}
                  _hover={{ transition: "color 0.4s", color: "yellow.300" }}
                />
              </Stack>

              <Stack>
                <Text fontSize="lg">Favorite</Text>

                <Stack direction="row" justifyContent={"space-between"}>
                  <Text fontSize="sm">r/stalker</Text>
                  <Icon
                    as={AiFillStar}
                    w={5}
                    h={5}
                    color={"yellow.300"}
                    cursor={"pointer"}
                    _hover={{ transition: "color 0.4s", color: "Black" }}
                  />
                </Stack>

                <Stack direction="row" justifyContent={"space-between"}>
                  <Text fontSize="sm">r/Brasil</Text>
                  <Icon
                    as={AiFillStar}
                    w={5}
                    h={5}
                    color={"yellow.300"}
                    cursor={"pointer"}
                    _hover={{ transition: "color 0.4s", color: "Black" }}
                  />
                </Stack>

                <Stack direction="row" justifyContent={"space-between"}>
                  <Text fontSize="sm">r/linux</Text>
                  <Icon
                    as={AiFillStar}
                    w={5}
                    h={5}
                    color={"yellow.300"}
                    cursor={"pointer"}
                    _hover={{ transition: "color 0.4s", color: "Black" }}
                  />
                </Stack>
              </Stack>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              bg={"orange.400"}
              color={"white"}
              _hover={{ bg: "orange.500" }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { Sidebar };
