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

document.addEventListener("DOMContentLoaded", function() {
  const navBar = document.querySelector('.top-header');
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const hamburgerBars = document.querySelectorAll('.bar');

  // Gérer le scroll pour ajouter/retirer la classe 'scrolled'
  window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const skillsSection = document.querySelector('.arrow');
      const skillsSectionPosition = skillsSection.offsetTop;

      if (scrollPosition >= skillsSectionPosition) {
          navBar.classList.add('scrolled');
          hamburgerBars.forEach(bar => bar.classList.add('scrolled'));
      } else {
          navBar.classList.remove('scrolled');
          hamburgerBars.forEach(bar => bar.classList.remove('scrolled'));
      }
  });

  // Gérer le clic sur le bouton hamburger
  hamburger.addEventListener("click", function(event) {
      nav.classList.toggle("show");
      hamburgerBars.forEach(bar => bar.classList.toggle('active'));
      event.stopPropagation(); // Empêche le clic de se propager au document
  });

  // Fermer le menu en cliquant en dehors
  window.addEventListener("click", function(event) {
      if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
          nav.classList.remove("show");
          hamburgerBars.forEach(bar => bar.classList.remove('active'));
      }
  });
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
  contentContainer.classList.toggle("toggle");
  
  const contentHeight = contentContainer.scrollHeight;
  
  if (contentContainer.classList.contains("toggle")) {
    contentContainer.style.maxHeight = contentHeight + "px";
  } else {
    contentContainer.style.maxHeight = 0;
  }
});




// --------------------- Formulaire de contact -------------------------------

var contactBtn = document.getElementById("contact-btn");
var contactModal = document.getElementById("contact-modal");

var closeBtn = document.getElementsByClassName("close")[0];

contactBtn.onclick = function() {
  contactModal.style.display = "block";
}

closeBtn.onclick = function() {
  contactModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
}

