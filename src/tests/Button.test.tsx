import { fireEvent, render, waitFor } from "@testing-library/react";

import Button from "../components/Button/Button";

describe("Button", () => {
  test("renders with the correct text content", async () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} variant="primary">
        Primary
      </Button>
    );

    const button = await waitFor(() => getByTestId("button"));

    expect(button).toHaveTextContent("Primary");
  });

  test("renders with the correct primary variant class", async () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} variant="primary">
        Primary
      </Button>
    );

    const button = await waitFor(() => getByTestId("button"));
    expect(button).toHaveClass("button button--primary");
  });

  test("renders with the correct secondary variant class", async () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} variant="secondary">
        Secondary
      </Button>
    );

    const button = await waitFor(() => getByTestId("button"));
    expect(button).toHaveClass("button button--secondary");
  });

  test("calls onClick when clicked", async () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button onClick={onClickMock} variant="primary">
        Primary
      </Button>
    );

    const button = await waitFor(() => getByTestId("button"));

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
