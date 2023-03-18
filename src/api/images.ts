import { Photo } from "../types/photo";

const KEY = "IIMiNJD9KiSjJZoHdhPvA92i5LfbmCCKZQMVHsaQUwjdGJFi6aCKbyIx";
const URL = "https://api.pexels.com/v1/";

export const fetchData = async (pageNumber: number): Promise<Photo[]> => {
  console.log(`Fetching data for page ${pageNumber}`);
  const response = await fetch(`${URL}curated?page=${pageNumber}&per_page=20`, {
    headers: {
      Authorization: KEY,
    },
  });
  const data = await response.json();
  return data.photos;
};
