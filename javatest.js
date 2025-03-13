
/* Dette script sørger for, 
at menuen åbner og lukker, 
når man klikker på hamburger-knappen. */

/* Henter hamburger-knappen (hamMenu)
og menuen (offScreenMenu), så vi kan manipulere dem. */
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');


/* Først går jeg ind of "finder" HTML elementerne med document.getElementById og gemmer dem som konstanter*/
const imageToToggle = document.getElementById('featuredopskrift-img')
const infoToToggle = document.getElementById('featuredopskrift-info')

/* Lav en variabel for at holde styr på om HTML elementerne bliver vist eller ej*/
var isDisplayed = true;

/* Lytter efter et klik på hamburger-knappen.
Når den klikkes, tilføjer eller fjerner den .active-klassen på både menuen og hamburger-knappen.
Det betyder:

    Hvis menuen er skjult → Den glider ind.
    Hvis menuen er åben → Den glider ud igen. */

  hamMenu.addEventListener('click', () => { 
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');


  /* Tjek variablerne "IsDisplayed" for om HTML elementerne bliver vist (isDisplayed == true) */
  if (isDisplayed) {

    /* Hvis de bliver vist, gem dem */
    imageToToggle.style.display = "none"
    infoToToggle.style.display = "none"

    /* Sæt variablen til 'false' */
    isDisplayed = false
  
  /*Hvis variable er false, hvis HTML elementerne*/ 
  } else if (isDisplayed == false)  {
    imageToToggle.style.display = "initial"
    infoToToggle.style.display = "initial"

    /* Sæt variablen til 'true */
    isDisplayed = true
  }
})

/* Hvordan spiller det hele sammen? mellem html, css og js

Første gang man åbner siden, er menuen skjult (right: -450px).
Når man klikker på hamburger-knappen, sker to ting:
        Den får klassen .active, som ændrer udseendet (bliver til et "X").
        Menuen får også .active, som flytter den ind på skærmen (right: 0).
    Klikker man igen, fjernes .active, og menuen glider tilbage ud. */
