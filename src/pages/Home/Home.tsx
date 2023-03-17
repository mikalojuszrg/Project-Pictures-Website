import { useEffect, useState } from "react";

import { Photo } from "../../types/image";
import { fetchData } from "../../api/images";

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = () => {
    return setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

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

  return (
    <div>
      <h1>Photo Grid</h1>
      <div className="grid">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
        ))}
      </div>
      <button onClick={handlePageNumber}>Load More</button>
    </div>
  );
};

export default Home;
