import { useEffect, useState } from "react";

import { Photo } from "../../types/image";
import { fetchData } from "../../api/images";

const PhotoGrid = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await fetchData(pageNumber);
      setPhotos((prevPhotos) => [...prevPhotos, ...data]);
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
      <button
        onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}
      >
        Load More
      </button>
    </div>
  );
};
