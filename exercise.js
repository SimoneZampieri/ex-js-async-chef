// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef
// Note del docente
// Scrivi la funzione getChefBirthday(id), che deve:
// Essere asincrona (async).
// Utilizzare await per chiamare le API.
// Restituire una Promise con la data di nascita dello chef.
// Gestire gli errori con try/catch
// Esempio di utilizzo
// getChefBirthday(1)
//   .then(birthday => console.log("Data di nascita dello chef:", birthday))
//   .catch(error => console.error("Errore:", error.message));
// Esempio di output atteso
// Data di nascita dello chef: 1990-06-15
// 🎯 Bonus 1
// Attualmente, se la prima richiesta non trova una ricetta, la seconda richiesta potrebbe comunque essere eseguita causando errori a cascata.

// Modifica getChefBirthday(id) per intercettare eventuali errori prima di fare la seconda richiesta.
// 🎯 Bonus 2
// Utilizza la libreria dayjs per formattare la data di nascita nel formato giorno/mese/anno.
// Esempio di output atteso con formattazione
// Data di nascita dello chef: 15/06/1990

const dayjs = require("dayjs");

async function getChefBirthDay(id) {
  try {
    //ricetta
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await response.json();

    //Chef
    const response2 = await fetch(
      `https://dummyjson.com/users/${recipe.userId}`
    );
    const user = await response2.json();

    //data formattata
    const formattedBirthDate = dayjs(user.birthDate).format("DD/MM/YYYY");
    user.birthDate = formattedBirthDate;

    return user.birthDate;
  } catch (error) {
    throw new Error(`Errore: ${error.message}`);
  } finally {
    console.log("Richiesta completata");
  }
}

getChefBirthDay(1)
  .then((birthday) => {
    console.log("Il compleanno dello chef è il:", birthday);
  })
  .catch((error) => console.error("Errore:", error.message));
