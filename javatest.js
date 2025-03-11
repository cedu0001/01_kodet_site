
/* Dette script sørger for, 
at menuen åbner og lukker, 
når man klikker på hamburger-knappen. */

/* Henter hamburger-knappen (hamMenu)
og menuen (offScreenMenu), så vi kan manipulere dem. */
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

/* Lytter efter et klik på hamburger-knappen.
Når den klikkes, tilføjer eller fjerner den .active-klassen på både menuen og hamburger-knappen.
Det betyder:

    Hvis menuen er skjult → Den glider ind.
    Hvis menuen er åben → Den glider ud igen. */

  hamMenu.addEventListener('click', () => { 
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

/* Hvordan spiller det hele sammen? mellem html, css og js

Første gang man åbner siden, er menuen skjult (right: -450px).
Når man klikker på hamburger-knappen, sker to ting:
        Den får klassen .active, som ændrer udseendet (bliver til et "X").
        Menuen får også .active, som flytter den ind på skærmen (right: 0).
    Klikker man igen, fjernes .active, og menuen glider tilbage ud. */
