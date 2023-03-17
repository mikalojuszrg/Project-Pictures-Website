import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
} from "react";

import { useLocalStorage } from "../hooks/localStorage";

const FavouriteContext = createContext<{
  isFavourite: boolean;
  setIsFavourite: Dispatch<SetStateAction<boolean>>;
}>({
  isFavourite: false,
  setIsFavourite: () => {},
});

const FavouriteProvider = ({ children }: PropsWithChildren) => {
  const [isFavourite, setIsFavourite] = useLocalStorage<boolean>(
    "isFavorite",
    false
  );

  return (
    <FavouriteContext.Provider value={{ isFavourite, setIsFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteContext, FavouriteProvider };
