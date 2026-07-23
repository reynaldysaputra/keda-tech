import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";


describe("Navbar", () => {
  it("renders menu", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByText("About")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Pricing")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Contact")
    ).toBeInTheDocument();
  });
});