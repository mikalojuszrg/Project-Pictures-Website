import { fireEvent, render, waitFor } from "@testing-library/react";

import Button from "../components/Button/Button";

describe("Button", () => {
  test("calls onClick when clicked", async () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock} variant="primary">
        Primary
      </Button>
    );

    // wait for the button to appear
    const button = await waitFor(() => getByText("Primary"));

    // simulate a click on the button
    fireEvent.click(button);

    // check if the onClick function was called
    expect(onClickMock).toHaveBeenCalled();
  });
});
