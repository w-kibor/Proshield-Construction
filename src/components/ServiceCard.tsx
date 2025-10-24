import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  onLearnMore?: () => void;
  showButton?: boolean;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  onLearnMore,
  showButton = false,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 group">
      {image && (
        <div className="h-48 overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="bg-[#F5A623]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-[#F5A623]" />
        </div>
        <h3 className="text-[#0A2342] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {showButton && (
          <Button
            onClick={onLearnMore}
            variant="outline"
            className="border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white rounded-full"
          >
            Learn More
          </Button>
        )}
      </div>
    </div>
  );
}
