import { PropsWithChildren, createContext } from "react";
import {
  useAddLocalStorage,
  useRemoveLocalStorage,
} from "../hooks/localStorage";

import { Photo } from "../types/image";

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
  const [favouritePhotos, setFavouritePhotos] = useAddLocalStorage<Photo[]>(
    "favouritePhotos",
    []
  );

  const addFavouritePhoto = (photo: Photo) => {
    setFavouritePhotos((prevPhotos) => [...prevPhotos, photo]);
  };

  const removeFavouritePhoto = (photo: Photo) => {
    setFavouritePhotos((prevPhotos) =>
      prevPhotos.filter((p) => p.id !== photo.id)
    );
  };

  useRemoveLocalStorage<Photo[]>("favouritePhotos", favouritePhotos);

  return (
    <FavouriteContext.Provider
      value={{ favouritePhotos, addFavouritePhoto, removeFavouritePhoto }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteContext, FavouriteProvider };
