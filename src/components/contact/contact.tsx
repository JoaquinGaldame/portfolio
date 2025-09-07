import styles from "../../app/ui/home.module.css";
import { forwardRef } from 'react';
import { container, variantsLeft, variantsRight } from "../skills";
import { motion } from "framer-motion";
import { siGithub, siInstagram, siWhatsapp  } from "simple-icons/icons";
import Icon from "../icon";
import linkedin from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} data-dir="left" id="contact" className="py-20 px-6 md:px-20 text-center min-h-[50vh] flex flex-col justify-between" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
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
              <Image  src="/linkedin-icon.svg"  alt="Linkedin" width={40} height={40} className="hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
      </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;