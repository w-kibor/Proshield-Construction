import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  feedback: string;
  rating?: number;
  location?: string;
}

export function TestimonialCard({
  name,
  feedback,
  rating = 5,
  location,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-[#F5A623] text-[#F5A623]" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{feedback}"</p>
      <div>
        <p className="text-[#0A2342]">{name}</p>
        {location && <p className="text-sm text-gray-500">{location}</p>}
      </div>
    </div>
  );
}
