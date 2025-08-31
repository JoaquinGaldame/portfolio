import Image from "next/image";
import styles from './ui/home.module.css'
export default function Page() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-5xl font-bold text-center mb-8 ">Temas de Colores para Portfolio</h1>
    
        <div className="theme-container bg-gray-200 px-20 py-10 rounded-sm">

          {/* <!-- Tema Negro Elegante --> */}
          <div className="theme bg-white px-8 py-8 rounded-lg shadow-md">
            <div className="color-swatch bg-custom-primary p-2">Principal #1E3A8A</div>
            <div className="color-swatch bg-custom-secondary p-2">Secundario #3B82F6</div>
            <div className="color-swatch bg-custom-accent p-2">Acento #60A5FA</div>
            <div className="color-swatch bg-custom-light p-2">Claro #DBEAFE</div>
            <div className="color-swatch bg-custom-dark p-2 text-white">Oscuro #111827</div>
            <div className="theme-info">
                <h2 className="text-xl font-semibold text-custom-dark pt-2">Negro Elegante</h2>
                <p className="text-custom-dark">Transmite sofisticación, lujo y modernidad. Perfecto para portfolios de diseño o creativos.</p>
            </div>
          </div>

          {/* <!-- Tema Azul Profesional --> */}
          <div className="theme mt-5 bg-white px-8 py-8 rounded-lg shadow-md">
            <div className="color-swatch bg-custom-primary2 p-2">Principal #1E3A8A</div>
            <div className="color-swatch bg-custom-secondary2 p-2">Secundario #3B82F6</div>
            <div className="color-swatch bg-custom-accent2 p-2">Acento #60A5FA</div>
            <div className="color-swatch bg-custom-light2 p-2 text-custom-dark2">Claro #DBEAFE</div>
            <div className="color-swatch bg-custom-dark2 p-2 text-white">Oscuro #111827</div>
            <div className="theme-info">
                <h2 className="text-xl font-semibold text-custom-dark2 pt-2">Azul Profesional</h2>
                <p className="text-custom-dark2">Transmite confianza, estabilidad y profesionalismo. Ideal para portfolios corporativos o técnicos.</p>
            </div>
          </div>
            

          {/* Tema Gris Moderno */}
          <div className="theme mt-5 bg-white px-8 py-8 rounded-lg shadow-md">
            <div className="color-swatch bg-custom-primary3">Principal #1E3A8A</div>
            <div className="color-swatch bg-custom-secondary3 ">Secundario #3B82F6</div>
            <div className="color-swatch bg-custom-accent3">Acento #60A5FA</div>
            <div className="color-swatch bg-custom-light3">Claro #DBEAFE</div>
            <div className="color-swatch bg-custom-dark3 text-white">Oscuro #111827</div>
            <div className="theme-info">
                <h2 className="text-xl font-semibold text-custom-dark3 pt-2">Gris Moderno</h2>
                <p className="text-custom-dark3">Transmite minimalismo, neutralidad y equilibrio. Excelente para portfolios versátiles.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
