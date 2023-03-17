import Button from "../Button/Button";
import { Photo } from "../../types/image";
import styles from "./PhotoCard.module.scss";

const PhotoCard = (photo: Photo) => {
  return (
    <div className={styles.container}>
      <img
        src={photo.src.medium}
        alt={photo.photographer}
        className={styles.conatainer__image}
      />
      <h2>{photo.photographer}</h2>
      <Button onClick={() => console.log("asd")}>Favourite</Button>
    </div>
  );
};

export default PhotoCard;
