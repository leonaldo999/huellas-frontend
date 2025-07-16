# 🐾 Rescate y Adopción de Perritos — Frontend

Este es el repositorio del **frontend** de una aplicación web solidaria que tiene como propósito facilitar la **adopción de perritos en situación de abandono**, conectar con rescatistas, y ofrecer una tienda solidaria para recaudar fondos.  

Está construido con tecnologías modernas y un enfoque centrado en la experiencia del usuario.

---

## 🎯 Objetivo del Proyecto

- Mostrar perritos disponibles para adopción de forma visual y dinámica.
- Ofrecer un panel de administración para publicar, editar o eliminar rescatados y artículos.
- Incluir una tienda donde cada compra apoya a los animales en necesidad.
- Facilitar la navegación con una UI moderna, clara y responsiva.

---

## 🛠️ Tecnologías Usadas

| Categoría          | Herramientas                                                  |
|--------------------|---------------------------------------------------------------|
| **Lenguaje**        | JavaScript (ES6+)                                             |
| **Framework**       | React.js                                                     |
| **Estilos**         | Tailwind CSS                                                 |
| **Routing**         | React Router DOM                                             |
| **Estado Global**   | Context API (para el carrito de compras)                     |
| **Consumo de API**  | Fetch API (integrado con backend propio vía REST)            |
| **Autenticación**   | JWT (desde el backend, usado para rutas protegidas)          |

---

## 📦 Funcionalidades Implementadas

✅ Página de inicio con sección informativa sobre el propósito solidario.  
✅ Vista dinámica de perritos en adopción.  
✅ Modal de detalle de producto (desde la tienda).  
✅ Carrito de compras funcional y persistente con `localStorage`.  
✅ Rutas protegidas para el panel de administración.  
✅ Panel Admin para gestionar publicaciones, perritos y productos.  
✅ Diseño responsive y consistente.  

---

## 📁 Estructura del Proyecto (Frontend)

```bash
/src
│
├── components/        # Componentes reutilizables (Navbar, Footer, Cards, etc.)
├── pages/             # Páginas como Home, Adopciones, Tienda, AdminPanel
├── context/           # CartContext y otros estados globales
├── hooks/             # Hooks personalizados (si aplica)
├── assets/            # Imágenes, íconos, etc.
├── App.jsx            # Enrutamiento principal
└── main.jsx           # Entrada de la aplicación
```

---

## ⚙️ Instalación y Ejecución

```bash
# 1. Clona el repositorio
git clone https://github.com/leonaldo999/frontend-rescate-adopcion

# 2. Accede al proyecto
cd frontend-rescate-adopcion

# 3. Instala dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

---

## 🔒 Rutas Protegidas

El proyecto contiene rutas protegidas que requieren autenticación como administrador (isAdmin). Esto permite gestionar el contenido sensible desde el frontend sin exponerlo públicamente.

---

## 🌱 Estado Actual y Próximas Mejoras

- ✅CRUD completo desde el panel de administración.

- ✅Carrito funcional con integración visual.

- ⬜Implementar feedback visual al adoptar o comprar.

- ⬜Mejorar SEO para adopciones y productos.

- ⬜Subida de imágenes a Cloudinary o Firebase desde el panel.

---

## 📸 Capturas del Proyecto

> <img width="1899" height="924" alt="Captura de pantalla 2025-07-15 194655" src="https://github.com/user-attachments/assets/ab0c126e-bbcf-4e42-bcb6-66d64c94bcb4" />


---

## 🤝 Créditos
Proyecto desarrollado con ❤️ por LeoNaldoDev, como parte de su portafolio profesional y compromiso con causas sociales.

---

## 📬 Contacto

- GitHub: leonaldo999

- LinkedIn: [LinkedIn](www.linkedin.com/in/leonardofigueroalima)

- Portafolio: Tu sitio web

---

## 🐕 Gracias por apoyar esta iniciativa. ¡Juntos podemos salvar muchas vidas!
