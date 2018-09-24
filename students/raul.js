'use strict';

function main() {


  var perfilButton = document.querySelector('button.perfil-button')
  var experimentsButton = document.querySelector('button.experiments-button')
  var section = document.querySelector('section.section')
  var sectionExp = document.querySelector('section.experiments')


  function hidePerfil(e) {
    section.classList.toggle('hidden-button-1')
    if (section.classList.contains('hidden-button-1')) {
      e.currentTarget.innerText = 'Mostrar Perfil';
    } else {
      e.currentTarget.innerText = 'Ocultar Perfil';
    }
  }

  function hideExp(e) {
    sectionExp.classList.toggle('hidden-button-1')
    if (section.classList.contains('hidden-button-1')) {
      e.currentTarget.innerText = 'Mostrar Perfil';
    } else {
      e.currentTarget.innerText = 'Ocultar Perfil';
    }
  }

  perfilButton.addEventListener('click', hidePerfil)
  experimentsButton.addEventListener('click', hideExp)

}

window.addEventListener("load", main)


 