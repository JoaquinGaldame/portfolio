"use client";
import Image from "next/image";
import styles from "../../app/ui/home.module.css";
import { useEffect, useRef, useState } from "react";
import { ProjectCardProps, projectsData } from "./projects.interface";
import { DATA_PROJECTS } from "./data";
import ProjectModal from "./modalView";
import { motion, AnimatePresence } from "framer-motion";



export default function ProjectCard({ id }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentProject = DATA_PROJECTS.find(p => p.id === id);

  const images = currentProject.images ?? [];

  if (!currentProject) return null;
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -40, filter: "blur(4px)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      { currentProject && (
          <div className="bg-custom-dark rounded-2xl shadow-xl shadow-black/40 p-6 hover:-translate-y-2 transition">
            <div className="rounded-lg overflow-hidden bg-custom-dark mx-4">
              <Image
                src={currentProject?.images[0]}
                alt={currentProject.title}
                className={`${styles.img} object-cover h-72 w-full  `}
                unoptimized
              />
            </div>
            <div className="mx-4 py-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center sm:text-left">{currentProject?.title}</h3>
              <p className="text-sm text-custom-light mb-4 text-center lg:text-justify md:text-justify">
                {currentProject?.text}
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="hidden md:block mx-auto text-[var(--light)] bg-[var(--secondary)] px-6 py-2 border-1 border-transparent rounded-full hover:text-[var(--light)] hover:bg-[var(--dark)] hover:border-1 hover:border-[var(--light)] cursor-pointer transition"
              >
                Ver más +
              </button>
            </div>
          </div>
        )
      }
    </motion.div>
    {/* Modal */}
    <ProjectModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={currentProject.title}
      text={currentProject.longText ?? currentProject.text}
      text2={currentProject.longTextSecondary ?? null}
      isHaveList={currentProject.addList}
      lists={currentProject.lists ?? []}
      images={images}
      technologies={currentProject.technologies ?? []}
    />
  </>
  );
}