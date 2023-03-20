import { fireEvent, render } from "@testing-library/react";

import Button from "../../components/Button/Button";
import styles from "../components/Button/Button.module.scss";

describe("Button", () => {
  test("renders with the correct text content", () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} variant="primary">
        Primary
      </Button>
    );

    const button = getByTestId("button");

    expect(button).toHaveTextContent("Primary");
  });

  test("renders with the correct primary variant class", () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} variant="primary">
        Primary
      </Button>
    );

    const button = getByTestId("button");

    expect(button).toHaveClass(`${styles.button} ${styles["button--primary"]}`);
  });

  test("renders with the correct secondary variant class", () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} variant="secondary">
        Secondary
      </Button>
    );

    const button = getByTestId("button");

    expect(button).toHaveClass(
      `${styles.button} ${styles["button--secondary"]}`
    );
  });

  test("calls onClick when clicked", () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button onClick={onClickMock} variant="primary">
        Primary
      </Button>
    );

    const button = getByTestId("button");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
