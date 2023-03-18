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
        src={photo.src.landscape}
        alt={photo.photographer}
        className={styles.container__image}
      />
      {/* <h2 className={styles.container__text}>{photo.photographer}</h2>
      <Button onClick={handleFavourite} className={styles.container__button}>
        {isFavourite ? "Unfavourite" : "Favourite"}
      </Button> */}
    </div>
  );
};

export default PhotoCard;
