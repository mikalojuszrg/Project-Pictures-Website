import { Photo } from "../types/photo";

export const filterArray = (array: Photo[]): Photo[] => {
  const filteredArray = array.filter((photo, index, arr) => {
    return arr.findIndex((p) => p.id === photo.id) === index;
  });

  return filteredArray;
};
