## Ejercicio: Atajos de teclado (Ctrl + B para enfocar un input)

### Objetivo
Este ejercicio introduce el uso de eventos de teclado a nivel de documento para detectar combinaciones de teclas y ejecutar acciones específicas en la interfaz.

El objetivo principal es aprender a:
- Capturar eventos globales de teclado
- Detectar combinaciones de teclas (modificadores como Ctrl)
- Interactuar con elementos del DOM en respuesta a atajos

---

## Comportamiento del ejercicio

- La página contiene un campo de búsqueda (`input`)
- El sistema escucha las pulsaciones de teclado en toda la ventana
- Cuando el usuario pulsa una combinación específica:
  - Se ejecuta una acción automática
  - El foco se mueve al campo de búsqueda

---

## Lógica del atajo implementado

- Se detecta el evento de teclado a nivel global (`document`)
- Se comprueba si:
  - La tecla pulsada es una tecla específica (por código)
  - Y si se mantiene pulsada la tecla modificadora Ctrl
- Si ambas condiciones se cumplen:
  - Se selecciona el input de búsqueda
  - Se activa el foco automáticamente

---

## Conceptos trabajados

- Eventos globales del navegador (`keydown`)
- Detección de teclas mediante código de tecla
- Uso de teclas modificadoras (Ctrl, Shift, Alt)
- Manipulación del foco en elementos del DOM
- Interacción entre teclado y UI

---

## Comportamiento esperado


Al presionar la combinación definida, el cursor se posiciona automáticamente en el campo de búsqueda, mejorando la accesibilidad y la velocidad de interacción del usuario con la interfaz.