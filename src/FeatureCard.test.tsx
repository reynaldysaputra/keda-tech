import { render, screen } from "@testing-library/react";
import { FaBox } from "react-icons/fa";
import FeatureCard from "./components/ui/FeatureCard";


describe("FeatureCard", () => {
  it("renders title and description", () => {
    render(
      <FeatureCard
        icon={FaBox}
        title="Inventory"
        description="Manage products"
      />
    );

    expect(
      screen.getByText("Inventory")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Manage products")
    ).toBeInTheDocument();
  });
});