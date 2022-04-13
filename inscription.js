/**
 * fonction qui permet de parcourir la liste de cours et de générer dans la page html
 * @param {} listeCours liste de cours
 */
function afficherCours(listeCours) {
    listeCours.forEach(cours => {
        $('#cours').append(`<option value="${cours.code}">${cours.code} ${cours.nom}</option>`)
        $('#CoursOfferts').append(`
            <li class="card col-4 me-2 mb-2">
                <div class="card-body">
                    <!-- Code et titre du cours -->
                    <h3 class="card-title" id="Title">${cours.code} ${cours.nom}</h3>
                    <!-- Description du cours -->
                    <p class="card-text">${cours.description}</p>
                        <!-- Liste des étudiants format : nom (code) -->
                        <h3 class="card-title">Étudiant.e.s inscrit.e.s</h3>
                        <ul class="list-group list-group-flush" id="${cours.code}listeEtudiant">
                        </ul>
                </div>
            </li>`);
    });
}

//récupérer la liste des cours créé dans la page index.html
const listeCours = JSON.parse(localStorage.getItem('listeCours'));
afficherCours(listeCours);
const listeCoursJSON = JSON.parse(localStorage.getItem('listeCoursJSON'));
afficherCours(listeCoursJSON)

//----------------------------------------------------------------------------------------------------------------------------------------

//constructeur de l'objet Etudiant
function Etudiant(etudiantCode = '00000', etudiantNom = 'Programme') {
    this.etudiantCode = etudiantCode,
        this.etudiantNom = etudiantNom
};

/**
 * lorsqu'on appuit sur soumettre
 * prend les valeur de l'étudiant et le crée, l'ajoute à la liste
 * et crée une carte avec les données de l'étudiant et du cours
 */
$('form').submit(function (event) {
    let $nomEtudiant = $('#nom').val();
    let $codeEtudiant = $('#code').val();
    let $codeCours = $('#cours').val();
    event.preventDefault(event);
    const etudiant = new Etudiant($codeEtudiant, $nomEtudiant)
    $(`#${$codeCours}listeEtudiant`).append(`
        <li class="list-group-item">${etudiant.etudiantNom} (${etudiant.etudiantCode})</li>`)
});
