## Ejercicio: Contador de caracteres con múltiples textareas

### Objetivo
Ampliar el ejercicio numero 5 para aplicar el control de longitud de texto a varios campos de entrada en la misma página, manteniendo un contador independiente para cada uno.

El objetivo es reforzar la capacidad de trabajar con múltiples elementos del DOM y reutilizar la misma lógica de forma estructurada.

---

## Comportamiento del ejercicio

- La interfaz contiene dos `textarea`
- Cada `textarea` tiene su propio contador de caracteres
- Ambos campos comparten la misma lógica de control
- El sistema actualiza el contador en tiempo real mientras el usuario escribe
- Se mantiene un límite máximo de caracteres por campo
- El texto no debe superar dicho límite

---

## Conceptos trabajados

- Selección de múltiples elementos del DOM
- Iteración sobre colecciones de elementos
- Reutilización de lógica en distintos componentes
- Eventos en tiempo real para detección de cambios en inputs
- Control de estado independiente por elemento

---

## Enfoque de implementación

Se utiliza un evento que detecta cualquier cambio en el contenido del campo, lo que permite capturar escritura, pegado de texto o modificaciones automáticas.

La lógica se aplica de forma individual a cada `textarea`, de manera que cada uno mantiene su propio estado sin interferir con los demás.

---

## Resultado esperado

Cada input o textarea funciona de forma independiente, pero todos utilizan la misma función base para gestionar el límite de caracteres y el contador asociado.