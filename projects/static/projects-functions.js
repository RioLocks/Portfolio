// -------------------------- Fonction pour afficher les stratégies -------------------------------

document.getElementById('showStrategiesBtn').addEventListener('click', function() {
    fetch('/projects/data/stocks-analysis/strategies.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('strategiesContent').textContent = JSON.stringify(data, null, 2);
            document.getElementById('strategiesModal').style.display = 'block';
        })
        .catch(error => console.error('Erreur lors de la récupération des stratégies:', error));
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('strategiesModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('strategiesModal')) {
        document.getElementById('strategiesModal').style.display = 'none';
    }
});


// -------------------------- Fonction pour afficher le tableau des strats -------------------------------


// Fonction pour ouvrir le modal
function openModal() {
    document.getElementById("csvModal").style.display = "block";
    replaceNewLines();
}

// Fermer le modal lorsque l'utilisateur clique en dehors du modal
window.onclick = function(event) {
    var modal = document.getElementById("csvModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementsByClassName('close')[1].addEventListener('click', function() {
    document.getElementById('csvModal').style.display = 'none';
});

// Ajouter l'événement au bouton pour ouvrir le modal
document.getElementById("openModalBtn").addEventListener("click", openModal);



// ------------------Fonction pour créer un graphique à partir des données-------------------------

function createChart(ctx, title, labels, data) {
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                datalabels: {
                    color: '#fff',
                    formatter: (value, context) => {
                        let label = context.chart.data.labels[context.dataIndex];
                        return `${label}: ${value}%`;
                    },
                    anchor: 'end',
                    align: 'end',
                    offset: 10,
                    clip: false
                }
            },
            title: {
                display: true,
                text: title
            }
        },
        plugins: [ChartDataLabels]
    });
}

// Données pour chaque portefeuille
const rendementData = {
    labels: ['High Div Yield', 'GARP', 'Profit', 'Valuation', 'Security', 'Crypto'],
    data: [25, 15, 20, 15, 15, 10]
};

const croissanceData = {
    labels: ['GARP', 'High Growth', 'Profit', 'Valuation', 'Security', 'Crypto'],
    data: [25, 15, 15, 15, 10, 20]
};

const securiteData = {
    labels: ['Security', 'Low Vol', 'Profit', 'High Div Yield', 'Liquidity', 'Crypto'],
    data: [35, 20, 15, 10, 10, 10]
};

const risqueRendementData = {
    labels: ['High Growth', 'Valuation', 'Small Cap', 'High Div Yield', 'Risk Mgmt', 'Crypto'],
    data: [30, 15, 15, 10, 10, 20]
};

const diversificationData = {
    labels: ['High Div Yield', 'GARP', 'Security', 'Profit', 'Valuation', 'Crypto'],
    data: [20, 15, 20, 15, 15, 15]
};

// Création des graphiques
window.onload = function() {
    const rendementCtx = document.getElementById('rendementChart').getContext('2d');
    createChart(rendementCtx, 'RENDMENT', rendementData.labels, rendementData.data);

    const croissanceCtx = document.getElementById('croissanceChart').getContext('2d');
    createChart(croissanceCtx, 'CROISSANCE', croissanceData.labels, croissanceData.data);

    const securiteCtx = document.getElementById('securiteChart').getContext('2d');
    createChart(securiteCtx, 'SÉCURITÉ', securiteData.labels, securiteData.data);

    const risqueRendementCtx = document.getElementById('risqueRendementChart').getContext('2d');
    createChart(risqueRendementCtx, 'RISQUE/RENDEMENT', risqueRendementData.labels, risqueRendementData.data);

    const diversificationCtx = document.getElementById('diversificationChart').getContext('2d');
    createChart(diversificationCtx, 'DIVERSIFICATION', diversificationData.labels, diversificationData.data);
}



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementsByClassName('tablinks')[0].click();

