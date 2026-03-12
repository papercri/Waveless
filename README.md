
# Waveless - Plataforma de Aventuras

## Demo en Vivo
Puedes ver la versión desplegada aquí: [https://waveless-kappa.vercel.app/](https://waveless-kappa.vercel.app/)

## Descripción del Proyecto
Waveless es una plataforma web para descubrir y reservar experiencias de aventura en todo el mundo. El objetivo es ofrecer una interfaz moderna, accesible y optimizada para buscadores, cumpliendo con estándares SEO y WCAG.

## Decisiones Técnicas
- **Framework principal:** React (v19) para una UI dinámica y modular.
- **Build tool:** Vite, por su rapidez en desarrollo y build.
- **Estilos:** Tailwind CSS, para una gestión eficiente y escalable de estilos.
- **Iconografía:** Lucide-react y react-icons para iconos accesibles y personalizables.
- **Metodología:** Estructura por atomic design (atoms, molecules, organisms, templates, pages) para facilitar la reutilización y el mantenimiento.
- **Accesibilidad:** Se han aplicado roles ARIA, landmarks, y etiquetas semánticas en todos los componentes clave.
- **SEO:** Meta tags, heading principal h1, y estructura semántica en index.html y componentes.

## Instalación y Visualización en Local
1. **Clona el repositorio:**
	```bash
	git clone https://github.com/papercri/Waveless.git
	cd prueba-DUX
	```
2. **Instala dependencias:**
	```bash
	npm install
	```
3. **Inicia el servidor de desarrollo:**
	```bash
	npm run dev
	```
4. **Visualiza el proyecto:**
	Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Instalación desde archivo ZIP 
1. Abre el archivo ZIP.
2. Extrae el contenido en una carpeta local.
3. Abre la carpeta en VS Code o tu editor favorito.
4. Abre la terminal en esa carpeta y ejecuta:
	```bash
	npm install
	npm run dev
	```
5. Visualiza el proyecto en [http://localhost:5173](http://localhost:5173).


## Comentarios Importantes
- El proyecto está optimizado para accesibilidad y SEO, sin sacrificar diseño ni funcionalidad.
- La estructura modular facilita la extensión y el mantenimiento.
- Se recomienda revisar el código fuente para ver la aplicación de WCAG y ARIA.
- El diseño es responsive y funciona en dispositivos móviles y desktop.

---

