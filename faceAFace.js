/*
 * Récupérer des données à partir du stockage local
 */
const listeItemsAchetes = JSON.parse(localStorage.getItem('listeItemsAchetes'));
const personnage = JSON.parse(localStorage.getItem('personnage'));

function genererArgentAleatoire(){
    let montantAleatoire = Math.floor(Math.random() * 5001);
    return montantAleatoire;
};

function ajouterArgent(personnage, nombreAleatoire){
    personnage.argent += nombreAleatoire;
};

function afficherArgent(personnage, nombreAleatoire){
    $('#argentFinalFaceFace').text(personnage.argent);
    $('#argentTomberFaceFace').text(nombreAleatoire);
};

let nombreAleatoire = genererArgentAleatoire();
ajouterArgent(personnage, nombreAleatoire);
afficherArgent(personnage,nombreAleatoire);

//transferer le personnage modifier dans le local storage
localStorage.setItem('personnage', JSON.stringify(personnage));
