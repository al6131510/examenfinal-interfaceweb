/*
 * Récupérer des données à partir du stockage local
 */
const listeItemsAchetes = JSON.parse(localStorage.getItem('listeItemsAchetes'));
const personnage = JSON.parse(localStorage.getItem('personnage'));

/**
 * 
 * @param {*} personnage personnage du jeu
 * met l'argent du personnage à 0
 */
function payerTaxe(personnage){
    personnage.argent = 0;
};

function afficherArgent(personnage){
    $('#argentPayerTaxe').text(personnage.argent + '$');
};

//appeler fonction
payerTaxe(personnage);
afficherArgent(personnage);
localStorage.setItem('personnage', JSON.stringify(personnage));