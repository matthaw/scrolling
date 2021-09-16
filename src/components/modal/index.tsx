import React from 'react';
import {
  AspectRatio,
  Button,
  Box,
  Icon,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { IoArrowUpOutline, IoArrowDownOutline } from 'react-icons/io5';
import { useModal } from '../../hooks/useModal';

function ModalPost() {
  const { isOpen, onOpen, onClose } = useModal();

  function formateTitle(text: string) {
    return text.length >= 100 ? text.slice(0, 70) + ' ...' : text;
  }

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {formateTitle('I can’t express how much I like this lol')}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AspectRatio ratio={1}>
            <iframe
              src={
                'https://preview.redd.it/ki399ptydjn71.gif?width=640&format=mp4&s=6221c10d484dffbf933e8a5f45eaa2f5fc611bdb'
              }
              scrolling="no"
              width="80%"
              height="80%"
            />
          </AspectRatio>
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Box>
            <Text>
              Visit post{' '}
              <Link
                color={'orange.400'}
                href={`https://www.reddit.com/r/gaming/comments/poc2f5/i_cant_express_how_much_i_like_this_lol/`}
                target="_blank"
              >
                r/stalker
              </Link>
            </Text>
            <Box>
              <Box display="inline-flex" m="1">
                <Icon as={IoArrowUpOutline} h="5" w="5" color="orange.400" />
                <Text>325</Text>
                <Icon as={IoArrowDownOutline} h="5" w="5" color="red.400" />
              </Box>
            </Box>
          </Box>

          <Box>
            <Text>
              Posted by{' '}
              <Link
                color={'orange.400'}
                href={`https://www.reddit.com/user/Knowledgefirework/`}
                target="_blank"
              >
                u/Knowledgefirework
              </Link>
            </Text>

            <Button
              colorScheme="orange"
              color="orange.300"
              variant="link"
              transition="color 0.2s"
              _hover={{
                color: 'orange.400',
                underline: 'none',
              }}
              onClick={onClose}
              mr="50%"
            >
              Close
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export { ModalPost };
