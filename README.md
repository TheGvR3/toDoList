# To-Do List

Piccola applicazione web per gestire una lista di attività.

## Come usare
- Apri [index.html](index.html) nel browser.
- Scrivi una attività nel campo e:
  - premi il pulsante "Add Task" oppure
  - premi `Enter` (gestito da [`enterF`](script.js)).
- Per segnare un'attività completa usa la checkbox (applica/sleva il testo barrato).
- Per cancellare un'attività usa il pulsante "Delete".

## File principali
- [index.html](index.html) — struttura e markup della pagina.
- [stylesheet.css](stylesheet.css) — stili dell'interfaccia.
- [script.js](script.js) — logica JS:
  - [`addTask`](script.js) — crea l'elemento lista, checkbox e pulsante di cancellazione.
  - [`enterF`](script.js) — intercetta il tasto `Enter` e richiama [`addTask`](script.js).

## Come funziona (breve)
- L'input ha id `taskInput` e la lista ha id `taskList` in [index.html](index.html).
- [`addTask`](script.js) legge il valore di `taskInput`, mostra un alert se vuoto, crea un `<li>` contenente:
  - una checkbox che applica/rimuove `textDecoration: line-through` sullo span del testo,
  - uno span con il testo della task,
  - un pulsante "Delete" che rimuove l'elemento dalla lista.
- [`enterF`](script.js) viene chiamata su `onkeydown` e, se la chiave è `"Enter"`, invoca [`addTask`](script.js).

## Limitazioni e suggerimenti
- Non c'è persistenza: le attività vengono perse al refresh. Si può aggiungere localStorage in [`script.js`](script.js) per salvare le attività.
- Per accessibilità migliorare gli attributi `aria-` e associare label alla checkbox.
- Per personalizzare lo stile, modifica [stylesheet.css](stylesheet.css).

## Esempio veloce di estensione (salvataggio)
Per salvare le attività nel browser si può estendere [`addTask`](script.js) e aggiungere funzioni di salvataggio/caricamento con `localStorage`.

---

TEST: https://thegvr3.github.io/toDoList/
