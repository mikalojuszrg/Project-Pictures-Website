import { PropsWithChildren, createContext } from "react";

import { Photo } from "../types/photo";
import { useLocalStorage } from "../hooks/localStorage";

type FavouriteContextType = {
  favouritePhotos: Photo[];
  addFavouritePhoto: (photo: Photo) => void;
  removeFavouritePhoto: (photo: Photo) => void;
};

const FavouriteContext = createContext<FavouriteContextType>({
  favouritePhotos: [],
  addFavouritePhoto: () => {},
  removeFavouritePhoto: () => {},
});

const FavouriteProvider = ({ children }: PropsWithChildren) => {
  const [favouritePhotos, setFavouritePhotos] = useLocalStorage<Photo[]>(
    "favouritePhotos",
    []
  );

  const addFavouritePhoto = (photo: Photo) => {
    setFavouritePhotos((prevPhotos) => {
      if (prevPhotos.some((p) => p.id === photo.id)) {
        return prevPhotos;
      } else {
        return [...prevPhotos, photo];
      }
    });
  };

  const removeFavouritePhoto = (photo: Photo) => {
    setFavouritePhotos((prevPhotos) =>
      prevPhotos.filter((p) => p.id !== photo.id)
    );
  };

  return (
    <FavouriteContext.Provider
      value={{ favouritePhotos, addFavouritePhoto, removeFavouritePhoto }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteContext, FavouriteProvider };
