"use client";
import Image from "next/image";
import logo from "../asset/logos/logoJG.svg";
import styles from './ui/home.module.css'
import { useEffect, useRef } from "react";
import { animate, createDraggable, createScope, createSpring, eases, onScroll, stagger, svg, utils, waapi} from "animejs";

export default function Home() {
  const headerRef = useRef(null);
  const hero = useRef(null);
  const aboutme = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const footer = useRef(null);

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


    animate(['feTurbulence', 'feDisplacementMap'], {
      baseFrequency: .05,
      scale: 15,
      alternate: true,
      loop: true
    });
    animate('polygon', {
      points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
      alternate: true,
      loop: true
    });
    animate(svg.createDrawable('.line'), {
      draw: ['0 0', '0 1', '1 1'],
      ease: 'inOutQuad',
      duration: 2000,
      delay: stagger(100),
      loop: true
    });

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
      { threshold: 0.2 }
    );

    [headerRef.current, hero.current,aboutme.current, projects.current, contact.current, footer.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="font-sans bg-custom-dark text-custom-light w-full scroll-container">
      {/* HEADER */}
      <header  ref={headerRef} data-dir="left"  className="header bg-custom-secondary fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 shadow-md z-50" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">Joaquin Galdame</span>
        </div>
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#about" className="hover:text-custom-accent transition">Sobre mí</a>
          <a href="#projects" className="hover:text-custom-accent transition">Proyectos</a>
          <a href="#contact" className="hover:text-custom-accent transition">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section ref={hero} data-dir="right" className={`min-h-screen flex-col justify-center items-center text-center px-6 pt-10 large centered grid square-grid array-container`} style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 flex flex-col items-center">
            <Image src={logo} alt="Logo JG" width={300} height={250}  className="square draggable"/>
            <div className="titulo flex flex-row">
              ¡Hola! Soy <span className="text-custom-accent ml-2">Joaquin</span>
            </div>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Desarrollador Full Stack con pasión por crear experiencias digitales modernas, 
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
              Ver proyectos
            </a>
          </div>
        </div>
        
      </section>


      {/* ABOUT */}
      <section ref={aboutme} data-dir="left" id="about" className="min-h-screen py-20 px-6 md:px-20 text-center md:text-left" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <div className="flex flex-row items-center">
          <h2 className="text-4xl font-bold mb-8">Sobre mí</h2>
          <div className="large centered row">
            <svg width="40" height="40" viewBox="0 0 128 128">
              <filter id="displacementFilter">
                <feTurbulence type="turbulence" numOctaves="2" baseFrequency="0" result="turbulence"/>
                <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="1" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
              <polygon points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96"  fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div>
          <button className={`${styles.buttonAboutMe} ${styles.effectWave} px-6 py-4 cursor-pointer rounded-md`}>Conocerme más</button>
        </div>

        <p className="max-w-3xl leading-relaxed">
          Soy un desarrollador orientado a resultados con experiencia en React, Next.js, Node.js y PostgreSQL.
          Me encanta transformar ideas en soluciones digitales escalables, con especial atención al detalle
          y la experiencia del usuario.
        </p>

      </section>

      {/* PROJECTS */}
      <section ref={projects} data-dir="right" id="projects" className="min-h-screen py-20 px-6 md:px-20 bg-custom-secondary text-custom-light rounded-md" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🚧 Ejemplo de Card de Proyecto */}
          <div className="bg-custom-dark rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Proyecto 1</h3>
            <p className="text-sm text-custom-light mb-4">
              Breve descripción del proyecto. Qué tecnologías usaste, qué problema resolviste.
            </p>
            <a href="#" className="text-custom-accent hover:underline">
              Ver más →
            </a>
          </div>
          <div className="bg-custom-dark rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Proyecto 2</h3>
            <p className="text-sm text-custom-light mb-4">
              Otro proyecto destacado con enfoque en performance y experiencia.
            </p>
            <a href="#" className="text-custom-accent hover:underline">
              Ver más →
            </a>
          </div>
          <div className="bg-custom-dark rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition hover:shadow-2xl 
          ">
            <h3 className="text-2xl font-semibold mb-2">Proyecto 3</h3>
            <p className="text-sm text-custom-light mb-4">
              Un proyecto personal innovador para mostrar creatividad y skills.
            </p>
            <a href="#" className="text-custom-accent hover:underline">
              Ver más →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contact} data-dir="left" id="contact" className="py-20 px-6 md:px-20 text-center min-h-[50vh]" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        <h2 className="text-4xl font-bold mb-8">Contacto</h2>
        <p className="mb-6">
          ¿Querés charlar sobre un proyecto o colaborar?  
          Escribime y te respondo lo antes posible.
        </p>
        <div className={styles.wrapper}>
          <a
            href="mailto:joaquin@example.com"
            className={`${styles.aButtonContact} px-6 py-3 rounded-xl font-semibold transition`}
          >
            <span className={`${styles.aButtonspan2}`}></span>
            <span className={`${styles.aButtonspan2}`}></span>
            <span className={`${styles.aButtonspan2}`}></span>
            <span className={`${styles.aButtonspan2}`}></span>
            Escribime
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer ref={footer} data-dir="right" className="bg-custom-secondary text-center py-6 text-sm" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
        © {new Date().getFullYear()} Joaquin Galdame — Todos los derechos reservados
      </footer>
    </div>
  );
}