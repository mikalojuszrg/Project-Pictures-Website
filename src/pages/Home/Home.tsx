import { useEffect, useRef, useState } from "react";

import { Photo } from "../../types/image";
import PhotoCard from "../../components/ImageCard/PhotoCard";
import { fetchData } from "../../api/images";
import styles from "./Home.module.scss";

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  console.log(photos);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await fetchData(pageNumber);
      if (pageNumber === 1) {
        setPhotos(data);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      }
    };
    loadPhotos();
  }, [pageNumber]);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      if (
        container &&
        container.scrollTop + container.clientHeight >= container.scrollHeight
      ) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
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
  }, [containerRef.current]);

  return (
    <main>
      <h1>Photos</h1>
      <div className={styles.grid} ref={containerRef}>
        {photos.map((photo) => (
          <PhotoCard {...photo} key={photo.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
