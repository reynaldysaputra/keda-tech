import Button from "./Button";
import { FaCheck } from "react-icons/fa";

interface Props {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({
  title,
  price,
  period,
  features,
  popular,
}: Props) {
  return (
    <div
      className={`
        relative rounded-3xl border bg-white p-8 transition-all duration-300
        hover:-translate-y-2 hover:shadow-2xl h-full
        ${popular ? "border-blue-600 shadow-xl scale-105" : ""}
      `}
    >
      {popular && (
        <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold">{title}</h3>

      <div className="mt-6 flex items-end">
        <span className="text-5xl font-bold">{price}</span>

        <span className="ml-2 text-gray-500">
          {period}
        </span>
      </div>

      <div className="my-8 h-px bg-gray-200" />

      <ul className="space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <FaCheck className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      <Button className="mt-10 w-full">
        Choose Plan
      </Button>
    </div>
  );
}