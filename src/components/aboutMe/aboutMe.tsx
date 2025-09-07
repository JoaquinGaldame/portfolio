import styles from "../../app/ui/home.module.css";
import { forwardRef } from 'react';

const AboutMe = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} data-dir="right"  id="about" className="min-h-screen py-20 px-6 md:px-20 text-center md:text-left sm:text-center" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
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
  );
});

AboutMe.displayName = 'AboutMe';

export default AboutMe;