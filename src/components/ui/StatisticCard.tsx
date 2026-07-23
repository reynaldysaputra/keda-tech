import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  value: string;
  label: string;
}

export default function StatisticCard({
  icon: Icon,
  value,
  label,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl text-blue-600">
        <Icon />
      </div>

      <h3 className="text-4xl font-bold">
        {value}
      </h3>

      <p className="mt-2 text-gray-500">
        {label}
      </p>
    </div>
  );
}