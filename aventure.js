function afficherListeItemsAchetes(items) {
    items.forEach(item => {
        $('#tableauItemsAchetes').append(
            `<tr>
            <td>${item.nom}</td>
         <td>${item.defense}</td>
         <td>${item.attaque}</td>
         <td>${item.prix}</td>
         </tr>`
        );
    });
}

function afficherArgentPersonnage(argentPersonnage) {
    $('#argentPersonnage').text(argentPersonnage.argent.toFixed(2) + '$')
}

/*
 * Récupérer des données à partir du stockage local
 */

const listeItemsAchetes = JSON.parse(localStorage.getItem('listeItemsAchetes'));
afficherListeItemsAchetes(listeItemsAchetes);

const argentPersonnage = JSON.parse(localStorage.getItem('personnage'));
afficherArgentPersonnage(argentPersonnage);