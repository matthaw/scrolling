import { createContext, useContext } from 'react';
import { Posts } from '../lib/reddit';

interface ModalProps {
  post: Posts;
  setPost: (post: Posts) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalContext = createContext<ModalProps>({
  post: {} as Posts,
  setPost: (post: Posts) => {},
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const useModal = () => useContext(ModalContext);
