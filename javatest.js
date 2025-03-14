
/* Dette script sørger for, 
at menuen åbner og lukker, 
når man klikker på hamburger-knappen. */

/* Henter hamburger-knappen (hamMenu)
og menuen (offScreenMenu), så vi kan manipulere dem. */
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

  hamMenu.addEventListener('click', () => { 
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})
  /* Lytter efter et klik på hamburger-knappen.
Når den klikkes, tilføjer eller fjerner den .active-klassen på både menuen og hamburger-knappen.
Det betyder:

   /*  Hvis menuen er skjult → Den glider ind.
    Hvis menuen er åben → Den glider ud igen. */

  /* Hvordan spiller det hele sammen? mellem html, css og js

Første gang man åbner siden, er menuen skjult (right: -450px).
Når man klikker på hamburger-knappen, sker to ting:
        Den får klassen .active, som ændrer udseendet (bliver til et "X").
        Menuen får også .active, som flytter den ind på skærmen (right: 0).
    Klikker man igen, fjernes .active, og menuen glider tilbage ud. */


/* --------- SLIDESHOW LOGIK --------- */
let currentSlideIndex = 0; // Holder styr på hvilket slide der vises
const slides = document.querySelectorAll(".slide"); // Henter alle slides
const dots = document.querySelectorAll(".dot");

/* Funktion til at skifte slide */
function changeSlide(direction) {
    slides[currentSlideIndex].classList.remove("active"); // Skjuler nuværende slide
    dots[currentSlideIndex].classList.remove("active");

    currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length; // Opdaterer index til nyt slide
   
    slides[currentSlideIndex].classList.add("active"); // Viser det nye slide
    dots[currentSlideIndex].classList.add("active");
  }

 /* Funktion til at gå til specifikt slide */
 function currentSlide(n) {
  slides[currentSlideIndex].classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");

  currentSlideIndex = n;

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

/* --------- SWIPE FUNKTIONALITET (MOBIL) --------- */
let startX = 0;

/* Registrerer når brugeren starter et swipe */
document.querySelector(".slideshow-container").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX; // Gemmer startposition af touch
});

/* Registrerer når brugeren slipper efter et swipe */
document.querySelector(".slideshow-container").addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX; // Gemmer slutposition af touch
    
    if (startX - endX > 50) {
        changeSlide(1); // Swipe venstre → næste slide
    } else if (endX - startX > 50) {
        changeSlide(-1); // Swipe højre → forrige slide
    }
});
