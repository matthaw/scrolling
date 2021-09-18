import React, { memo, useRef } from 'react';
import {
  Button,
  Box,
  Icon,
  Link,
  Flex,
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
import Media from '../media';
import { useModal } from '../../hooks/useModal';

function ModalPost() {
  const { isOpen, onOpen, onClose } = useModal();
  const { post } = useModal();

  function formateTitle(text: string) {
    return text.length >= 100 ? text.slice(0, 70) + ' ...' : text;
  }

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInRight"
      size="md"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{formateTitle(post.title)}</ModalHeader>
        <ModalCloseButton />
        <Box width="100%" height="10%">
          {post.url &&
            Media({
              post,
              onOpen,
              muted: true,
              autoPlay: true,
              controls: true,
              loop: true,
            })}
        </Box>
        <ModalFooter justifyContent="space-between">
          <Box>
            <Text>
              Visit post{' '}
              <Link
                color={'orange.400'}
                href={`https://www.reddit.com${post.permalink}`}
                target="_blank"
              >
                {post.subreddit_name_prefixed}
              </Link>
            </Text>
            <Box>
              <Box display="inline-flex" m="1">
                <Icon as={IoArrowUpOutline} h="5" w="5" color="orange.400" />
                <Text>{post.ups - post.downs}</Text>
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
                u/{post.author}
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

export default memo(ModalPost);
