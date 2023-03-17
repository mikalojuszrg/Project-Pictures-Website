import { Photo } from "../../types/image";
import styles from "./PhotoCard.module.scss";

const PhotoCard = (photo: Photo) => {
  return (
    <div>
      <img src={photo.src.medium} alt={photo.photographer} />
    </div>
  );
};

export default PhotoCard;
