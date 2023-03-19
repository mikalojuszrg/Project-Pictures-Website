import { FavouriteContext } from "../../contexts/FavouriteContext";
import PhotoCard from "../../components/ImageCard/PhotoCard";
import styles from "./Favourites.module.scss";
import { useContext } from "react";

const Favourites = () => {
  const { favouritePhotos } = useContext(FavouriteContext);
  return (
    <main>
      <div className={styles.grid}>
        {favouritePhotos.map((photo) => (
          //   <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
          <PhotoCard {...photo} key={photo.id} />
        ))}
      </div>
    </main>
  );
};

export default Favourites;
