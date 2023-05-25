import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

//context type
type AppContextProviderProp = {
  children: React.ReactNode;
};
//All states types
type AppStatesTypes = {
  isLoading: boolean;
  modalOpen: boolean;
  closeSidePanel: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCloseSidePanel: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedUser: string | undefined;
  errors: string;
  setErrors: React.Dispatch<React.SetStateAction<string>>;
  wrapperElement: HTMLDivElement | HTMLElement | null | undefined;
  setWrapperElement: React.Dispatch<
    React.SetStateAction<HTMLDivElement | HTMLElement | null | undefined>
  >;
};
//create context
const AppContext = createContext({} as AppStatesTypes);

const AppContextProvider = ({ children }: AppContextProviderProp) => {
  //declare states here
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const [closeSidePanel, setCloseSidePanel] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string | undefined>("");
  const [wrapperElement, setWrapperElement] = useState<
    HTMLElement | HTMLDivElement | null | undefined
  >();

  useEffect(() => {}, []);

  //returning values/states/properties
  return (
    <AppContext.Provider
      value={{
        modalOpen, setModalOpen,
        wrapperElement,
        setWrapperElement,
        closeSidePanel,
        setCloseSidePanel,
        isLoading,
        setIsLoading,
        selectedUser,
        setSelectedUser,
        errors,
        setErrors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
