import styles from "../../app/ui/home.module.css";
import { forwardRef } from 'react';

const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} data-dir="right" className={`min-h-screen flex-col justify-center items-center text-center px-6 pt-10 large centered grid square-grid array-container`} style={{ opacity: 0, transform: 'translateX(-200px)' }}>
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
  );
});

Hero.displayName = 'Hero';

export default Hero;