import { siJavascript, siPython, siAngular, siDotnet, siReact, siBootstrap, siTailwindcss, siCss, siVuedotjs, siPostgresql, siMysql, siNpm, siNodedotjs, siPm2, siTypescript, siRedux, siGit, siJsonwebtokens, siDrizzle, siGraphql, siReactquery, siUbuntu, siAlmalinux, siLinuxserver, siLinux, siBitbucket } from "simple-icons/icons";
import { motion, Variants } from "framer-motion";
import Icon from "./icon";

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const variantsLeft: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.25, 0.1, 0.25, 1], // equivalente a "easeOut"
      duration: 0.6,
    },
  },
};

export const variantsRight: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.25, 0.1, 0.25, 1], // equivalente a "easeOut"
      duration: 0.6,
    },
  },
};


export default function Skills() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 mt-10 w-full"
    >
      {[siJavascript, siPython, siAngular, siReact, siNodedotjs, siTypescript, siDotnet, siTailwindcss, siCss, siBootstrap, siPm2, siReactquery ].map((icon, i) => (
        <motion.div key={`left-${i}`} variants={variantsLeft}>
          { icon === siAngular ? (
            <Icon icon={icon} color="#DD0031"  className="hover:scale-110 transition-transform cursor-help" />
          ): i > 7 ? (
            <Icon icon={icon} className="hover:scale-110 transition-transform hidden md:block cursor-help" />
          ): (
            <Icon icon={icon} className="hover:scale-110 transition-transform cursor-help" />
          )}
          
        </motion.div>
      ))}
      {[siPostgresql, siMysql, siNpm, siVuedotjs, siDrizzle, siRedux, siGit, siJsonwebtokens, siGraphql, siLinux, siLinuxserver, siUbuntu].map((icon, i) => (
        <motion.div key={`right-${i}`} variants={variantsRight}>
          <Icon icon={icon} className="hover:scale-110 transition-transform hidden md:block cursor-help" />
        </motion.div>
      ))}
    </motion.div>
  );
}