"use client";
import Image from "next/image";
import logo from "../asset/logos/logoJG.svg";
import tpvwebicon from "../../public/projects/tpvweb/TPV-prototipo7.png"
import smartire from "../../public/projects/smartirecontrol/Example-1.png"
import pedidosinternos from "../../public/projects/pedidosinternos/carro-1.png"
import managementMonitoring from "../../public/projects/managment-monitoring/Foto-Prototipo-2.png"
import solucioneserp from "../../public/projects/solucioneserp/solucionesERP-1.png"
import coolsoft from "../../public/projects/coolsoft-migration/menu-1.png"
import Icon from "../components/icon";
import { siGithub, siInstagram, siWhatsapp } from "simple-icons/icons";
import linkedin from "../../public/linkedin-icon.svg"
import styles from './ui/home.module.css'
import { useEffect, useRef, useState } from "react";
import { animate, createDraggable, createScope, createSpring, eases, onScroll, stagger, svg, utils, waapi} from "animejs";
import { motion, Variants } from "framer-motion";
import { container, variantsLeft, variantsRight } from "pages/components/skills";
import ProjectCard from "pages/components/projects/project";
import Skills from "pages/components/skills";
import { DATA_PROJECTS } from "pages/components/projects/data";

export default function Home() {
  const headerRef = useRef(null);
  const hero = useRef(null);
  const aboutme = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);
  const [page, setPage] = useState(0);
  const projectsPerPage = 3;

  const start = page * projectsPerPage;
  const end = start + projectsPerPage;
  const currentProjects = DATA_PROJECTS.slice(start, end);

  useEffect(() => {
    if ( !hero.current || 
      !headerRef.current || 
      !aboutme.current || 
      !projects.current ||
      !contact.current ||
      !footer.current
    ) return;

    const animateSection = (el: Element, fromX: number) => {
      animate(el as HTMLElement, {
        translateX: [fromX, 0],
        opacity: [0, 1],
        filter: ["blur(2px)", "blur(0px)"], // 👈 efecto suave
        easing: "easeOutCubic", // más natural que Expo
        duration: 800,
      });
    };

    // 👇 observer para las demás secciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const dir = target.dataset.dir === "left" ? -80 : 80;
            animateSection(target, dir);
            observer.unobserve(target);
          }
        });
      },
      { threshold: window.innerWidth < 768 ? 0.05 : 0.2 }
    );

    [headerRef.current, hero.current,aboutme.current, projects.current, contact.current, footer.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="font-sans bg-custom-dark text-custom-light w-full scroll-container">
      {/* HEADER */}
      <header  ref={headerRef} data-dir="left"  className={`bg-custom-secondary fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 shadow-lg z-50`} style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <div className="flex items-center text-center gap-4 justify-center w-full sm:w-1/3 sm:justify-start">
          <span className={`${styles.shinyText} text-2xl font-bold text-shadow-md`}>Joaquin Galdame</span>
        </div>
        <nav className="hidden md:flex gap-8 text-lg font-bold ">
          <a href="#about" className="hover:text-[var(--primary)] transition">Sobre mí</a>
          <a href="#projects" className="hover:text-[var(--primary)] transition">Experiencia</a>
          <a href="#contact" className="hover:text-[var(--primary)] transition">Contacto</a>
        </nav>
      </header>
      {/* HERO */}
      <section ref={hero} data-dir="right" className={`min-h-screen flex-col justify-center items-center text-center px-6 pt-10 large centered grid square-grid array-container`} style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 flex flex-col items-center">
            <div className="titulo flex flex-row">
              <span className="text-custom-accent">Joaquin</span>
              <span className="text-custom-accent ml-3">Galdame</span>
            </div>
          </h1>
          <p className={`text-lg md:text-2xl font-noto-sans font-semibold max-w-2xl mb-1 `}>
            Desarrollador Web Full Stack <br/>
            Técnico Universitario en Programación
          </p>
          <p className="text-lg text-custom-light md:text-xl max-w-2xl mb-8">
            Dedicación y compromiso con pasión por crear experiencias digitales modernas, 
            rápidas y con impacto.
          </p>
          {/* <a
            href="#projects"
            className="bg-custom-accent text-custom-dark px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-custom-light transition line"
          > */}
          <div className={styles.wrapper}>
            <a
              href="#projects"
              className={styles.aButton}
            >
              <span className={`${styles.aButtonspan1}`}></span>
              <span className={`${styles.aButtonspan1}`}></span>
              <span className={`${styles.aButtonspan1}`}></span>
              <span className={`${styles.aButtonspan1}`}></span>
              Ver Experiencia
            </a>
          </div>
        </div>
      </section>
      
      {/* PROJECTS */}
      <section    id="projects" className="min-h-screen py-20 px-6 md:px-20 bg-custom-secondary text-custom-light rounded-md" >
        <div ref={projects} data-dir="left" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
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
          <div className="mt-50 justify-center flex items-center flex-col">
            <span className="text-4xl font-bold text-center mb-12 text-white tracking-wide">Skills</span>
            <Skills />
          </div>
        </div>
          {/* <button className={`${styles.buttonAboutMe} ${styles.effectWave} px-6 py-4 cursor-pointer rounded-md mt-8`}>Conocerme más</button> */}
      </section>

      {/* ABOUT */}
      <section ref={aboutme} data-dir="right"  id="about" className="min-h-screen py-20 px-6 md:px-20 text-center md:text-left sm:text-center" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <div className="flex flex-row items-center justify-center md:justify-start lg:justify-start w-full">
          <h2 className="text-4xl font-bold mb-8">Sobre mí</h2>
        </div>
        <div>
          <p className="flex text-2xl w-auto">Soy Desarrollador Web Full Stack Freelance y Técnico Universitario en Programación.</p>
        </div>
        <div>
          <p className="text-xl text-custom-light mt-4 text-center lg:text-justify md:text-justify">
             Tengo un dominio sólido de los fundamentos del desarrollo web y la programación, con foco en entregar software de alta calidad que cumpla con los requisitos de cada proyecto. Me caracterizan el compromiso, la dedicación y la proactividad, cualidades que considero esenciales para alcanzar resultados profesionales.
          </p>
          <p className="text-xl text-custom-light mt-4 text-center lg:text-justify md:text-justify">
            Mi creencia es que el verdadero corazón de la agilidad está en la capacidad de adaptarse a los cambios, filosofía que aplico en cada desafío.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-[80vw] lg:grid-cols-3">
          <div className={`${styles.gradientBorderLeft} rounded-3xl rounded-t-3xl z-10 p-8 bg-gradient-to-br from-custom-dark to-custom-primary sm:mx-8 sm:rounded-b-sm sm:p-10 lg:mx-0 lg:rounded-tr-sm lg:rounded-bl-3xl hover:rounded-3xl  ${styles.cardHoverLeft}`}>
            <div className="bg-custom-secondary lg:p-3 md:p-3 sm:p-0 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 id="tier-hobby" className="text-3xl font-semibold text-custom-light text-shadow-md">Desarrollador Web Full Stack</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-base text-custom-secondary font-semibold">+ 2 años</span>
            </p>
            <p className="mt-5 text-base/6 text-custom-light opacity-90 leading-relaxed">Experiencia como Desarrollador Web Full Stack para la Empresa SoftSystems Soluciones para la Gestión de Negocios, integrando funcionalidades y módulos a diversos proyectos multi-empresas, administrando bases de datos y deploy en producción.&nbsp;Experiencia reciente en Desarrollo de software a medida para empresas como Electronica BIOS, CODILANT integrando nuevas soluciones a procesos especificos de control y gestión de datos.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-custom-light sm:mt-10">
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                + 10 projects
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Database Management
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Advanced analytics
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                API integration
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Deploys and server administration
              </li>
            </ul>
          </div>

          <div className={`${styles.gradientBorderMiddle} relative rounded-3xl z-50 p-8 bg-gradient-to-br from-custom-dark to-custom-primary to-custom-primary sm:p-10 ${styles.cardHoverPrincipal}`}>
            <div className="bg-custom-secondary p-3 rounded-lg h-12 w-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 id="tier-technician" className="text-3xl font-semibold text-custom-light text-shadow-md">Técnico Universitario en Programación</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-base text-custom-secondary font-semibold">Febrero 2017 - Febrero 2023</span>
            </p>
            <p className="mt-5 text-base/6 text-custom-light opacity-90 leading-relaxed">Egresado de la Facultad de Ciencias Exactas,Físicas y Naturales de la Univerdad Nacional de San Juan. Título Intermedio con el Objetivo de adquirir sólida formación en Lenguajes y principios de Programación y una visión general del funcionamiento de equipamiento computacional y desarrollo de software.&nbsp; La incumbencias abarcan poseer amplios conocimientos en estrategias de programación, en diferentes paradigmas de lenguajes y tecnologías, implementación de algoritmos. Conocimientos en Sistemas Operativos, Estructuras de Computadoras y Redes, en desarrolló de software, Base de Datos y Sistemas de Información.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-custom-light sm:mt-10">
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Languages Paradigm
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Data Structure
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Databases
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Python - C - C#
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Networks
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Structure and operation of computers
              </li>
            </ul>
          </div>

          <div className={`${styles.gradientBorderRight} rounded-3xl rounded-t-3xl z-10 p-8 bg-gradient-to-br from-custom-dark to-custom-primary sm:mx-8 sm:rounded-b-sm sm:p-10 lg:mx-0 lg:rounded-tl-sm lg:rounded-br-3xl hover:rounded-3xl  ${styles.cardHoverRight}`}>
            <div className="bg-custom-secondary p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 id="tier-hobby" className="text-3xl font-semibold text-custom-light">Licenciatura en Ciencias de la Computación</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-base text-custom-secondary font-semibold">Estudiante de Quinto Año - En proceso</span>
            </p>
            <p className="mt-5 text-base/6 text-custom-light opacity-90 leading-relaxed">Estudiante avanzado en proceso de finalización de la carrera de Licenciatura en Ciencias de la Computación en la Facultad de Ciencias Exactas, Físicas y Naturales de la Universidad Nacional de San Juan.&nbsp;Formación profesional enfocada en la aplicación sistemática de conocimientos científicos y tecnológicos para la resolución de problemas en el ámbito de la computación. Capacitado para diseñar, desarrollar y mantener software, así como evaluar e implementar sistemas ya desarrollados.</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-custom-light sm:mt-10">
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Software engineering
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Cryptography 
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Information theory 
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                IA
              </li>
              <li className="flex gap-x-3">
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-5 w-5 flex-none text-custom-secondary mt-0.5">
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
                Requirements Engineering
              </li>
            </ul>
          </div>
        </div>
      </section>



      {/* CONTACT */}
      <section ref={contact} data-dir="left" id="contact" className="py-20 px-6 md:px-20 text-center min-h-[50vh] flex flex-col justify-between" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <div>
          <h2 className="text-4xl font-bold mb-8">Contacto</h2>
          <p className="mb-6">
            ¿Querés charlar sobre un proyecto o colaborar?  
            Escribime y te respondo lo antes posible.
          </p>
          <div className={styles.wrapper}>
            <a
              href="mailto:joakingaldame@gmail.com"
              className={`${styles.aButtonContact} px-6 py-3 rounded-xl font-semibold transition`}
            >
              <span className={`${styles.aButtonspan2}`}></span>
              <span className={`${styles.aButtonspan2}`}></span>
              <span className={`${styles.aButtonspan2}`}></span>
              <span className={`${styles.aButtonspan2}`}></span>
              Escribime
            </a>
          </div>
        </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full h-full flex flex-row items-end justify-center"
          >
            {/* <button className={`${styles.buttonAboutMe} ${styles.effectWave} px-6 py-4 cursor-pointer rounded-md mt-8`}>Conocerme más</button> */}
            <motion.a
              variants={variantsLeft}
              href="https://github.com/JoaquinGaldame"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 cursor-pointer rounded-md flex items-center justify-center"
            >
              <Icon icon={siGithub} color="#D4D4D4" className="hover:scale-110 transition-transform" />
            </motion.a>

            <motion.a
              variants={variantsRight}
              href="https://www.instagram.com/joagaldame/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 cursor-pointer rounded-md flex items-center justify-center"
            >
              <Icon icon={siInstagram} color="#D4D4D4" className="hover:scale-110 transition-transform" />
            </motion.a>

            <motion.a
              variants={variantsLeft}
              href="https://wa.me/5492645480404"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 cursor-pointer rounded-md flex items-center justify-center"
            >
              <Icon icon={siWhatsapp} color="#D4D4D4" className="hover:scale-110 transition-transform" />
            </motion.a>

            <motion.a
              variants={variantsRight}
              href="https://www.linkedin.com/in/joaquin-galdame"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 cursor-pointer rounded-md flex items-center justify-center"
            >
              <Image src={linkedin} alt="Linkedin" width={40} height={40} className="hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
      </section>

      {/* FOOTER */}
      <footer ref={footer} data-dir="right" className="bg-custom-secondary text-center py-6 text-sm" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        © {new Date().getFullYear()} - Joaquin Galdame
      </footer>
    </div>
  );
}