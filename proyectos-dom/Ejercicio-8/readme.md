## Ejercicio: Crear mensajes dinámicos en el DOM

### Objetivo
El objetivo de este ejercicio es aprender a crear y añadir elementos dinámicamente al DOM utilizando JavaScript.

El ejercicio simula un pequeño sistema de mensajes donde el usuario escribe texto en un input y, al pulsar un botón, el mensaje aparece automáticamente dentro de un contenedor.Tambien hay otro boton con la capacidad de eliminar todos los mensajes generados dinámicamente en la interfaz.

---

## Comportamiento del ejercicio

- El usuario escribe un mensaje en un campo de texto
- Al pulsar el botón:
  - Se crea un nuevo elemento HTML dinámicamente
  - El contenido del input se convierte en texto del mensaje
  - El mensaje se inserta en la interfaz
- El input se limpia automáticamente después del envío

---

## Conceptos trabajados

- Creación dinámica de elementos (`createElement`)
- Creación de nodos de texto (`createTextNode`)
- Inserción de elementos en el DOM
- Uso de `appendChild`
- Manipulación de clases CSS dinámicamente
- Captura de datos desde inputs
- Eventos mediante botones

---

## Enfoque de implementación

La lógica del ejercicio se basa en:

1. Capturar el valor escrito por el usuario
2. Crear un nuevo contenedor para el mensaje
3. Añadir el texto al nuevo elemento
4. Insertar el mensaje dentro del contenedor principal
5. Limpiar el input para permitir nuevos mensajes
6. Borra todos los mensajes.

---

## Conceptos importantes

### Diferencia entre texto y nodos

El ejercicio trabaja con nodos reales del DOM, no únicamente con strings.

Por ello:
- `createTextNode()` genera un nodo de texto
- `appendChild()` necesita recibir un nodo HTML válido

---

## Resultado esperado

Cada vez que el usuario envía un mensaje:
- aparece un nuevo bloque de mensaje en pantalla
- el contenido se inserta dinámicamente
- la interfaz se actualiza sin recargar la página
- se borran todos los mensajes