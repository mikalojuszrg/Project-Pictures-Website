import { useContext, useState } from "react";

import Button from "../Button/Button";
import { FavouriteContext } from "../../contexts/FavouriteContext";
import { Photo } from "../../types/photo";
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
        loading="lazy"
      />
      {/* Pexels don't provide pic titles, so added a placeholder below */}
      <h2 className={styles.container__title}>Title</h2>
      <p className={styles.container__description}>{photo.photographer}</p>
      <Button onClick={handleFavourite}>
        {isFavourite ? "Unfavourite" : "Favourite"}
      </Button>
    </div>
  );
};

export default PhotoCard;
