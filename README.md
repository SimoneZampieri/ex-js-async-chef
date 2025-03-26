# Esercizio compleanno dello Chef

## Descrizione

Crea una funzione asincrona `getChefBirthday(id)` che deve:

1. Recuperare una ricetta da `https://dummyjson.com/recipes/{id}`
2. Estrarre la proprietà `userId` dalla ricetta
3. Usare `userId` per ottenere le informazioni dello chef da `https://dummyjson.com/users/{userId}`
4. Restituire la data di nascita dello chef

## Requisiti

- La funzione deve essere asincrona (async)
- Utilizzare await per chiamare le API
- Restituire una Promise con la data di nascita dello chef
- Gestire gli errori con try/catch

## Esempio di Utilizzo

```javascript
getChefBirthday(1)
  .then((birthday) => console.log("Data di nascita dello chef:", birthday))
  .catch((error) => console.error("Errore:", error.message));
```
