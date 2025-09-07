import { forwardRef, useState } from 'react';
import styles from "../../app/ui/home.module.css";
import ProjectCard from './projectCard';
import Skills from '../skills';
import { DATA_PROJECTS } from './data';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const [page, setPage] = useState(0);
  const projectsPerPage = 3;

  const start = page * projectsPerPage;
  const end = start + projectsPerPage;
  const currentProjects = DATA_PROJECTS.slice(start, end);
  
  return (
    <section  id="projects" className="min-h-screen py-20 px-6 md:px-20 bg-custom-secondary text-custom-light rounded-md" >
      <div ref={ref} data-dir="left" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">Trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} id={project.id} />
            ))}
        </div>
        <div className="flex justify-center mt-10">
          {page === 0 ? (
            <button
              onClick={() => setPage(1)}
              className={`px-6 py-2 ${styles.buttonNextBack} ${styles.effectWaveProjects} cursor-pointer border-2 border-transparent rounded-full hover:bg-[var(--accent)] hover:border-2 hover:border-[var(--light)]`}
            >
              Mostrar más
            </button>
          ) : (
            <button
              onClick={() => setPage(0)}
              className={`px-6 py-2 ${styles.buttonNextBack} ${styles.effectWaveProjects} cursor-pointer border-2 border-transparent rounded-full hover:bg-[var(--accent)] hover:border-2 hover:border-[var(--light)]`}
            >
              Volver
            </button>
          )}
        </div>
        <div className="mt-16 justify-center flex items-center flex-col">
          <span className="text-4xl font-bold text-center mb-12 text-white tracking-wide">Skills</span>
          <Skills />
        </div>
      </div>
        {/* <button className={`${styles.buttonAboutMe} ${styles.effectWave} px-6 py-4 cursor-pointer rounded-md mt-8`}>Conocerme más</button> */}
    </section>
  )
});

Projects.displayName = 'Projects';

export default Projects;