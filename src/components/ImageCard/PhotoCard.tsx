import { useContext, useState } from "react";

import Button from "../Button/Button";
import { FavouriteContext } from "../../contexts/FavouriteContext";
import { Photo } from "../../types/image";
import styles from "./PhotoCard.module.scss";

const PhotoCard = (photo: Photo) => {
  const { addFavouritePhoto, removeFavouritePhoto, favouritePhotos } =
    useContext(FavouriteContext);
  const [isFavourite, setIsFavourite] = useState(
    favouritePhotos.some((p) => p.id === photo.id)
  );

  const handleFavourite = () => {
    if (isFavourite) {
      removeFavouritePhoto(photo);
    } else {
      addFavouritePhoto(photo);
    }
    setIsFavourite((prevValue) => !prevValue);
  };

  return (
    <div className={styles.container}>
      <img
        src={photo.src.medium}
        alt={photo.photographer}
        className={styles.container__image}
      />
      <h2>{photo.photographer}</h2>
      <Button onClick={handleFavourite}>
        {isFavourite ? "Unfavourite" : "Favourite"}
      </Button>
    </div>
  );
};

export default PhotoCard;
