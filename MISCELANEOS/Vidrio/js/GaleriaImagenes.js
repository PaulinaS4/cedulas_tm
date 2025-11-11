/**
 * Clase para cargar imágenes dinámicamente dentro de contenedores según cantidad.
 * @author Jonatan Lara
 * @see https://github.com/jonatanLara
 * @version 2.0
 * @file updateimage.js
 */
class GaleriaImagenes {

  /**
   * Crea una instancia del cargador.
   * @param {string} rutaBase - Ruta base donde se encuentran las imágenes (ej: "fotos/").
   */
  constructor(rutaBase) {
    this.rutaBase = rutaBase;
  }

  /**
   * Carga imágenes dentro de un contenedor según cantidad y ajusta estilos.
   *
   * @param {string} listaNombres - String con nombres separados por coma.
   *   Ej: "img1, img2, img3"
   * @param {string} idContenedor - ID del contenedor donde se insertarán las imágenes.
   */
  cargar(listaNombres, idContenedor) {
    const str = listaNombres.trim();
    if (!str) return;

    const imagenes = str.split(',').map(s => s.trim());
    const contenedor = document.getElementById(idContenedor);
    const cantidad = imagenes.length;

    // Ajustes de distribución según cantidad
    if (cantidad < 3) {
      contenedor.style.flexWrap = "nowrap";
      contenedor.style.justifyContent = "center";
    } else if (cantidad === 3) {
      contenedor.style.flexWrap = "nowrap";
      contenedor.style.justifyContent = "space-between";
    } else if (cantidad === 4) {
      contenedor.style.flexWrap = "nowrap";
      contenedor.style.justifyContent = "center";
    } else {
      contenedor.style.flexWrap = "wrap";
      contenedor.style.justifyContent = "center";
    }

    imagenes.forEach(nombre => {
      // Acepta nombre con o sin extensión
      const src = nombre.match(/\.(jpg|jpeg|png|gif|tif|tiff)$/i)
        ? this.rutaBase + nombre
        : this.rutaBase + nombre + ".jpg";

      let elemento;

      if (cantidad < 3) {
        elemento = this.crearImagen(src, { width: 360, wrapperClass: "fotografia" });

      } else if (cantidad === 3) {
        elemento = this.crearImagen(src, { width: 265, padding: "3px" });

      } else if (cantidad === 4) {
        elemento = this.crearImagen(src, { width: 195, padding: "6px" });

      } else { // > 4
        elemento = this.crearImagen(src, { width: 265, padding: "6px" });
      }

      contenedor.appendChild(elemento);
    });
  }

  /**
   * Crea y devuelve una imagen o un contenedor con imagen dentro, según opciones.
   *
   * @param {string} src - Ruta completa de la imagen.
   * @param {Object} [opciones] - Opciones para personalizar la imagen.
   * @param {string} [opciones.className] - Clase(s) CSS a aplicar a la imagen.
   * @param {number} [opciones.width] - Ancho en píxeles para la imagen.
   * @param {string} [opciones.padding] - Padding CSS para la imagen.
   * @param {string} [opciones.wrapperClass] - Clase para contenedor <div> opcional.
   * @returns {HTMLElement} - <img> o <div> contenedor.
   */
  crearImagen(src, opciones = {}) {
    const img = document.createElement("img");
    img.src = src;
    if (opciones.width) img.width = opciones.width;
    if (opciones.padding) img.style.padding = opciones.padding;
    if (opciones.className) img.classList.add(opciones.className);

    if (opciones.wrapperClass) {
      const wrapper = document.createElement("div");
      wrapper.classList.add(opciones.wrapperClass);
      wrapper.appendChild(img);
      return wrapper;
    }

    return img;
  }
}
