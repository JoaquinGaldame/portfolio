"use client";
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ListData } from './projects.interface';
import { createPortal } from "react-dom";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  text2?: string | null;
  isHaveList: boolean;
  lists?: ListData[];
  images: StaticImageData[];
  technologies?: string[];
}

export default function ProjectModal({ 
  isOpen, 
  onClose, 
  title, 
  text,
  text2,
  isHaveList,
  lists,
  images, 
  technologies = [] 
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Cerrar modal con la tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Auto-rotar imágenes cada 5 segundos si hay más de una
  useEffect(() => {
    if (images.length <= 1 || !isOpen) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length, isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-custom-dark border border-custom-accent/30 rounded-xl shadow-2xl max-w-4xl w-full max-h-full overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con título y botón cerrar */}
        <div className="flex justify-between items-start p-6 pb-4 border-b border-custom-accent/20">
          <h2 className="text-2xl font-bold text-white pr-4">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-[var(--light)]  transition-colors duration-200 rounded-full p-1 hover:text-[#03E9F4]/60 cursor-pointer"
            aria-label="Cerrar modal"
          >
            <svg viewBox="0 0 24 24" fill="current" stroke="currentColor" strokeWidth="2" className="size-6">
              <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Contenido con scroll */}
        <div className="overflow-y-auto flex-1">
          {/* Carrusel */}
          <div className="relative bg-custom-primary/50 mx-6 mt-6 rounded-lg overflow-hidden">
            <div className="aspect-video relative flex items-center justify-center">
              <Image
                src={images[currentImageIndex]}
                alt={`${title} - Imagen ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {images.length > 1 && (
              <>
                {/* Botón anterior */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                  aria-label="Imagen anterior"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Botón siguiente */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                  aria-label="Siguiente imagen"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            )}

            {/* Contador de imágenes */}
            {images.length > 1 && (
              <div className="absolute top-3 right-3 bg-black/70 text-custom-light text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Indicadores */}
          {images.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2 px-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? "bg-white scale-125" 
                      : "bg-custom-accent/60 hover:bg-custom-accent"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Descripción del proyecto */}
          <div className="px-6 pb-0 pt-4 text-justify">
            <p className="text-custom-light leading-relaxed">{text}</p>
          </div>
          { text2 && (
            <div className="p-6 pt-1 text-justify">
              <p className="text-custom-light leading-relaxed">{text2}</p>
            </div>
          )}

          {isHaveList && lists.length > 0 && (
            <div className="px-6 pb-1 pt-1 text-justify">
              {lists.map((list, idx) => (
                <div key={idx} className="mb-3">
                  {/* título de la lista */}
                  {list.titleList && (
                    <h4 className="font-bold text-custom-light text-lg mb-2">{list.titleList}</h4>
                  )}

                  <ul className="list-disc list-inside space-y-1">
                    {list.textList.map((item, i) => (
                      <li key={i}>
                        <strong>{item.itemtitle}</strong>&ensp;{item.itemText}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}


          {/* Tecnologías utilizadas */}
          {technologies.length > 0 && (
            <div className="px-6 pb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Tecnologías utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-[var(--secondary)]/10 text-custom-light px-3 py-1.5 rounded-md text-sm border border-[var(--accent)]/20 hover:bg-[#03E9F4]/30 hover:border-[#03E9F4]/60 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body 
  );
}