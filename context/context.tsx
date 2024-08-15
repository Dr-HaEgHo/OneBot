"use client";

import { button, courseData, ImageData } from "@/types";
import React, {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
  useReducer,
  useEffect,
} from "react";

// type DataType = {
//     isActive: boolean
// }

interface ContextProps {
  isActive: number;
  setIsActive: Dispatch<SetStateAction<number>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  mainSidebarOpen: boolean;
  setMainSidebarOpen: Dispatch<SetStateAction<boolean>>;
  currentCourse: courseData | null;
  setCurrentCourse: Dispatch<SetStateAction<courseData | null>>;
  nowPlaying: string | null;
  setNowPlaying: Dispatch<SetStateAction<string | null>>;
  picture: string | null;
  setPicture: Dispatch<SetStateAction<string | null>>;
  openChatNav: boolean;
  setOpenChatNav: Dispatch<SetStateAction<boolean>>;
  data: ImageData | null;
  setData: Dispatch<SetStateAction<ImageData | null>>;
  button: button | null;
  setButton: Dispatch<SetStateAction<button | null>>
}

// const initialState = {
//     todos: [],
// };

export const GlobalContext = createContext<ContextProps>({
  isActive: 0,
  setIsActive: (): number => 0,
  isSidebarOpen: true,
  setIsSidebarOpen: (): boolean => false,
  mainSidebarOpen: false,
  setMainSidebarOpen: (): boolean => false,
  currentCourse: null,
  setCurrentCourse: (): courseData | null => null,
  nowPlaying: null,
  setNowPlaying: (): courseData | null => null,
  picture: null,
  setPicture: (): string | null => null,
  openChatNav: false,
  setOpenChatNav: (): boolean => false,
  data: null,
  setData: (): ImageData | null => null,
  button: null,
  setButton : () :button | null => null
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isActive, setIsActive] = useState<number>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentCourse, setCurrentCourse] = useState<courseData | null>(null);
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);
  const [picture, setPicture] = useState<string | null>(null);
  const [mainSidebarOpen, setMainSidebarOpen] = useState<boolean>(false);
  const [openChatNav, setOpenChatNav] = useState<boolean>(true);
  const [data, setData] = useState<ImageData | null>(null);
  const [button, setButton ] = useState<button | null>(null)

  return (
    <GlobalContext.Provider
      value={{
        isActive,
        setIsActive,
        isSidebarOpen,
        setIsSidebarOpen,
        currentCourse,
        setCurrentCourse,
        nowPlaying,
        setNowPlaying,
        picture,
        setPicture,
        mainSidebarOpen,
        setMainSidebarOpen,
        openChatNav,
        setOpenChatNav,
        data, 
        setData,
        button,
        setButton
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// export const useGlobalContext = useContext(GlobalContext);
