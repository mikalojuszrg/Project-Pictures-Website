import { Photo } from "../types/photo";

export const filterArray = (array: Photo[]): Photo[] => {
  const filteredArray = array.filter((photo, index, arr) => {
    // Keep the photo only if it's the first occurrence of its ID in the array
    return arr.findIndex((p) => p.id === photo.id) === index;
  });

  return filteredArray;
};
