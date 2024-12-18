// EXERCICE FONCTIONCONSTANTE
function retourne33() {
    return 33;
}
console.log(retourne33());

// EXERCICE BONJOURUNTEL
function bonjour(nom) {
    console.log("Bonjour " + nom);
}
bonjour("Marcel");

// EXERCICE FONCTIONCALCUL
function calcul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw "Erreur: les paramètres ne sont pas des nombres";
    return a * b + a + b;
}
try {
    console.log(calcul(2, 3));
} catch (error) {
    console.log(error);

}
try {
    console.log(calcul(2, "3"));
}
catch (error) {
    console.log(error);
}

// EXERCICE FONCTIONCONTROLETABLEAU
function controleTableau(tab) {
    return tab.every(element => typeof element === 'number');
}
console.log(controleTableau([1, 2, 3]));
console.log(controleTableau([1, "2", 3]));
console.log(controleTableau([]));

/// EXERCICE FONCTIONMOYENNE

function moyenne(tab) {
    if (!Array.isArray(tab)) throw "Erreur: le paramètre n'est pas un tableau";
    if (tab.length === 0) throw "Erreur: le tableau est vide";
    if (!controleTableau(tab)) throw "Erreur: le tableau contient des éléments qui ne sont pas des nombres";
    return tab.reduce((a, b) => a + b) / tab.length; {

    }
}

try {
    console.log(moyenne([1, 2, 3, 4, 5]));

}
catch (e) {
    console.log(e);
}
try {

    console.log(moyenne([]));

}
catch (e) {
    console.log(e);
}
try {

    console.log(moyenne("chaine"));
}
catch (e) {
    console.log(e);
}


// EXERCICE FONCTIONMAJ
function majuscule(str) {
    if (typeof str !== 'string') throw "Erreur: le paramètre n'est pas une chaine de caractères";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(majuscule("bonjour"));

// EXERCICE FONCTIONPHRASEMAJ

function phraseMaj(str) {
    if (typeof str !== 'string') throw "Erreur: le paramètre n'est pas une chaine de caractères";
    return str.split(' ').map(majuscule).join(' ');
}
try {
    console.log(phraseMaj("bonjour tout le monde"));
} catch (e) { console.log(e); }


// EXERCICE FONCTION QUI RETOURNE UNE FONCTION

function retourneFonction(n) {
    return function (nb) {
        return nb * n;
    };
}
const fonction1 = retourneFonction(2);
const fonction2 = retourneFonction(3);
console.log(fonction1(5));
console.log(fonction2(5));

// EXERCICE : GESTIONNAIRE DE TACHES
function creerGestionnaire() {
    const taches = [];
    return {
        ajouterTache: function (description) {
            taches.push({ description: description, terminee: false });
        },
        terminerTache: function (index) {
            if (taches[index]) {
                taches[index].terminee = true;
            }
        },
        afficherTaches: function () {
            taches.forEach((tache, index) => {
                console.log(`${index + 1}. ${tache.description} - ${tache.terminee ? "Terminée" : "Non terminée"}`);
            });
        }
    };
}

const gestionnaire = creerGestionnaire();
gestionnaire.ajouterTache("Faire les courses");
gestionnaire.ajouterTache("Nettoyer la maison");
gestionnaire.terminerTache(0);
gestionnaire.afficherTaches();


