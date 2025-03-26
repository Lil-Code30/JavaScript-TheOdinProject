fetch('superheroes.json')
  .then(response => {
    if (!response.ok) throw new Error('Erreur HTTP ' + response.status);
    return response.json();
  })
  //C'est ici que nous obtenons l'objet de manipulation
  //Tu peux le manipuler avec data.nomdedata
  
  .then(data => console.log(data.squadName))
  .catch(err => console.error("Erreur lors de la lecture du fichier JSON :", err));