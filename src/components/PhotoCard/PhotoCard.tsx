import { useContext, useEffect, useRef, useState } from "react";

import Button from "../Button/Button";
import { FavouriteContext } from "../../contexts/FavouriteContext";
import { Photo } from "../../types/photo";
import styles from "./PhotoCard.module.scss";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const PhotoCard = (photo: Photo) => {
  const { addFavouritePhoto, removeFavouritePhoto, favouritePhotos } =
    useContext(FavouriteContext);
  const [isFavourite, setIsFavourite] = useState(
    favouritePhotos.some((p) => p.id === photo.id)
  );
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    setIsFavourite(favouritePhotos.some((p) => p.id === photo.id));
  }, [favouritePhotos, photo.id]);

  const handleFavourite = () => {
    if (isFavourite) {
      removeFavouritePhoto(photo);
    } else {
      addFavouritePhoto(photo);
    }
    setIsFavourite((prevValue) => !prevValue);
  };

  const imageSrc = isVisible ? photo.src.large : photo.src.small;

  return (
    <div className={styles.container} ref={ref}>
      <img
        src={imageSrc}
        alt={photo.photographer}
        className={styles.container__image}
        onClick={() => {
          window.location.href = photo.url;
        }}
        loading="lazy"
      />
      {/* Pexels don't provide pic titles, so added a placeholder below */}
      <h2 className={styles.container__title}>Title</h2>
      <p className={styles.container__description}>{photo.photographer}</p>
      <Button variant="primary" onClick={handleFavourite}>
        {isFavourite ? "Unfavourite" : "Favourite"}
      </Button>
    </div>
  );
};

export default PhotoCard;
