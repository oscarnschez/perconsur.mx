# Genera presentacion.html (la presentación corporativa en el sitio) a partir de las diapositivas
# de src/presentacion/slides/, las mismas de la presentación en Claude.
# Uso, desde la raíz del repositorio:  python3 src/presentacion/build.py && python3 <csp.py> presentacion.html
import json, math, re, pathlib

RAIZ = pathlib.Path(__file__).resolve().parents[2]
DIR = pathlib.Path(__file__).resolve().parent
deck = json.loads((DIR / 'deck.json').read_text(encoding='utf-8'))

# imágenes subidas a la presentación de Claude → archivos del sitio
IMG = {
    'bbb90e47c900fdbe0c4130977b610360': 'assets/img/presentacion/camion-puerto.webp',
    'd42e69e48c2027f2ea95e2957b70d03c': 'assets/img/presentacion/camion-tolva.webp',
    'b98d591b920a1b451df36a3fd0c93367': 'assets/img/presentacion/camion-jaula.webp',
    'a3c7d7bdc4d66a4a86ed504ce711d1e2': 'assets/img/presentacion/chasis-20.webp',
    '92b0e7cf5bc65e9d5d2afb6673848d12': 'assets/img/presentacion/chasis-40.webp',
    '8e005f7772bc74c506b26e4a9f898a9d': 'assets/img/presentacion/chasis-4020.webp',
    'bf99d5646d6e47b0bd85766d05e93edd': 'assets/img/presentacion/plataforma.webp',
    '68f7b2f588d392b965f083b950b5aa15': 'assets/img/logo-h-blanco.webp',
    'f7de1d4dced47ce2761d303f03fa5c74': 'assets/img/logo-h.webp',
}

# íconos de línea (24×24) en lugar de los <x-icon> de la presentación
ICONOS = {
    'Home': '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
    'PaperPlane': '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/>',
    'Clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    'Link': '<path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"/>',
    'Key': '<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.7 12.3 21 2"/><path d="m16 7 3 3"/><path d="m18.5 4.5 2 2"/>',
    'Wrench': '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
    'Trust': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    'Users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'Globe': '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    'Verified': '<circle cx="12" cy="9" r="6"/><path d="m9.5 9 1.8 1.8 3.2-3.3"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/>',
    'CheckCircle': '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
}

def icono(m):
    nombre, estilo = m.group(1), m.group(2)
    return ('<svg class="ico" style="%s" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
            'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">%s</svg>') % (estilo, ICONOS[nombre])

# carretera animada de la portada y del cierre (sólo CSS)
def carretera(estilo):
    return ('<div class="cr" style="%s" aria-hidden="true"><div class="cr-cielo"></div>'
            '<div class="cr-poste"></div><div class="cr-poste" style="animation-delay:-.73s"></div><div class="cr-poste" style="animation-delay:-1.46s"></div>'
            '<div class="cr-via"></div><div class="cr-borde"></div><div class="cr-borde2"></div><div class="cr-linea"></div>'
            '<div class="cr-viento" style="top:150px;width:420px;animation-delay:-.2s"></div>'
            '<div class="cr-viento" style="top:190px;width:260px;animation-delay:-.9s"></div>'
            '<div class="cr-viento" style="top:280px;width:520px;animation-delay:-.5s"></div>'
            '<div class="cr-viento" style="top:62px;width:300px;animation-delay:-1.1s;opacity:.6"></div></div>') % estilo

