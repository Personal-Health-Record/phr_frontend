import React, { createContext, useState, useContext } from "react";
import Toaster from "../../components/Toaster";

interface DisplayContextProps {
  showDiv: boolean;
  toggleDiv: (type: "success" | "error", message: string) => void;
}

const ToasterContext = createContext<DisplayContextProps | undefined>(
  undefined
);

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error("useToaster must be used within a ToasterProvider");
  }
  return context;
};

export const ToasterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showDiv, setShowDiv] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const toggleDiv = (type: "success" | "error", message: string) => {
    setToastType(type);
    setToastMessage(message);

    setShowDiv(true);

    setTimeout(() => {
      setShowDiv(false);
    }, 3000);
  };

  const contextValue = {
    showDiv,
    toggleDiv,
    type: toastType,
    message: toastMessage,
  };

  return (
    <ToasterContext.Provider value={contextValue}>
      {children}
      {showDiv && <Toaster type={toastType} text={toastMessage} />}
    </ToasterContext.Provider>
  );
};
