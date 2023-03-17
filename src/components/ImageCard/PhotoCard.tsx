import Button from "../Button/Button";
import { FavouriteContext } from "../../contexts/FavouriteContext";
import { Photo } from "../../types/image";
import styles from "./PhotoCard.module.scss";
import { useContext } from "react";

const PhotoCard = (photo: Photo) => {
  const { addFavouritePhoto } = useContext(FavouriteContext);

  return (
    <div className={styles.container}>
      <img
        src={photo.src.medium}
        alt={photo.photographer}
        className={styles.container__image}
      />
      <h2>{photo.photographer}</h2>
      <Button onClick={() => addFavouritePhoto(photo)}>Favourite</Button>
    </div>
  );
};

export default PhotoCard;
