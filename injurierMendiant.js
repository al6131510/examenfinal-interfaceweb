/*
 * Récupérer des données à partir du stockage local
 */
const listeItemsAchetes = JSON.parse(localStorage.getItem('listeItemsAchetes'));
const personnage = JSON.parse(localStorage.getItem('personnage'));

//appeler les fonctions
augmenterAttaque(personnage);
afficherAttaque(personnage);

/**
 * 
 * @param {*} personnage personnage du jeu
 * augmente l'attaque du personnage de +1
 */
 function augmenterAttaque(personnage){
    //personnage.attaque = Number(personnage.attaque) + 1;
    personnage.attaque += 1;
};
/**
 * 
 * @param {*} personnage 
 * affiche l'attaque du personnage
 */ 
function afficherAttaque(personnage){
    $('#pointAttaqueMediant').text(personnage.attaque);
};

//transferer le personnage modifier dans le local storage
localStorage.setItem('personnage', JSON.stringify(personnage));
