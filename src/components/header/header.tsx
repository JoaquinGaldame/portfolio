import styles from "../../app/ui/home.module.css";
import { forwardRef } from 'react';

const Header = forwardRef<HTMLElement>((props, ref) => {
  return (
    <header 
      ref={ref}
      data-dir="left" 
      className="bg-custom-secondary fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 shadow-lg z-50" 
      style={{ opacity: 0, transform: 'translateX(-200px)' }}
    >
      <div className="flex items-center text-center gap-4 justify-center w-full sm:w-1/3 sm:justify-start">
        <span className="text-2xl font-bold text-shadow-md">Joaquin Galdame</span>
      </div>
      <nav className="hidden md:flex gap-8 text-lg font-bold">
        <a href="#about" className="hover:text-[var(--primary)] transition">Sobre mí</a>
        <a href="#projects" className="hover:text-[var(--primary)] transition">Experiencia</a>
        <a href="#contact" className="hover:text-[var(--primary)] transition">Contacto</a>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;