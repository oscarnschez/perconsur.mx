// Punto de entrada del Worker: lleva www.perconsur.mx al dominio principal y
// entrega el resto de las solicitudes a los archivos estáticos del sitio.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.perconsur.mx') {
      url.hostname = 'perconsur.mx';
      return Response.redirect(url.href, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
