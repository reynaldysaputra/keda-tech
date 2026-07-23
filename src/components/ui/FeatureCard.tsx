import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div
      className="
            rounded-2xl
            border
            bg-white
            p-8
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl"
    >
      <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-4 text-3xl text-blue-600">
        <Icon />
      </div>

      <h3 className="mb-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}