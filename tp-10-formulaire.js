async function calculateSum(dataPays) {
    const min = parseFloat(document.getElementById('minimum').value) || 0;
    const max = parseFloat(document.getElementById('maximum').value) || Number.MAX_VALUE;

    if (min > max) {
        alert('Le minimum doit être inférieur ou égal au maximum.');
        return [];
    }

    if (min < 0 || max < 0) {
        alert('Les valeurs doivent être positives.');
        return [];
    }
    const newData = dataPays;
    newData.pays = newData.pays.filter(pays => pays.valeur >= min && pays.valeur <= max);
    return newData;
}

document.addEventListener('DOMContentLoaded', async function () {
    const data = await getData();
    displayData(data);
});

document.getElementById("valider").addEventListener('click', async function () {
    const data = await getData();
    const filteredData = await calculateSum(data);
    displayData(filteredData);

});

function getData() {
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
            return data;
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

async function displayData(data) {
    document.getElementById("titre").innerText = `Pays les plus polluants pour le ${data.polluant} (${data.unite}) en ${data.annee}`;
    let tbody = document.getElementById("corps");
    tbody.innerHTML = ''; // Clear existing rows

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