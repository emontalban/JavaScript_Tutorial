## Ejercicio: Hover sobre imágenes con overlay

### Objetivo
El objetivo de este ejercicio es implementar un comportamiento de interacción en el DOM donde una descripción (overlay) aparece al pasar el ratón sobre una imagen y desaparece al salir de ella.

Se trabaja principalmente con:
- Event listeners (mouseover / mouseout)
- Manipulación del DOM
- Clases CSS dinámicas



## Comportamiento del ejercicio

- Cuando el ratón entra en la imagen → se muestra el texto descriptivo (overlay)
- Cuando el ratón sale de la imagen → el texto se oculta



## Solución 1

Esta solución localiza el overlay de forma dinámica usando el contenedor de la imagen.

- Se detecta la imagen sobre la que ocurre el evento
- Se accede al contenedor padre (parentElement)
- Se busca el overlay dentro del contenedor
- Se modifican las clases para mostrar u ocultar el contenido

## Solución 2 

En esta versión se accede al overlay usando la posición del elemento dentro del DOM (`children`), en lugar de buscarlo con `querySelector`.

- Se accede a la imagen sobre la que ocurre el evento
- Se sube al contenedor padre
- Se selecciona el segundo hijo (children[1]), que corresponde al overlay
- Se reemplaza completamente la clase del elemento