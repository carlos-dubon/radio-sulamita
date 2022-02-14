import { SectionRefs } from "@lib/templates";
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ScrollToFn = (section: SectionRefs) => void;

interface ScrollToContext {
  scrollTo: ScrollToFn | null;
  setScrollTo: Dispatch<SetStateAction<ScrollToFn | null>>;
}

const ScrollToContext = createContext<ScrollToContext | null>(null);

const useScrollTo = () => {
  return useContext(ScrollToContext);
};

const ScrollToProvider: FC = ({ children }) => {
  const [scrollTo, setScrollTo] = useState<ScrollToFn | null>(null);

  return (
    <ScrollToContext.Provider value={{ scrollTo, setScrollTo }}>
      {children}
    </ScrollToContext.Provider>
  );
};

export { ScrollToProvider, useScrollTo };
