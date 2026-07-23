interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <p className="mt-5 text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}