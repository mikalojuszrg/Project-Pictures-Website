import { useContext, useEffect, useRef, useState } from "react";

import { FavouriteContext } from "../../contexts/FavouriteContext";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import styles from "./Favourites.module.scss";

const Favourites = () => {
  const { favouritePhotos } = useContext(FavouriteContext);
  const [containerHeight, setContainerHeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setContainerHeight(container.clientHeight);
    }
    const handleScroll = () => {
      if (
        container &&
        container.scrollTop + container.clientHeight >=
          container.scrollHeight - containerHeight &&
        !loading
      ) {
        setLoading(true);
        setLoading(false);
      }
    };
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading, containerRef, containerHeight]);

  return (
    <section className={styles.container}>
      <div className={styles.container__images} ref={containerRef}>
        {favouritePhotos.map((photo) => (
          <PhotoCard {...photo} key={photo.id} />
        ))}
      </div>
    </section>
  );
};

export default Favourites;
