// context/DrawerContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from "react";

type DrawerContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

type DrawerProviderProps = {
  children: ReactNode;
};

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <DrawerContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};
