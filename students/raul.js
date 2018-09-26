'use strict';

function main() {

  //TIME OUT
  var time = document.querySelector('.time-out');
  time.addEventListener('click', setTime)
  var stop = document.querySelector('.stop-time');
  stop.addEventListener('click', stopTime)
  var timeOutID = 0;

  function setTime() {
    var firstText = document.createElement('p');
    firstText.innerText = 'Si no lo paras es porque eres feo.'
    var alert = document.querySelector('.timer')
    alert.appendChild(firstText)

      timeOutID = setTimeout(function(time) {
      var paragraph = document.createElement('h1');
      paragraph.innerText = 'FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEOFEO FEO FEO FEO FEO FEO FEOFEO FEO FEO FEO FEO FEO FEOFEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO FEO';
      var timer = document.querySelector('.timer');
      timer.appendChild(paragraph)
      stopTime()   // al clearTimeOut hay que volver a llamarlo. Mezclar las llamadas.
    }, 2000)
  }

  function stopTime() {
    clearTimeout(timeOutID)
  }
  






  //END TIME OUT

  //SEARCH BAR JS
  var input = document.querySelector('.input-students input');
  input.addEventListener('keyup', handleKeyUp)

  input.addEventListener('click', function(event) {
    event.stopPropagation();    // Esto se hace para que solo cuando hagamos click en la caja no borre los resultados.
  });
  
  var searchResultsElement = document.querySelector('.search-results');

  document.body.addEventListener('keyup', function(event) {
    if (event.key === 'Escape') {
      searchResultsElement.innerHTML = '';
      return;
    }
  });

  document.body.addEventListener('click', function() {
    searchResultsElement.innerHTML = '';
  });

  document.body

  function findStudents(searchTerm) {
    var results = [];
    if (searchTerm) {
      var results = students.filter(function(student) {
        var studentName = student.name.toLowerCase();
        if (studentName.indexOf(searchTerm) !== -1) {
          return true;
        }
      })
    }
    return results;
  }

  function displayResults(results) {
    searchResultsElement.innerHTML = '';
    var searchResultsListElement = document.createElement('ul');
    results.forEach(function(result) {
      var resultLink = document.createElement('a');
      resultLink.innerText = result.name;
      resultLink.setAttribute('href', '../' + result.url) // setAttribute coge el atributo HTML. Se define con el atributo en string y su valor.
      var resultListItem = document.createElement('li');
      resultListItem.appendChild(resultLink);
      searchResultsListElement.appendChild(resultListItem);
    })
    searchResultsElement.appendChild(searchResultsListElement);
  }

  function  handleKeyUp(event) {
    var searchTerm = input.value.toLowerCase();
    var results = findStudents(searchTerm);
    displayResults(results);
  }
  // END SEARCH BAR JS


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


 