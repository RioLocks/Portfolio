// ------------------------ Fonction texte initial ----------------------------------

const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["mes compétences.", "mes projets.", "mes objectifs.", "mon parcours.", "comment me contacter."];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}


// ---------------------- Fonction pour le traitement de la navbar ------------------------

// Sélectionnez la barre de navigation
const navBar = document.querySelector('.top-header');

// Ajoutez un écouteur d'événement de défilement à la fenêtre
window.addEventListener('scroll', () => {
    // Récupérez la position de défilement de la page
    const scrollPosition = window.scrollY;
    
    // Récupérez la position de la section suivante (par exemple, la section des compétences)
    const skillsSection = document.querySelector('.arrow');
    const skillsSectionPosition = skillsSection.offsetTop;
    
    // Vérifiez si la position de défilement dépasse la position de la section des compétences
    if (scrollPosition >= skillsSectionPosition) {
        // Si oui, ajoutez la classe 'scrolled' à la barre de navigation
        navBar.classList.add('scrolled');
    } else {
        // Sinon, retirez la classe 'scrolled'
        navBar.classList.remove('scrolled');
    }
});





// ----------------------- Fonction pour la fleche fade-out --------------------------------
let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  // console.log(position);
  if (position <= 5) {
    arrow.classList.toggle("fade-in");
    arrow.classList.toggle("fade-out");
  }
});

// ------------------------- Fonction de l'accordeon -------------------------------------

const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((accordion) => {
  accordion.addEventListener("click", collapseAccordions);

  function collapseAccordions() {
    const activeAccordion = document.querySelector(".active");
    if (activeAccordion && activeAccordion !== accordion) {
      activeAccordion.classList.toggle("active");
      activeAccordion.nextElementSibling.style.maxHeight = 0;
    }

    accordion.classList.toggle("active");
    const accordionItemBody = accordion.nextElementSibling;

    if (accordion.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  }
});



// ------------------- Read More -----------------------

const contentContainer = document.querySelector(".content-container-2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // Ajoutez ou supprimez la classe "toggle" sur l'élément contentContainer
  contentContainer.classList.toggle("toggle");
  
  // Obtenez la hauteur du contenu réel
  const contentHeight = contentContainer.scrollHeight;
  
  // Vérifiez si la classe "toggle" est maintenant présente sur l'élément
  if (contentContainer.classList.contains("toggle")) {
    // Si oui, définissez la hauteur maximale sur la hauteur du contenu réel
    contentContainer.style.maxHeight = contentHeight + "px";
  } else {
    // Sinon, définissez la hauteur maximale sur 0 pour masquer le contenu
    contentContainer.style.maxHeight = 0;
  }
});




// --------------------- Formulaire de contact -------------------------------

// Obtenez le bouton de contact et le pop-up
var contactBtn = document.getElementById("contact-btn");
var contactModal = document.getElementById("contact-modal");

// Obtenez le bouton de fermeture
var closeBtn = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton "Contactez-moi", affichez le pop-up
contactBtn.onclick = function() {
  contactModal.style.display = "block";
}

// Lorsque l'utilisateur clique sur le bouton de fermeture (x), masquez le pop-up
closeBtn.onclick = function() {
  contactModal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors du pop-up, masquez-le également
window.onclick = function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
}

