
//Elle return un objet utilisable, data.datanom
function objetJson() 
{
    return fetch('superheroes.json').then(response => response.json());
}

function afficherObjet() 
{
      // Ici, nous pouvons utiliser l'objet retourné par la fonction objetJson.
    // Vous pouvez ensuite manipuler cet objet comme vous le souhaitez.
    // N'oubliez pas d'utiliser cette fonction dans une fonction async avec await,
    // afin d'attendre la récupération complète de l'objet JSON.
    //Il faut maintenant utiliser .then car les alwai ne sont plus là
    objetJson().then(data => {
        //Et donc tu fait le traitement ici 
        console.log(data.squadName);
    });
  
}
  
afficherObjet();