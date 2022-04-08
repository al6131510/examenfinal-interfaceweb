$('#nouvellePartie').click(function () {
    //vider les valeur de stockage local
    localStorage.removeItem('listeItemsAchetes');
    localStorage.removeItem('personnage');

    //rediriger vers la page index.html sans option de retour
    window.location.replace('index.html')
})

/*
 * Récupérer des données à partir du stockage local
 */
const listeItemsAchetes = JSON.parse(localStorage.getItem('listeItemsAchetes'));
//appeler fonction pour afficher la liste des items
afficherListeItemsAchetes(listeItemsAchetes);
const personnage = JSON.parse(localStorage.getItem('personnage'));
//affiche les propriétés de l'objet personnage dans la partie statistque de la page HMTL
$('#argentFinal').append(`${personnage.argent}`);
$('#attaqueFinal').append(`${personnage.attaque}`);
$('#defenseFinal').append(`${personnage.defense}`);

function afficherListeItemsAchetes(items) {
    items.forEach(item => {
        $('#listeItemsFinale').append(
            `<tr>
            <td>${item.nom}</td>
         <td>${item.defense}</td>
         <td>${item.attaque}</td>
         <td>${item.prix}</td>
         </tr>`
        );
    });
}