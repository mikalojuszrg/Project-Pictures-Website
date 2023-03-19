import { useEffect, useRef, useState } from "react";

import { Photo } from "../../types/photo";
import PhotoCard from "../../components/ImageCard/PhotoCard";
import { fetchData } from "../../api/images";
import { filterArray } from "../../utils/filter";
import styles from "./Home.module.scss";

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const filteredPhotos = filterArray(photos);

  console.log(photos);

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

  return (
    <section className={styles.container}>
      <div className={styles.container__images} ref={containerRef}>
        {filteredPhotos.map((photo) => (
          <PhotoCard {...photo} key={photo.id} />
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </section>
  );
};

export default Home;
