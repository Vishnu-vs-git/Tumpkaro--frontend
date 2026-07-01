import { Eye, Pencil, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";


import type { Project } from "./projects.types";
import { Card } from "../../../../shared/components/ui/Card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({
  project,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="overflow-hidden p-0">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Updated {project.updatedAt}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-3">
              <button className="rounded-lg p-2 hover:bg-white/5">
                <Eye size={18} />
              </button>

              <button className="rounded-lg p-2 hover:bg-white/5">
                <Pencil size={18} />
              </button>
            </div>

            <button className="rounded-lg p-2 hover:bg-white/5">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;