"use client";
import { useEffect, useRef } from "react";
import { animate, createDraggable, createScope, createSpring, eases, onScroll, stagger, svg, utils, waapi} from "animejs";
import Header from "pages/components/header/header";
import Hero from "pages/components/hero/hero";
import Projects from "pages/components/projects/Projects";
import AboutMe from "pages/components/aboutMe/aboutMe";
import Contact from "pages/components/contact/contact";
import Footer from 'pages/components/Footer/footer';


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
      <Header ref={headerRef} />
      <Hero ref={hero} />
      <Projects ref={projects} />
      <AboutMe ref={aboutme} />
      <Contact ref={contact} />
      <Footer ref={footer} />
    </div>
  );
}