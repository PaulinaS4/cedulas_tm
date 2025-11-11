<p align="center">
  <img 
    src="https://github.com/jonatanLara/jonatanLara/blob/main/src/header_3_t.png?raw=true" 
    alt="Hoja Calendario"
    width="73%"
  />
</p>

<p align="center">
  <a href="https://github.com/jonatanLara">🐙 GitHub</a> |
  <a href="https://www.youtube.com/@jonatanlara">📺 YouTube</a> |
  <a href="https://www.instagram.com/jonatanlaraortiz/">📸 Instagram</a>
</p>
<br>

# Carga dinámica de imágenes según cantidad y estilo

Este módulo permite cargar y mostrar una galería de imágenes de manera dinámica, ajustando automáticamente el tamaño y distribución según la cantidad de imágenes proporcionadas.

Su principal propósito es simplificar la visualización de fotografías sin necesidad de escribir HTML extra ni estilos manuales.


---

## Características
- Ajuste automático del `flex-wrap` y `justify-content` del contenedor.
- Los tamaños y márgenes de las imágenes se ajustan según el número total.
- Si un nombre no incluye extensión, se agrega automáticamente `.jpg`.
- Se encapsula la lógica en una clase reutilizable y limpia.

---

## Clase Principal
### `GaleriaImagenes`

#### Constructor

| Parámetro       | Tipo     | Descripción                                            |
| --------------- | -------- | ------------------------------------------------------ |
| `rutaBase`      | `string` | Carpeta o ruta donde se encuentran las imágenes.       |

```js
    new GaleriaImagenes(rutaBase);
``` 


### Método Principal
``cargar()``

Ejecuta la carga de imágenes en el contenedor.

| Parámetro       | Tipo     | Descripción                                            |
| --------------- | -------- | ------------------------------------------------------ |
| `textoImagenes` | `string` | Cadena con nombres de imágenes separados por coma.     |
| `idContenedor`  | `string` | ID del elemento HTML donde se insertarán las imágenes. |


```javascript
    const general = "T6_12146_613_0002445_1, T6_12146_613_0002445_2, T6_12146_613_0002445_3";
    const galeria = new GaleriaImagenes("fotos/");
    galeria.cargar(general, "cont-princ-1");

```

---

## Ejemplo de Uso Completo
### HTML

```HTML
    <div id="cont-principal" style="display:flex;"></div>
```
### JavaScript

```javascript
<script src="js/nue.js"></script>
<script>
    const general = "T6_12146_613_0002445_1, T6_12146_613_0002445_2, T6_12146_613_0002445_3";
    const galeria = new GaleriaImagenes("fotos/");
    galeria.cargar(general, "cont-principal");
</script>

```

---
## Ejemplo con imágenes que ya tienen extensión

```js
    const general = "piedra.jpg, hueso.png, ceramica.jpeg";
    const galeria = new GaleriaImagenes("fotos/");
    galeria.cargar(general, "cont-principal");
```
## Ejemplo con 1 o 2 imágenes (se centran automáticamente)
```js
    const general = "pieza1, pieza2";
    const galeria = new GaleriaImagenes("fotos/");
    galeria.cargar(general, "cont-principal");
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!  
Si tienes mejoras, errores que reportar o ideas para funciones nuevas, no dudes en abrir un issue o pull request.

---
## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
