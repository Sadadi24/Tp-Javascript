
function initialiserDonnees() {
    let data = {
        "polluant": "CO2",
        "unite": "milliards de tonnes",
        "annee": 2017,
        "pays": [
            { "nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn" },
            { "nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us" },
            { "nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in" },
            { "nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru" },
            { "nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp" },
            { "nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de" },
            { "nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr" },
            { "nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir" },
            { "nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca" }
        ]
    };

    document.getElementById("titre").innerText = `${data.polluant} (${data.unite})`;
    document.getElementById("annee").innerText = data.annee;

    let listePays = document.getElementById("listePays");
    data.pays.forEach(pays => {
        let paysInfo = document.createElement("div");
        paysInfo.innerText = `Nom: ${pays.nom}, Valeur: ${pays.valeur}, Pourcentage: ${pays.pourcentage}%, Code: ${pays.code}`;
        listePays.appendChild(paysInfo);
    });
}
function initialiserDonneesTab() {


    let data = {
        "polluant": "CO2",
        "unite": "milliards de tonnes",
        "annee": 2017,
        "pays": [
            { "nom": "Chine", "valeur": 9.26, "pourcentage": 28.2, "code": "cn" },
            { "nom": "Etats-Unis", "valeur": 4.76, "pourcentage": 14.5, "code": "us" },
            { "nom": "Inde", "valeur": 2.16, "pourcentage": 6.6, "code": "in" },
            { "nom": "Russie", "valeur": 1.54, "pourcentage": 4.7, "code": "ru" },
            { "nom": "Japon", "valeur": 1.13, "pourcentage": 3.4, "code": "jp" },
            { "nom": "Allemagne", "valeur": 0.72, "pourcentage": 2.2, "code": "de" },
            { "nom": "Corée du Sud", "valeur": 0.6, "pourcentage": 1.8, "code": "kr" },
            { "nom": "Iran", "valeur": 0.57, "pourcentage": 1.7, "code": "ir" },
            { "nom": "Canada", "valeur": 0.55, "pourcentage": 1.7, "code": "ca" }
        ]
    };

    document.getElementById("titre").innerText = `Pays les plus polluants pour le ${data.polluant} (${data.unite}) en ${data.annee}`;



    let tbody = document.getElementById("corps");
    data.pays.forEach(pays => {
        let tr = document.createElement("tr");
        let tdDrapeau = document.createElement("td");
        let imgDrapeau = document.createElement("img");
        imgDrapeau.src = `https://flagcdn.com/24x18/${pays.code}.png`;
        tdDrapeau.appendChild(imgDrapeau);
        tr.appendChild(tdDrapeau);

        let tdNom = document.createElement("td");
        tdNom.innerText = pays.nom;
        tr.appendChild(tdNom);

        let tdValeur = document.createElement("td");
        tdValeur.innerText = pays.valeur;
        tr.appendChild(tdValeur);

        let tdPourcentage = document.createElement("td");
        tdPourcentage.innerText = pays.pourcentage;
        tr.appendChild(tdPourcentage);

        tbody.appendChild(tr);
    });
}
