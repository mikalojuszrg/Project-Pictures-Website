import { fireEvent, render, screen } from "@testing-library/react";

import { FavouriteContext } from "../contexts/FavouriteContext";
import { Photo } from "../types/photo";
import PhotoCard from "../components/PhotoCard/PhotoCard";

describe("PhotoCard", () => {
  const mockPhoto: Photo = {
    id: 1,
    photographer: "John Doe",
    url: "https://example.com/photo/1",
    src: {
      original: "https://example.com/image-original.jpg",
      large2x: "https://example.com/image-large2x.jpg",
      large: "https://example.com/image-large.jpg",
      medium: "https://example.com/image-medium.jpg",
      small: "https://example.com/image-small.jpg",
      portrait: "https://example.com/image-portrait.jpg",
      landscape: "https://example.com/image-landscape.jpg",
      tiny: "https://example.com/image-tiny.jpg",
    },
  };

  const mockFavouriteContext = {
    addFavouritePhoto: jest.fn(),
    removeFavouritePhoto: jest.fn(),
    favouritePhotos: [] as Photo[],
  };

  it("renders the photo and photographer name", () => {
    render(
      <FavouriteContext.Provider value={mockFavouriteContext}>
        <PhotoCard {...mockPhoto} />
      </FavouriteContext.Provider>
    );

    const photo = screen.getByAltText(mockPhoto.photographer);
    const photographer = screen.getByText(mockPhoto.photographer);

    expect(photo).toBeInTheDocument();
    expect(photographer).toBeInTheDocument();
  });

  it("calls addFavouritePhoto when the 'Favourite' button is clicked", () => {
    render(
      <FavouriteContext.Provider value={mockFavouriteContext}>
        <PhotoCard {...mockPhoto} />
      </FavouriteContext.Provider>
    );

    const favouriteButton = screen.getByText("Favourite");
    fireEvent.click(favouriteButton);

    expect(mockFavouriteContext.addFavouritePhoto).toHaveBeenCalledTimes(1);
    expect(mockFavouriteContext.addFavouritePhoto).toHaveBeenCalledWith(
      mockPhoto
    );
  });

  it("calls removeFavouritePhoto when the 'Unfavourite' button is clicked", () => {
    mockFavouriteContext.favouritePhotos = [mockPhoto];

    render(
      <FavouriteContext.Provider value={mockFavouriteContext}>
        <PhotoCard {...mockPhoto} />
      </FavouriteContext.Provider>
    );

    const unfavouriteButton = screen.getByText("Unfavourite");
    fireEvent.click(unfavouriteButton);

    expect(mockFavouriteContext.removeFavouritePhoto).toHaveBeenCalledTimes(1);
    expect(mockFavouriteContext.removeFavouritePhoto).toHaveBeenCalledWith(
      mockPhoto
    );
  });

  it("updates the 'isFavourite' state when favouritePhotos context changes", () => {
    const mockFavouritePhotos = [mockPhoto];
    mockFavouriteContext.favouritePhotos = mockFavouritePhotos;

    const { rerender } = render(
      <FavouriteContext.Provider value={mockFavouriteContext}>
        <PhotoCard {...mockPhoto} />
      </FavouriteContext.Provider>
    );

    expect(screen.getByText("Unfavourite")).toBeInTheDocument();

    mockFavouriteContext.favouritePhotos = [];
    rerender(
      <FavouriteContext.Provider value={mockFavouriteContext}>
        <PhotoCard {...mockPhoto} />
      </FavouriteContext.Provider>
    );

    expect(screen.getByText("Favourite")).toBeInTheDocument();
  });
});
