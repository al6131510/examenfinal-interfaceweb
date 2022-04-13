/**
 * fonction affiche/génère ma liste des cours JSON
 * @param {*} cours élément de ma liste JSON
 */
function afficherCours(cours) {
    $('.list-group').append(`<li class="list-group-item">${cours.code} ${cours.nom}</li>`);
};

/**
 * au chargement de la page si la requête est bien reçu elle appelle la fonction afficher cours pour générer ma liste de cours JSON
 */
let listeCoursJSON = [];

$.getJSON('donnees.json')
    //requête reçu et statut est OK
    .done(function (cours) {
        cours.forEach(function (cours) {
            afficherCours(cours);
            listeCoursJSON.push(cours);
        });
    })
    .fail(function (error) {
        $('.alert').text(error.status).removeClass('d-none');
    });

//--------------------------------------------------------------------------------------------------------------------------------------------------

//constructeur de l'objet Cours
function Cours(code = '00000', nom = 'Programme', description = '00000 programme') {
    this.code = code,
        this.nom = nom,
        this.description = description
};

//liste de cours
let listeCours = [];

//--------------------------------------------------------------------------------------------------------------------------------------------------

/**au click du bouton soumettre, la description est vérifiée si elle contient dans son texte le code du cours 
 * si oui elle l'ajoute à la liste des cours
 * sinon elle affiche un message d'erreur
 */
$('form').submit(function (event) {
    //obtenir les valeurs de mes champs dans le formulaire
    let $nomCours = $('#nom').val();
    let $codeCours = $('#code').val();
    let $descriptionCours = $('#desc').val();
    event.preventDefault(event);
    if ($descriptionCours.includes($codeCours)) {
        const cours = new Cours($nomCours, $codeCours, $descriptionCours);
        listeCours.push(cours);
        $('.list-group').append(`<li class="list-group-item">${cours.code} ${cours.nom}</li>`);
        $('#erreurDescription').addClass('d-none');
    }
    else {
        $('#erreurDescription').removeClass('d-none');
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Prend la liste des cours et
 * le stocke dans le stockage local
 */
function stockage() {
    //Stocker l'objet dans le stockage local
    localStorage.setItem('listeCours', JSON.stringify(listeCours));
    localStorage.setItem('listeCoursJSON', JSON.stringify(listeCoursJSON));
    return true;
}

/**
 * au click du lien Inscription,
 * elle prend ma liste pour la mettre dans le stockage local
 */
$('#btnInscription').click(function () {
    stockage();
})