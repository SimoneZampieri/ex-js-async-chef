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

(async () => {
  try {
    const birthday = await getChefBirthDay(1);
    console.log("Il compleanno del chef è il: ", birthday);
  } catch (error) {
    console.log("Errore: ", error.message);
  }
})();
