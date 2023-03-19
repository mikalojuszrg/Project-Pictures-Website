import Button from "../components/Button/Button";
import { render } from "@testing-library/react";

test("renders button without errors", () => {
  const onClick = jest.fn();
  render(
    <Button variant="primary" onClick={onClick}>
      Click me
    </Button>
  );
});
