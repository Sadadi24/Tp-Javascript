// Déclarez une variable contenant du JSON
const societe = {
    "nom": "Google",
    "siege": ["Googleplex", "Mountain View", "California", "United States"],
    "fondateurs": [{ "nom": "Larry Page", "date_naissance": "26/03/1973", "lieu_naissance": "East Lansing,Michigan" }, { "nom": "Larry Page", "date_naissance": "26/03/1973", "lieu_naissance": "East Lansing,Michigan" }],
    "chiffre_affaire": { 2008: 16.49, 2012: 37.97, 2016: 89.46, 2018: 136.2 }
}

//Affichage des fondateurs de la société
console.log("Fondateur de la société");
societe.fondateurs.forEach(fondateur => console.log(`${fondateur.nom}, né le ${fondateur.date_naissance}, à ${fondateur.lieu_naissance}`)
)
//Affichage des CA de la société
console.log("\nChiffre d'affaires en milliards de $ :");
for (let annee in societe.chiffre_affaire) {
    console.log(`-${annee} :${societe.chiffre_affaire[annee]}`);

}