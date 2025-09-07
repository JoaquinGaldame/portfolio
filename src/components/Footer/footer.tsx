import { forwardRef } from 'react';

const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} data-dir="right" className="bg-custom-secondary text-center py-6 text-sm" style={{ opacity: 0, transform: 'translateX(-200px)' }}>
      © {new Date().getFullYear()} - Joaquin Galdame
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;