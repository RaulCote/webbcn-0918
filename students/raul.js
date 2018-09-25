'use strict';

function main() {


  var perfilButton = document.querySelector('button.intereses-button')
  var experimentsButton = document.querySelector('button.experiments-button')
  var section = document.querySelector('div.intereses')
  var sectionExp = document.querySelector('section.experiments')


  function hidePerfil(e) {
    section.classList.toggle('hidden-button-1')
    if (section.classList.contains('hidden-button-1')) {
      e.currentTarget.innerText = 'Intereses';
    } else {
      e.currentTarget.innerText = 'Ocultar Intereses';
    }
  }

  function hideExp(e) {
    sectionExp.classList.toggle('hidden-button-1')
    if (section.classList.contains('hidden-button-1')) {
      e.currentTarget.innerText = 'Experimentos';
    } else {
      e.currentTarget.innerText = 'Ocultar Experimentos';
    }
  }

  perfilButton.addEventListener('click', hidePerfil)
  experimentsButton.addEventListener('click', hideExp)

}

window.addEventListener("load", main)


 