import { LessonInterface } from '@entities';
import { createContext, FC, PropsWithChildren, useMemo, useState } from 'react';
import { RouterItem } from '../types';

interface AppContextInterface {
  activeLesson: null | LessonInterface;
  currentRoute: null | RouterItem;
}

type AppContextType = {
  appContext: AppContextInterface;
  setAppContext: React.Dispatch<React.SetStateAction<AppContextInterface>>;
};

const initialState: { appContext: AppContextInterface } = {
  appContext: {
    activeLesson: null,
    currentRoute: null,
  },
};

const AppContext = createContext<AppContextType>({} as AppContextType);

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appContext, setAppContext] = useState<AppContextInterface>(
    initialState.appContext
  );

  const appValue = useMemo(
    () => ({ appContext, setAppContext }),
    [appContext, setAppContext]
  );

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
