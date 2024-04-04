import {useContext, createContext, useEffect, useState} from 'react';

type StreamProps = {
  children: React.ReactNode;
};

export const StreamContext = createContext(null);

export const StreamProvider = ({children}: StreamProps) => {
  return <StreamContext.Provider value={{}}>{children}</StreamContext.Provider>;
};
