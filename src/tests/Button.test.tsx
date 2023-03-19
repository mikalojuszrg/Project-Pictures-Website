import { fireEvent, render, waitFor } from "@testing-library/react";

import Button from "../components/Button/Button";

describe("Button", () => {
  test("renders with the correct text content", async () => {
    const { getByText } = render(
      <Button onClick={() => {}} variant="primary">
        Primary
      </Button>
    );

    const button = await waitFor(() => getByText("Primary"));

    expect(button).toBeInTheDocument();
  });

  test("renders with the correct primary variant class", async () => {
    const { getByText } = render(
      <Button onClick={() => {}} variant="primary">
        Primary
      </Button>
    );

    const button = await waitFor(() => getByText("Primary"));

    expect(button).toHaveClass("button--primary");
  });

  test("renders with the correct secondary variant class", async () => {
    const { getByText } = render(
      <Button onClick={() => {}} variant="secondary">
        Secondary
      </Button>
    );

    const button = await waitFor(() => getByText("Secondary"));

    expect(button).toHaveClass("button--secondary");
  });

  test("calls onClick when clicked", async () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock} variant="primary">
        Primary
      </Button>
    );

    const button = await waitFor(() => getByText("Primary"));

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
