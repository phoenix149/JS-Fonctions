// //Exercice 1 :

// //Je créer deux variables qui seront saisie par l'utilisateur
// let F_Nb1 = parseFloat(prompt("Saisissez votre premier nombre"));
// let F_Nb2 = parseFloat(prompt("Saisissez votre deuxième nombre"));

// //Création de la fonction produit pour effectuer la multiplication de deux nombres entre eux
// function produit(x, y) {
//     document.write("Le produit de " + x + " par " + y + "  est égale à " + (x * y) +".");
// }
// //Appel de la fonction produit pour multiplier les deux nombres qui ont été saisies par l'utilisateur
// produit(F_Nb1, F_Nb2);

// //Création de la fonction afficheImg pour afficher une image sur la page html
// function afficheImg(image){
//     document.write('<img src="' + image +'" alt="papillon"></img>');
// }

// //Appel de la fonction pour afficher une image
// afficheImg("papillon.jpg");

// ------------------------------------------------------------------------------------------------------------------------------------------

// //Exercice 2 :

// // Je créer trois variables une qui determinera la table choisie par l'utilisateur/ l'autre le multiplicateur et la dernière le résultat
// let i_Table = parseInt(prompt("Saisir le numéro de la table que vous souhaitez afficher"))
// let i_multiplicateur = 1;
// let i_resultat = 0;

// //Je créer la fonction table qui permettra de multiplier mes variables et d'afficher la table de multiplication avec une boucle qui ira jusqu'à 10
// function table(x, y) {
//     while (y <= 10) {
//         i_resultat = x * y;
//         document.write(y + " x " + x + " = " + i_resultat + "</br>");
//         y++;
//     }

// }
// //Appel de la fonction table avec comme paramètres mes variables.
// table(i_Table, i_multiplicateur);

// // ------------------------------------------------------------------------------------------------------------------------------------------

// //Exercice 3 :

let s_phrase = prompt("Écrivez votre phrase");
let s_lettre_choisie = prompt("Saisir la lettre que vous souhaitez compter");
let i_compteur = 1;



