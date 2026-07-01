import ProjectCard from "./ProjectCard";
import { projects } from "./projects.data";

const RecentProjects = () => {
  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Projects
          </h2>

          <p className="mt-2 text-slate-400">
            Continue where you left off.
          </p>
        </div>

        <button className="text-violet-400 hover:text-violet-300">
          View All →
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;