# mapa de rutas desde Manzanillo: mismas coordenadas que la presentación, calculado aquí (sin scripts)
def mapa(estilo):
    O = (354, 659)
    D = [('Guadalajara', 432, 537, 'e', -30, 8), ('Zacatecas', 494, 379, 'e', -16, 8), ('Aguascalientes', 516, 446, 'e', -16, 8),
         ('León', 566, 503, 's', 14, 30), ('Querétaro', 669, 543, 's', 14, 30), ('San Luis Potosí', 622, 425, 's', 16, 8),
         ('Toluca', 727, 641, 'e', -14, 34), ('Valle de México', 776, 617, 's', 14, -16), ('Puebla', 844, 659, 's', 14, 30),
         ('Saltillo', 620, 179, 'e', -16, 8), ('Monterrey', 675, 160, 's', 12, -14), ('Reynosa', 838, 129, 's', 16, 8)]
    C = [('Culiacán', 109, 226, 18, 8), (None, 566, 503), (None, 432, 537)]
    rutas, puntos, textos = [], [], []
    for i, (nom, x, y, anc, ox, oy) in enumerate(D):
        mx, my, dx, dy = (O[0] + x) / 2, (O[1] + y) / 2, x - O[0], y - O[1]
        cx, cy = mx + dy * .18, my - dx * .18
        pts = [((1 - t) ** 2 * O[0] + 2 * (1 - t) * t * cx + t * t * x, (1 - t) ** 2 * O[1] + 2 * (1 - t) * t * cy + t * t * y) for t in [k / 200 for k in range(201)]]
        L = sum(math.dist(pts[k], pts[k + 1]) for k in range(200))
        t = .3 + i * .22
        rutas.append('<path id="mp-r%d" class="mp-ruta" d="M%d %d Q%.1f %.1f %d %d" style="stroke-dasharray:%.1f;stroke-dashoffset:%.1f;animation-delay:%.2fs"/>' % (i, O[0], O[1], cx, cy, x, y, L, L, t))
        puntos.append('<circle class="mp-punto" cx="%d" cy="%d" r="8" style="transform-origin:%dpx %dpx;animation-delay:%.2fs"/>' % (x, y, x, y, t + 1.2))
        puntos.append('<circle class="mp-viaja" r="5" style="animation-delay:%.2fs"><animateMotion dur="%.1fs" repeatCount="indefinite"><mpath href="#mp-r%d"/></animateMotion></circle>' % (t + 1.6, 2.6 + i % 4 * .4, i))
        textos.append('<text class="mp-et" x="%d" y="%d" text-anchor="%s" style="animation-delay:%.2fs">%s</text>' % (x + ox, y + oy, 'end' if anc == 'e' else 'start', t + 1.3, nom))
    for i, c in enumerate(C):
        d = 3.4 + i * .25
        puntos.append('<circle class="mp-campo" cx="%d" cy="%d" r="17" style="animation-delay:%.2fs,%.2fs"/>' % (c[1], c[2], d, d))
        if c[0]:
            puntos.append('<circle class="mp-punto mp-verde" cx="%d" cy="%d" r="8" style="transform-origin:%dpx %dpx;animation-delay:3.4s"/>' % (c[1], c[2], c[1], c[2]))
            textos.append('<text class="mp-et" x="%d" y="%d" style="animation-delay:3.5s">%s</text>' % (c[1] + c[3], c[2] + c[4], c[0]))
    return ('<svg class="mp" style="%s" viewBox="0 0 1000 760" role="img" aria-label="Mapa esquemático de rutas desde Manzanillo hacia Guadalajara, el Bajío, el centro y el norte del país, y plantas de la División Campo en Guanajuato, Jalisco y Sinaloa">'
            '<defs><pattern id="mp-pt" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#2E4378"/></pattern>'
            '<radialGradient id="mp-hl"><stop offset="0" stop-color="#F7A23A" stop-opacity=".55"/><stop offset="1" stop-color="#F7A23A" stop-opacity="0"/></radialGradient></defs>'
            '<rect width="1000" height="760" fill="url(#mp-pt)"/>%s%s%s'
            '<circle cx="354" cy="659" r="70" fill="url(#mp-hl)"/><circle class="mp-pulso" cx="354" cy="659" r="16"/>'
            '<circle class="mp-pulso" cx="354" cy="659" r="16" style="animation-delay:1.2s"/>'
            '<circle cx="354" cy="659" r="13" fill="#F7A23A" stroke="#0F1D45" stroke-width="4"/>'
            '<text x="354" y="712" text-anchor="middle" fill="#F7A23A" font-size="28" font-weight="700">Manzanillo</text></svg>'
            ) % (estilo, ''.join(rutas), ''.join(puntos), ''.join(textos))

def embed(m):
    estilo, cuerpo = m.group(1), m.group(2)
    if 'class="via"' in cuerpo: return carretera(estilo)
    if 'id="m"' in cuerpo: return mapa(estilo)
    raise SystemExit('x-embed desconocido')

def diapositiva(n, sid):
    s = (DIR / 'slides' / f'{sid}.html').read_text(encoding='utf-8')
    s = re.sub(r'\s*<aside>.*?</aside>', '', s, flags=re.S)                       # notas del orador
    s = re.sub(r'/_blob/([0-9a-f]{32})', lambda m: IMG[m.group(1)], s)
    s = re.sub(r'<x-embed style="([^"]*)">(.*?)</x-embed>', embed, s, flags=re.S)
    s = re.sub(r'<x-icon name="(\w+)" style="([^"]*)"></x-icon>', icono, s)
    s = re.sub(r'<img id="([\w-]+)"', r'<img data-magic="\1"', s)                   # "magic move" entre diapositivas
    s = re.sub(r'<img ([^>]*?)>', lambda m: '<img ' + m.group(1) + ' decoding="async"' + ('' if n < 2 else ' loading="lazy"') + '>', s)
    s = s.replace('<section id="%s"' % sid, '<section class="slide" id="d-%s" role="group" aria-roledescription="diapositiva" aria-label="%d de %d"' % (sid, n + 1, len(deck['order'])), 1)
    return s

slides = '\n'.join(diapositiva(n, sid) for n, sid in enumerate(deck['order']))
plantilla = (DIR / 'plantilla.html').read_text(encoding='utf-8')
(RAIZ / 'presentacion.html').write_text(plantilla.replace('<!--DIAPOSITIVAS-->', slides), encoding='utf-8')
print('presentacion.html', len(deck['order']), 'diapositivas')
