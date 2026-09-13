# Herramientas Big Data: Open Source vs. Comercial — Blog académico

Blog académico digital sobre las herramientas Big Data de tipo Open Source y comerciales que existen en el mercado, desarrollado como actividad individual para "R1-A3-S4 — Blog Académico – Herramientas Big Data de tipo Open Source o comerciales" (CADI: Big Data - CAD2092023101), con formato de artículo de revista tecnológica.

## Objetivo

Analizar, con una postura argumentativa propia, qué factores deberían determinar la elección entre una herramienta Big Data Open Source y una solución comercial dentro de una arquitectura de datos: no la gratuidad frente al pago, sino la capacidad de integración, los requerimientos técnicos, la escalabilidad, la confiabilidad y el costo total de operación.

## Tecnologías

- HTML5 semántico
- CSS3 (variables, Grid, Flexbox, media queries)
- JavaScript vanilla (sin frameworks ni dependencias de build)
- SVG inline propio para iconografía y diagramas (sin librerías externas de iconos)
- Google Fonts (Fraunces + Inter)

No requiere backend, base de datos ni proceso de compilación.

## Estructura del proyecto

```text
Blog_Herramientas_Big_Data/
│
├── index.html          # Estructura y contenido del artículo
├── css/
│   └── styles.css       # Presentación: variables, layout, componentes, responsive
├── js/
│   └── script.js         # Comportamiento: menú móvil, scroll spy, progreso, animaciones
├── assets/
│   ├── images/          # Reservada para imágenes adicionales futuras (vacía por defecto)
│   │
│   ├── logosInstitucionales/       # Logos institucionales
│   │
│   └── icons/            # Reservada para iconos adicionales (los iconos base están inline en index.html)
└── README.md
```

Todos los iconos y diagramas del artículo son SVG propios, incluidos directamente en `index.html` (sprite de símbolos), para que el sitio funcione sin conexión a internet salvo por la carga de Google Fonts.

Este proyecto es una nueva entrega académica independiente, construida reutilizando la arquitectura (estructura de archivos, sistema de componentes, animaciones y responsive) de un blog anterior; el contenido, las herramientas analizadas y la identidad visual (paleta verde/lima) son enteramente propios de esta actividad.

## Cómo ejecutarlo localmente

No requiere instalación. Basta con abrir el archivo en un navegador:

1. Descarga o clona el proyecto.
2. Abre `index.html` haciendo doble clic, o desde Visual Studio Code con la extensión "Live Server" para recarga automática.

## Fuentes

Las referencias bibliográficas (formato APA 7.ª edición) están al final del artículo, en la sección "Referencias". Se priorizó documentación oficial de cada proyecto/proveedor (Apache Spark, Kafka, Airflow, NiFi, Hadoop, Databricks, Snowflake, Google Cloud, AWS) y literatura académica sobre arquitecturas de datos (NIST, Armbrust et al.).
