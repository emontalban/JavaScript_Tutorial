## Ejercicio: Mover tareas entre listas dinámicamente

### Objetivo
El objetivo de este ejercicio es aprender a manipular elementos del DOM de forma dinámica moviendo tareas desde una lista de pendientes hacia una lista de tareas completadas.

El ejercicio trabaja la interacción con eventos, la manipulación de nodos y diferentes enfoques para actualizar la interfaz.

---

## Comportamiento del ejercicio

- La aplicación contiene una lista de tareas pendientes
- Cada tarea puede pulsarse individualmente
- Al hacer click sobre una tarea:
- desaparece de la lista original
- se añade a la sección de tareas completadas

---

## Conceptos trabajados

- Eventos sobre múltiples elementos
- Manipulación dinámica del DOM
- Inserción de nodos HTML
- Eliminación de elementos
- Movimiento de elementos entre contenedores
- Diferencia entre crear nodos y reutilizarlos

---

# Solución 1: Crear un nuevo elemento

### Enfoque

La primera solución crea un nuevo elemento HTML para representar la tarea completada.

El proceso consiste en:
1. Detectar el click sobre una tarea
2. Crear un nuevo elemento dinámicamente
3. Copiar el contenido de la tarea original
4. Insertar el nuevo elemento en la sección de completados
5. Eliminar la tarea original de la lista pendiente

---

## Características de esta solución

- El elemento original no se reutiliza
- Se genera un nuevo nodo desde cero
- El contenido se reconstruye manualmente

---

## Ventajas

- Permite transformar o modificar la estructura del elemento
- Útil cuando se necesita reconstruir el contenido
- Facilita aplicar una estructura distinta en la lista de completados

---

## Desventajas

- Requiere más pasos
- Se realizan más operaciones sobre el DOM
- No conserva automáticamente propiedades o eventos del elemento original

---

# Solución 2: Mover el elemento existente

### Enfoque

La segunda solución reutiliza directamente el elemento HTML original.

En lugar de crear un nuevo nodo:
- el elemento se extrae de la lista pendiente
- y se inserta directamente en la lista de completados

---

## Características de esta solución

- No se crean nuevos elementos
- Se reutiliza el nodo existente
- El DOM simplemente cambia el elemento de posición

---

## Ventajas

- Código más simple y limpio
- Menos operaciones sobre el DOM
- Mejor rendimiento
- Conserva propiedades y comportamiento del elemento original

---

## Desventajas

- Menos flexible si se necesita reconstruir o transformar el contenido
- El mismo nodo continúa existiendo, solo cambia de ubicación

---

# Diferencia principal entre ambas soluciones

La diferencia clave es conceptual:

- Solución 1 → crear un nuevo elemento y borrar el anterior
- Solución 2 → mover directamente el elemento existente

Ambas producen el mismo resultado visual, pero internamente trabajan de forma distinta.

---

# Conclusión

Este ejercicio muestra dos enfoques válidos para actualizar interfaces dinámicas con JavaScript.

La segunda solución suele considerarse más eficiente y más cercana a un enfoque profesional, ya que reutiliza directamente los nodos existentes en el DOM en lugar de reconstruirlos manualmente.