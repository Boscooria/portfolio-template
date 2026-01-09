# PLAN DE DESARROLLO

## 1. Creación del repositorio

En primer lugar, creé el repositorio en GitHub siguiendo la estructura y los archivos solicitados por el profesor. El objetivo fue partir de una base ordenada y profesional, similar a la de un proyecto real de desarrollo web.

portfolio-template/
├── index.html
├── 404.html
├── README.md
├── LICENSE
├── .gitignore
├── docs/                  # Documentación y planes
│   └── plan.md            # Plan de desarrollo con agentes de IA (si se usan)
├── assets/
│   ├── css/
│   │   ├── index.css        # archivo “barrel”: centraliza todos los imports de CSS
│   │   ├── base.css         # reset, variables, estilos de raíz
│   │   ├── layout.css       # utilidades de layout/grid/flex
│   │   ├── components.css   # estilos compartidos de componentes (botones, cards, etc.)
│   │   └── [otros].css      # añade según necesidad
│   ├── js/
│   │   └── main.js
│   ├── images/              # idealmente CDN; si son locales, optimizadas y ligeras
│   └── fonts/               # si usas tipografías personalizadas (se prefieren las de sistema)
└── [configuración de build si aplica]


---

## 2. Definición de las páginas HTML

Una vez definida la estructura del proyecto, creé los archivos HTML que iba a utilizar, separando cada sección en un documento independiente para mejorar la organización, la claridad del código y la escalabilidad del proyecto.

- `404.html` (obligatorio)  
- `index.html` (obligatorio)  
- `home.html`  
- `dazed.html` (plantilla de proyecto)  
- `about.html`  
- `contact.html`  

Esta decisión permite trabajar cada sección de forma aislada y facilita futuras ampliaciones o modificaciones sin afectar al resto del sitio.

---

## 3. Definición de identidad visual

Con la estructura y las páginas definidas, establecí la identidad visual del proyecto. Para ello, definí previamente:

- Paleta de colores  
- Estilo visual general  
- Tipografía y jerarquía de textos  

He utilizado una línea gráfica coherente con los colores y el estilo que suelo emplear en mis proyectos personales, con el objetivo de que la plantilla refleje mi identidad como diseñador y mantenga consistencia visual en todo el sitio.

---

## 4. Uso de Inteligencia Artificial

Me apoyé en IA (Gemini) para estructurar y planificar el proyecto desde el inicio. En concreto, la IA me ayudó a:

- Dividir el trabajo en fases  
- Ordenar los apartados de la web  
- Definir una arquitectura básica (secciones, jerarquía de contenidos y flujo de navegación)  

Además, la IA me permitió generar una base inicial de contenido y organización, así como una primera aproximación a textos, que posteriormente fueron revisados y adaptados.

A partir de esa base, el desarrollo final se ha realizado integrando lo aprendido en clase y recursos de trabajos anteriores, aplicando buenas prácticas ya utilizadas en proyectos previos. La IA ha funcionado como una herramienta de apoyo en la fase de arranque, mientras que las decisiones finales y la implementación se han construido con criterio propio.

---

## 5. Desarrollo y refinado

Una vez establecida la base del proyecto, continué con el desarrollo progresivo de cada página, refinando de forma iterativa:

- La estructura HTML  
- Los estilos CSS  
- La coherencia visual entre secciones  
- La experiencia de usuario y la navegación  

Este proceso ha permitido obtener una plantilla funcional, coherente y preparada para ser reutilizada y ampliada en futuros proyectos.
X