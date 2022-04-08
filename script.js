//constructeur de l'objet personnage
function Personnage(argent, attaque, defense) {
    this.argent = argent,
        this.attaque = attaque,
        this.defense = defense
};
//-----------------------------------------------------------------------------------------------------------------------------------------------
//création de l'objet personnage
personnage = new Personnage(5000, 50, 50);
//récupérer les statistiques du personnage dans le stockage
const statistiquePersonnageStockage = JSON.parse(localStorage.getItem('personnage'));

if (statistiquePersonnageStockage != null) {
    personnage = statistiquePersonnageStockage;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//création du tableau pour la liste d'items achetés
let listeItemsAchetes = [];
//récupérer la liste des items achetés dans le stockage
const listeItemsAchetesStockage = JSON.parse(localStorage.getItem('listeItemsAchetes'));
if (listeItemsAchetesStockage != null) {
    listeItemsAchetes = listeItemsAchetesStockage;
}


//-----------------------------------------------------------------------------------------------------------------------------------------------
//affiche les propriétés de l'objet personnage dans la partie statistque de la page HMTL
$('#argent').append(`${personnage.argent}`);
$('#attaque').append(`${personnage.attaque}`);
$('#defense').append(`${personnage.defense}`);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Au chargement de la page, charger la liste des items disponibles dans le fichier item.json : ce sont les items qui seront disponibles à l'achat
//créer le tableau dans la page HTML (voir l'image de l'aperçu)
function AfficherItems(items) {
    $('#listeItemsTableau').append(
        `<tr>
        <th scope="col">${items.nom}</th>
        <td scope="col">${items.defense}</td>
        <td scope="col">${items.attaque}</td>
        <td scope="col">${items.prix}</td>
        </tr>`);
};

$.getJSON('items.json')
    //requête reçu et statut est OK
    .done(function (items) {
        items.items.forEach(function (items) {
            AfficherItems(items);
        });
    })
    .fail(function (error) {
        $('.alert').text(error.status).removeClass('d-none');
    });


//-----------------------------------------------------------------------------------------------------------------------------------------------

//Au chargement de la page, charger la liste des items disponibles dans le fichier item.json : ce sont les items qui seront disponibles à l'achat
//créer les options dans le select
function RemplirItemsSelect(itemsSelect) {
    $('#achat').append(`<option value="${itemsSelect.id}">${itemsSelect.nom}</option>`);
};

$.getJSON('items.json')
    //requête reçu et statut est OK
    .done(function (magasin) {
        magasin.items.forEach(function (items) {
            RemplirItemsSelect(items);
        });
    })
    .fail(function (error) {
        $('.alert').text(error.status).removeClass('d-none');
    });

//-----------------------------------------------------------------------------------------------------------------------------------------------

//fonction pour acheter items
//ses scores d'attaque et de défense sont modifiés
//coût de l'item est déduit de son argent
//pas acheter un item s'il n'a pas assez d'argent (afficher un message d'erreur au besoin)
//Mettre à jour les propriétés du personnage (objet et page HTML) après chaque achat
$('#btnConfirmer').click(function () {

    //lire la valeur de l'article quand appuyer sur confirmer et convertir en Int
    let itemOptionValue = parseInt($('select').val(), 10)
    //relier l'itemOptionValue avec ses proprétés
    $.getJSON('items.json')
        //requête reçu et statut est OK
        .done(function (magasin) {
            magasin.items.forEach(function (items) {

                if (itemOptionValue === items.id) {

                    //enlever le $ du items.prix et convertion du prix JSON en Float
                    let subPrixItems = items.prix.substring(1);
                    subPrixItems = parseFloat(subPrixItems);

                    //si l'argent du personnage est plus grand que le coût de l'items on achete
                    if (personnage.argent > subPrixItems) {

                        //ses scores d'attaque et de défense sont modifiés
                        personnage.attaque += parseInt(items.attaque, 10);
                        personnage.defense += parseInt(items.defense, 10);
                        //coût de l'item est déduit de son argent
                        personnage.argent -= subPrixItems;
                        //mettre décimale 2 chiffres après la virgule
                        personnage.argent = personnage.argent.toFixed(2)

                        //mettre à jour le HTML
                        $('#argent').text(`${personnage.argent}`);
                        $('#attaque').text(`${personnage.attaque}`);
                        $('#defense').text(`${personnage.defense}`);

                        //enlève le message d'erreur
                        $('#manqueArgent').addClass('d-none');

                        //ajout l'item dans un tableau
                        listeItemsAchetes.push(items);
                    }
                    else {
                        //sinon on affiche un message d'erreur
                        $('#manqueArgent').removeClass('d-none');
                    };
                };
            });
        })
        .fail(function (error) {
            $('.alert').text(error.status).removeClass('d-none');
        });
});

//--------------------------------------------------------- Partie 2 -----------------------------------------------------------------------------

/**
 * Prend les données du formulaire
 * Crée un objet
 * Le stocke dans le stockage local
 */
function stockage() {

    //Stocker ma liste d'objet dans le stockage local
    localStorage.setItem('listeItemsAchetes', JSON.stringify(listeItemsAchetes));

    //Aller chercher les données
    const argent = parseFloat($('#argent').text(), 10);
    const attaque = parseInt($('#attaque').text(), 10);
    const defense = parseInt($('#defense').text(), 10);
    //Créer un objet
    const personnage = new Personnage(argent, attaque, defense);
    //Stocker l'objet dans le stockage local
    localStorage.setItem('personnage', JSON.stringify(personnage));
    return true;
};

/**
 * appeler méthode de stockage lors du click du lien
 */
$('#voirItemsAchetes').click(function () {
    stockage();
});