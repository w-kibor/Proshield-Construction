import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  category: string;
  onClick?: () => void;
}

export function ProjectCard({
  image,
  title,
  location,
  category,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
    >
      <div className="h-64 overflow-hidden relative">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-[#F5A623] text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[#0A2342] mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
      </div>
    </div>
  );
}
