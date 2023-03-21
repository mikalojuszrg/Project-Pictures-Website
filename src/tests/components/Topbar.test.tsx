import { render, screen } from "@testing-library/react";

import Button from "../../components/Button/Button";
import Topbar from "../../components/Topbar/Topbar";

describe("Topbar", () => {
  test("Tobpar renders children correctly", () => {
    const { getByTestId } = render(
      <Topbar>
        <h1>Topbar</h1>=
        <Button onClick={() => {}} variant="primary">
          Primary
        </Button>
      </Topbar>
    );

    // const topbar = getByTestId("topbar");
    const button = screen.getByText("Primary");

    expect(button).toBeInTheDocument();
  });
});
