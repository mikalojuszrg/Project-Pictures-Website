import { fireEvent, render, screen } from "@testing-library/react";

import { FavouriteContext } from "../../contexts/FavouriteContext";
import { Photo } from "../../types/photo";
import PhotoCard from "./PhotoCard";

describe("PhotoCard", () => {
  const mockPhoto: Photo = {
    id: 1,
    photographer: "John Doe",
    src: { medium: "https://example.com/image.jpg" },
    url: "https://example.com/photo/1",
  };
  const mockFavouriteContext = {
    addFavouritePhoto: jest.fn(),
    removeFavouritePhoto: jest.fn(),
    favouritePhotos: [],
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
