function getAllData() {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return fetch('https://digicode.cleverapps.io/json/pays/pollution', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
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
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}