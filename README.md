# perconsur.mx

Sitio web de PERCONSUR: transporte de contenedores por carretera desde el puerto de Manzanillo, Colima.

Es un sitio estático de una sola página (`index.html`) con navegación por hash (`#inicio`, `#nosotros`, `#servicios`, `#flota`, `#clientes`, `#contacto`). No requiere compilación: se publica tal cual en cualquier hosting estático (GitHub Pages, Netlify, Cloudflare Pages, un servidor Apache/Nginx).

## Estructura

```
index.html                      Página completa: HTML, CSS y JS en línea
assets/img/logo.webp            Logotipo (129×133, 3× del tamaño en pantalla)
assets/img/logo-inv.webp        Logotipo para fondos azules u oscuros
assets/img/favicon.png          Favicon 64×64
assets/img/apple-touch-icon.png Ícono para iOS 180×180
assets/img/cliente-*.webp       Logotipos de clientes (2× del tamaño en pantalla)
assets/fonts/                   Space Grotesk (variable 300–700, subconjunto latino) y su licencia OFL
```

## Diseño

- Paleta de marca: azul `#354FA3`, naranja `#F26F22`, papel `#F4F5F4`, asfalto `#1B1B1B`. Todos los colores son tokens en `:root`.
- Tipografía: Space Grotesk. Títulos en mayúsculas con contraste de peso 300/700.
- Contraste revisado según WCAG AA: texto secundario `#686B70` (4.9:1 sobre papel) y foco visible en azul oscuro o blanco según el fondo.

## Movimiento

- **Carga y cambio de página:** las palabras de los títulos suben desde una máscara; el tractocamión entra a cuadro, las ruedas giran según la distancia recorrida y la carrocería se asienta al frenar.
- **Ligado al scroll:** el tractocamión recorre la carretera, el contenedor baja por la pista, el buque entra a puerto, la línea de tiempo se dibuja y los bloques aparecen al entrar en pantalla. Se usa CSS `animation-timeline` (scroll-driven animations), que corre en el compositor. En navegadores sin soporte, un respaldo en JS mueve el tractocamión, el contenedor y las marcas de agua con medidas en caché, sin leer el layout durante el scroll.
- **`prefers-reduced-motion`:** todo se muestra en su estado final, sin desplazamientos.

## Desempeño

Medido en Chromium con la CPU 4 veces más lenta:

| | Antes | Ahora |
|---|---|---|
| Bytes transferidos en la portada | 280 KB | 137 KB |
| First/Largest Contentful Paint (escritorio) | 540 ms | 268 ms |
| First/Largest Contentful Paint (móvil) | 540 ms | 208 ms |
| Cumulative Layout Shift | 0.005 | 0 |

Las principales razones:

- Las imágenes salieron del HTML (antes ~150 KB en base64) y se redimensionaron al tamaño real de pantalla. Los logotipos de clientes cargan en diferido.
- La fuente se sirve desde el propio sitio, con `preload`, y con una fuente de respaldo ajustada a sus métricas (`size-adjust`, `ascent-override`) para que el texto no salte al cargar.
- El JS ya no mide el layout en cada frame de scroll.

## Formulario de contacto

El formulario valida nombre y correo, y arma un correo para `logistica@perconsur.mx` (`mailto:`). Como no todos los equipos tienen un programa de correo configurado, también muestra la solicitud completa con un botón para copiarla.
