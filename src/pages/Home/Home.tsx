import { useEffect, useRef, useState } from "react";

import { Photo } from "../../types/image";
import PhotoCard from "../../components/ImageCard/PhotoCard";
import { fetchData } from "../../api/images";
import styles from "./Home.module.scss";

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      const data = await fetchData(pageNumber);
      setLoading(false);
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
  }, [loading, containerRef, containerHeight]);

  // Filter out duplicate images
  const filteredPhotos = photos.filter(
    (photo, index, self) => index === self.findIndex((p) => p.id === photo.id)
  );

  return (
    <main className={styles.container}>
      <section className={styles.container__images} ref={containerRef}>
        {filteredPhotos.map((photo) => (
          <PhotoCard {...photo} key={photo.id} />
        ))}
        {loading && <div>Loading...</div>}
      </section>
    </main>
  );
};

export default Home;
