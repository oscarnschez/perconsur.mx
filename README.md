# perconsur.mx

Sitio web de PERCONSUR: una sola página estática (`index.html`) con sus recursos en `assets/`.

## Versiones

El pie de página muestra la versión del sitio y la fecha de su última actualización
(`<p class="pie-version">` en `index.html`). Con cada cambio publicado se actualizan ambas:

- **Parche** (1.0.**x**): correcciones de texto, color o estilo.
- **Menor** (1.**x**.0): contenido o funciones nuevas (una sección, clientes, una animación).
- **Mayor** (**x**.0.0): rediseño o reestructura del sitio.

La fecha va en formato legible y en el atributo `datetime` (`AAAA-MM-DD`).

## Publicación en Cloudflare

El sitio se publica como Worker (`wrangler.jsonc`): los archivos estáticos de la raíz más `src/index.js`, que sólo
redirige `www.perconsur.mx` a `perconsur.mx`.

| Archivo | Para qué sirve |
| --- | --- |
| `wrangler.jsonc` | Nombre del proyecto (`perconsur`) y carpeta publicada (la raíz). |
| `.assetsignore` | Deja fuera del sitio lo que no es público (README, configuración, `.git`). |
| `_headers` | Encabezados de seguridad y caché. La CSP con los hashes de los scripts sigue en la `<meta>` de `index.html`. |
| `_redirects` | Rutas limpias (`/contacto`, `/flota`…) hacia las secciones con `#`. |
| `404.html` | Página para direcciones que no existen. |
| `src/index.js` | Redirige `www` al dominio principal; lo demás lo sirven los archivos estáticos. |

### Conectar el repositorio (una sola vez)

1. En el panel de Cloudflare: **Workers & Pages → Create → Import a repository**, elige
   `oscarnschez/perconsur.mx`, rama `main`. Cloudflare lee `wrangler.jsonc`; el comando de build va vacío y
   el de despliegue es `npx wrangler deploy`.
2. Cada merge a `main` publica el sitio automáticamente.
3. Los dominios `perconsur.mx` y `www.perconsur.mx` ya están asignados al Worker
   (**perconsur → Settings → Domains & Routes**); la redirección de `www` la hace `src/index.js`.

Para probar en local: `npx wrangler dev` (http://localhost:8787).

### Mover el dominio desde Squarespace (resumen)

1. Respaldar **todos** los registros DNS de Squarespace, sobre todo los del correo: MX, SPF (TXT `v=spf1`),
   DKIM (`*._domainkey`) y DMARC (`_dmarc`). Desactivar DNSSEC si está activo.
2. Agregar `perconsur.mx` en Cloudflare (plan Free) y comprobar que estén todos esos registros.
3. Cambiar en Squarespace los nameservers por los dos de Cloudflare y esperar a que el dominio quede activo.
   Probar el correo (enviar y recibir).
4. Opcional: transferir el registro del dominio a Cloudflare con el código de autorización de Squarespace.
   Después, activar DNSSEC desde Cloudflare.
