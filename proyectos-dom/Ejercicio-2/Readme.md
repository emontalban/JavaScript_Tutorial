## Ejercicio: Mostrar fecha y hora con un botón

### Objetivo
El objetivo de este ejercicio es aprender a actualizar dinámicamente el contenido del DOM utilizando JavaScript.

En concreto:
- Mostrar la fecha y hora actual en la página
- Activarlo mediante un botón
- Practicar diferentes formas de manejar eventos



## Comportamiento del ejercicio

- El usuario hace clic en un botón
- Se obtiene la fecha y hora actual del sistema
- Esa información se muestra dentro de un elemento con id `dateComponent`



## Solución 1: Inline JavaScript

En esta primera versión, el evento se ejecuta directamente desde el HTML.
- Fácil de entender
- No es escalable
- Mezcla HTML con lógica JavaScript



## Solución 2: Event Listener

En esta versión se elimina el `onclick` del HTML y se gestiona todo desde JavaScript.
- Más limpio y profesional
- Separación de responsabilidades (HTML / JS)
- Escalable y mantenible

