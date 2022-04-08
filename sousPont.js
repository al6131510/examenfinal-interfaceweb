/*
 * Récupérer des données à partir du stockage local
 */
const listeItemsAchetes = JSON.parse(localStorage.getItem('listeItemsAchetes'));
const personnage = JSON.parse(localStorage.getItem('personnage'));

//passer à travers la liste d'items dans le stockage local
listeItemsAchetes.forEach(function (item) {
    //si crocs en acier = on enleve les crocs et les bonus attaques et défenses + afficher message
    //defense : 2 points
    //attaque : 4 points
    if (item.id === 2) {
        personnage.attaque -= item.attaque;
        personnage.defense -= item.defense;

        $('.messageErreurCrocs').removeClass('d-none');
        $('#messagePasserPont').addClass('d-none');
        $('#ajouterBoutonPasserPont').addClass('d-none');
    }
    else {
        //sinon afficher bouton dans HTML pour passer à la page passer le pont et enlever message crocs
        $('#messagePasserPont').removeClass('d-none');
        $('#ajouterBoutonPasserPont').removeClass('d-none');
        $('.messageErreurCrocs').addClass('d-none');
    }
});

//transferer le personnage modifier dans le local storage
localStorage.setItem('personnage', JSON.stringify(personnage));


