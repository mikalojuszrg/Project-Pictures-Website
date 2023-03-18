import { PropsWithChildren, createContext } from "react";

import { Photo } from "../types/image";
import { useAddLocalStorage } from "../hooks/localStorage";

const FavouriteContext = createContext<{
  favouritePhotos: Photo[];
  addFavouritePhoto: (photo: Photo) => void;
}>({
  favouritePhotos: [],
  addFavouritePhoto: () => {},
});

const FavouriteProvider = ({ children }: PropsWithChildren) => {
  const [favouritePhotos, setFavouritePhotos] = useAddLocalStorage<Photo[]>(
    "favouritePhotos",
    []
  );

  const addFavouritePhoto = (photo: Photo) => {
    setFavouritePhotos((prevPhotos) => [...prevPhotos, photo]);
  };

  return (
    <FavouriteContext.Provider value={{ favouritePhotos, addFavouritePhoto }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteContext, FavouriteProvider };
