import Button from "../../components/Button/Button";
import Topbar from "../../components/Topbar/Topbar";
import { render } from "@testing-library/react";

describe("Topbar", () => {
  test("If Topbar renders correctly", () => {
    const { getByTestId } = render(
      <Topbar>
        <h1>Topbar</h1>
        <Button onClick={() => {}} variant="primary">
          Primary
        </Button>
      </Topbar>
    );

    const topbar = getByTestId("topbar");

    expect(topbar).toBeInTheDocument();
  });
});
