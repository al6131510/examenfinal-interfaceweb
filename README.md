# S12 JSON et appels asynchrones

## Instructions
1. Compléter au besoin le fichier HTML (ne pas viser une apparence identique à la maquette, simplement respecter l'organisation générale)
2. Créer un fichier JavaScript.
3. Dans le code JavaScript, créer le constructeur du personnage. Le personnage possède, à sa création :
   - Un montant d'argent
   - Un score d'attaque
   - Un score de défense

4. Au chargement de la page, le personnage est créé avec les valeurs de votre choix.
5. Au chargement de la page, charger la liste des items disponibles dans le fichier item.json : ce sont les items qui seront disponibles à l'achat
   - Utiliser, pour ce faire, un appel asynchrone
   - Utiliser la liste des items du fichier .json pour :
     - créer le tableau dans la page HTML (voir l'image de l'aperçu)
     - créer les options dans le select

6. Créer des méthodes et/ou des fonctions qui permettent d'acheter les différents items.
 - À chaque fois que le personnage achète un item, ses scores d'attaque et de défense sont modifiés selon les statistiques de l'item acheté
 - À chaque fois que le personnage achète un item, le coût est déduit de son montant d'argent.
 - Le personnage ne peut pas acheter un item s'il n'a pas assez d'argent (afficher un message d'erreur au besoin)
 - Mettre à jour les propriétés du personnage (objet et page HTML) après chaque achat
 