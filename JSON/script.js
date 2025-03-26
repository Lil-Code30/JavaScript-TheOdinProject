
//Elle return un objet utilisable, data.datanom
function objetJson() 
{
    return fetch('superheroes.json')
      .then(response => {
        if (!response.ok) throw new Error('Erreur HTTP ' + response.status);
        return response.json();
      })
      .catch(err => {
        console.error("Erreur lors de la lecture du fichier JSON :", err);
        throw err;
      });
}

async function afficherObjet() 
{
      // Ici, nous pouvons utiliser l'objet retourné par la fonction objetJson.
    // Vous pouvez ensuite manipuler cet objet comme vous le souhaitez.
    // N'oubliez pas d'utiliser cette fonction dans une fonction async avec await,
    // afin d'attendre la récupération complète de l'objet JSON.
      const data = await objetJson();
      console.log(data);
  
}
  
afficherObjet();