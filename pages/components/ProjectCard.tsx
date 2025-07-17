type ProjectProps = {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
};

export default function ProjectCard({
  title,
  description,
  slug,
}: ProjectProps) {
  return (
    <a
      href={`/projects/${slug}`}
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </a>
  );
}
