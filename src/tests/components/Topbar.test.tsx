import { FAVOURITES_PATH, HOME_PATH } from "../../routes/const";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";

describe("Topbar", () => {
  test("renders the correct title and button when on the home page", () => {
    render(
      <MemoryRouter initialEntries={[HOME_PATH]}>
        <Topbar />
      </MemoryRouter>
    );

    const titleElements = screen.getAllByText(/photos/i);
    const titleElement = titleElements[0]; // get the first matching element
    const buttonElement = screen.getByRole("button", {
      name: /favourite photos/i,
    });

    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the correct title and button when on the favourites page", () => {
    render(
      <MemoryRouter initialEntries={[FAVOURITES_PATH]}>
        <Topbar />
      </MemoryRouter>
    );

    const titleElements = screen.getAllByText(/favourites/i);
    const titleElement = titleElements[0]; // get the first matching element
    const buttonElement = screen.getByRole("button", { name: /all photos/i });

    expect(titleElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
