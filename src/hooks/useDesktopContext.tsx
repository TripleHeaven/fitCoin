import { useWindowWidth } from "@react-hook/window-size";
import { createContext, useContext, useEffect, useState } from "react";

export const DesktopProviderContext = createContext<{ isDesktop: boolean }>({
  isDesktop: false,
});

interface DesktopProviderProps {
  children?: React.ReactNode;
}

export const DesktopProvider: React.FC<DesktopProviderProps> = ({
  children,
}) => {
  const width = useWindowWidth();
  const [isDesktop, setDesktop] = useState(width >= 700);

  useEffect(() => {
    const isDesk = width >= 650;
    setDesktop(isDesk);
  }, [width]);

  return (
    <DesktopProviderContext.Provider value={{ isDesktop }}>
      {children}
    </DesktopProviderContext.Provider>
  );
};

export const useDesktopProvider = () => {
  const context = useContext(DesktopProviderContext);

  if (context === undefined) {
    throw new Error("provide context");
  }

  return context;
};
