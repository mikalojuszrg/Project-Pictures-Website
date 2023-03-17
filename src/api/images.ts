import { Photo } from "../types/image";

const KEY = "IIMiNJD9KiSjJZoHdhPvA92i5LfbmCCKZQMVHsaQUwjdGJFi6aCKbyIx";
const URL = "https://api.pexels.com/v1/";

export const fetchData = async (pageNumber: number): Promise<Photo[]> => {
  const response = await fetch(`${URL}curated?page=${pageNumber}&per_page=10`, {
    headers: {
      Authorization: KEY,
    },
  });
  const data = await response.json();
  return data.photos;
};
