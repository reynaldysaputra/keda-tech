import { render, screen } from "@testing-library/react";
import PricingCard from "./components/ui/PricingCard";

describe("Pricing Card", () => {
  it("renders pricing plan", () => {
    render(
      <PricingCard
        title="Business"
        price="$49"
        period="/month"
        popular
        features={[
          "Analytics",
          "Support",
        ]}
      />
    );

    expect(
      screen.getByText("Business")
    ).toBeInTheDocument();

    expect(
      screen.getByText("$49")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Most Popular")
    ).toBeInTheDocument();
  });
});