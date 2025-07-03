/**
 * Footer.jsx
 *
 * Pie de página mejorado con diseño moderno, íconos y enlaces accesibles.
 *
 * Autor: [naldoDev]
 * Fecha: 03/07/2025
 */

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-100 via-white to-amber-50 text-gray-700 py-8 mt-10 border-t shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-4 gap-4">
        {/* Logo y derechos */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <span className="text-3xl md:text-2xl text-amber-500">🐾</span>
          <span className="font-bold text-lg md:text-base">Huellas de Esperanza</span>
          <span className="hidden md:inline text-gray-400 mx-2">|</span>
          <span className="text-xs md:text-sm text-gray-500">© {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>
        {/* Enlaces y redes */}
        <div className="flex flex-col md:flex-row md:space-x-6 items-center text-sm">
          <a href="#" className="flex items-center gap-1 hover:text-amber-600 transition-colors mb-2 md:mb-0" aria-label="Redes sociales">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.28 0-.56-.02-.83-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg>
            Redes sociales
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-amber-600 transition-colors mb-2 md:mb-0" aria-label="Información legal">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z"/></svg>
            Info legal
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-amber-600 transition-colors" aria-label="Contacto">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8V7l-3 2.29V8c0-3.31-2.69-6-6-6S3 4.69 3 8v1l-3-2.29V8c0 5.25 3.67 9.6 8.5 10.74V22h2v-3.26C20.33 17.6 24 13.25 24 8z"/></svg>
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}