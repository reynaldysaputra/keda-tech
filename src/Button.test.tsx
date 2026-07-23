import { render, screen } from "@testing-library/react";
import Button from "./components/ui/Button";

describe("Button Component", () => {
  it("renders button text", () => {
    render(<Button>Click Me</Button>);

    expect(
      screen.getByRole("button")
    ).toHaveTextContent("Click Me");
  });
});