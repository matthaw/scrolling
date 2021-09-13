import React, { createContext, useContext } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const SidebarContext = createContext<SidebarProps>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export const useSidebar = () => useContext(SidebarContext);
