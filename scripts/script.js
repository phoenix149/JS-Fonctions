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

// // //Exercice 3 :

// let s_phrase = prompt("Écrivez votre phrase");
// let s_lettre_choisie = prompt("Saisir la lettre que vous souhaitez compter");
// let i_compteur = 1;

// ------------------------------------------------------------------------------------------------------------------------------------------


// Exercice 4 :

    let i_menuselecteur = parseInt(prompt("1-- Multiples"+ "\n" + "\n" +"2-- Somme et moyenne"+ "\n" + "\n" +"3-- Recherche du nombre de voyelles"+ "\n" + "\n" +"4-- Recherche du nombre des caractères suivants"+ "\n" + "\n" +"Saisissez le numéro de l'option que vous avez choisie" ));

    
    if (i_menuselecteur == 1) {
        alert("option 1 : en cours de création");
    }
    else if (i_menuselecteur == 2) {
        sommeMoyenne();

    }
    else if (i_menuselecteur == 3) {
        alert("option 3 : en cours de création");

    }
    else if (i_menuselecteur == 4) {
        alert("option 4 : en cours de création");

    }
    else if ((i_menuselecteur < 1) || (i_menuselecteur > 4)) {
        alert("l'option que vous avez choisie n'existe pas.");
    }


function sommeMoyenne() {
    let iNb;
    let i_Compteur = parseInt(0);
    let i_Somme = parseInt(0);
    let i_Moyenne = parseFloat(0);

    while (iNb != 0) {
        iNb = parseInt(prompt("Saisir un nombre"));
        i_Somme += iNb;
        i_Compteur++;

    }
    i_Moyenne = i_Somme / (i_Compteur - 1);
    console.log("La somme de tout les nombres que vous avez entrés est de : " + i_Somme + " et la moyenne est de :" + i_Moyenne);
}