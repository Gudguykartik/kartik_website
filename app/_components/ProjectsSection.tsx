"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolioProjects } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight, ChevronDown } from "lucide-react";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjectCount = 4;
  
  const visibleProjects = showAll 
    ? portfolioProjects 
    : portfolioProjects.slice(0, initialProjectCount);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="py-32" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          My portfolio
        </h2>

        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://github.com/andrijaweb" target="_blank">
            All Projects
          </Link>
        </ShinyButton>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {!showAll && portfolioProjects.length > initialProjectCount && (
        <div className="mt-8 flex justify-center">
          <ShinyButton 
            onClick={handleShowMore}
            icon={<ChevronDown />}
          >
            Show More Projects ({portfolioProjects.length - initialProjectCount} more)
          </ShinyButton>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
