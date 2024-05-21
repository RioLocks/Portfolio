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


