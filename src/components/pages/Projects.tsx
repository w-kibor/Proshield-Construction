import { ProjectCard } from "../ProjectCard";
import { useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  materials: string;
  duration: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Epoxy Floor Installation",
    location: "Karen, Nairobi",
    category: "Epoxy",
    image: "https://images.unsplash.com/photo-1741105820127-97dd1aaafe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcG94eSUyMGZsb29yJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MTExOTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete epoxy flooring installation for a modern residential home. Delivered a sleek, high-gloss finish that is both beautiful and durable.",
    materials: "Premium epoxy resin, hardener, decorative flakes",
    duration: "5 days",
  },
  {
    id: 2,
    title: "Terrazzo Restoration",
    location: "Westlands, Nairobi",
    category: "Terrazzo",
    image: "https://images.unsplash.com/photo-1614494705729-96266717f53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYXp6byUyMGZsb29yaW5nJTIwcGF0dGVybnxlbnwxfHx8fDE3NjExMTk3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Restored and polished terrazzo flooring in a commercial office building, bringing back its original luster and beauty.",
    materials: "Terrazzo chips, cement, polishing compounds",
    duration: "7 days",
  },
  {
    id: 3,
    title: "Basement Waterproofing",
    location: "Kilimani, Nairobi",
    category: "Waterproofing",
    image: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcnByb29maW5nJTIwY29uc3RydWN0aW9uJTIwd29ya3xlbnwxfHx8fDE3NjExMTk3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete waterproofing solution for a residential basement, eliminating all water leakage issues and preventing future moisture problems.",
    materials: "Waterproof membrane, sealants, drainage systems",
    duration: "4 days",
  },
  {
    id: 4,
    title: "Industrial Epoxy Floor",
    location: "Industrial Area, Nairobi",
    category: "Epoxy",
    image: "https://images.unsplash.com/photo-1666832252027-fe295fb557d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmxvb3Jpbmd8ZW58MXx8fHwxNzYxMTE5NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Heavy-duty epoxy flooring for a warehouse facility, designed to withstand heavy machinery and constant traffic.",
    materials: "Industrial-grade epoxy, anti-slip additives",
    duration: "10 days",
  },
  {
    id: 5,
    title: "Terrazzo Feature Wall",
    location: "Lavington, Nairobi",
    category: "Terrazzo",
    image: "https://images.unsplash.com/photo-1625308216182-218ff63d47bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmbG9vciUyMHRleHR1cmV8ZW58MXx8fHwxNzYxMTE5NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Custom terrazzo feature wall with unique color combinations, creating a stunning focal point in a modern home.",
    materials: "Custom terrazzo mix, colored aggregates, polishing materials",
    duration: "6 days",
  },
  {
    id: 6,
    title: "Roof Waterproofing",
    location: "Kiambu",
    category: "Waterproofing",
    image: "https://images.unsplash.com/photo-1638976892251-efab1145436a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZmxvb3JpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzYxMTE5NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Comprehensive roof waterproofing for a residential property, providing complete protection against water damage.",
    materials: "Waterproof coating, sealants, reinforcement mesh",
    duration: "3 days",
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Epoxy", "Terrazzo", "Waterproofing"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#0A2342] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of completed projects showcasing quality craftsmanship
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 sticky top-20 z-30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 ${
                  selectedCategory === category
                    ? "bg-[#F5A623] hover:bg-[#E09613] text-white"
                    : "bg-white text-[#0A2342] border-2 border-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                location={project.location}
                category={project.category}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
              >
                <X className="h-6 w-6 text-[#0A2342]" />
              </button>
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-[400px] object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F5A623] text-white px-4 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </span>
                <span className="text-gray-500">{selectedProject.duration}</span>
              </div>
              <h2 className="text-[#0A2342] mb-2">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.location}</p>
              
              <div className="mb-6">
                <h3 className="text-[#0A2342] mb-2">Project Description</h3>
                <p className="text-gray-700">{selectedProject.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-[#0A2342] mb-2">Materials Used</h3>
                  <p className="text-gray-700">{selectedProject.materials}</p>
                </div>
                <div>
                  <h3 className="text-[#0A2342] mb-2">Project Duration</h3>
                  <p className="text-gray-700">{selectedProject.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
