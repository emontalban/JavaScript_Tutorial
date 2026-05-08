## Ejercicio: Contador de caracteres con límite

### Objetivo
El objetivo de este ejercicio es controlar la longitud del texto introducido en un input y actualizar un contador en tiempo real, evitando que el usuario supere un número máximo de caracteres.

---

## Comportamiento del ejercicio

- El usuario escribe en un campo de texto
- Se muestra cuántos caracteres quedan disponibles
- El sistema controla el límite máximo de caracteres
- No se permite superar el máximo definido

---

## Enfoques de solución

- Solución 1: `keyup` (clásico)
- Solución 2: `input` (moderno)

---

## Solución 1: `keyup`

Este enfoque utiliza el evento `keyup`, que se ejecuta cuando el usuario suelta una tecla.

### Código

```js
msgInput.onkeyup = function () {

    msgCounter.innerHTML = max - this.value.length;

    if (!getCurrentContentLength(this.value, max - 1)) {
        msgInput.disabled = true;
    }
}
```
## Solución 2: `input`

Este enfoque utiliza el evento `input`, que detecta cualquier cambio en el valor del campo (teclado, pegado, autocompletado, etc.).

```js
msgInput.addEventListener('input', function () {

    if (this.value.length > max) {
        this.value = this.value.substring(0, max);
    }

    msgCounter.innerHTML = max - this.value.length;
});
```
