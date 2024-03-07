document.addEventListener("DOMContentLoaded", function () {
  const alimentsContainer = document.getElementById("aliments-container");

  fetch('recipe.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(aliment => {
        const alimentDiv = document.createElement('div');
        alimentDiv.className = 'aliment';

        const title = document.createElement('h3');
        title.textContent = aliment.title;
        alimentDiv.appendChild(title);

        const img = document.createElement('img');
        img.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
        alimentDiv.appendChild(img);

        const calories = document.createElement('p');
        calories.textContent = `Calories: ${aliment.calories}`;
        alimentDiv.appendChild(calories);

        const description = document.createElement('p');
        description.textContent = aliment.description;
        description.className = 'description'; // Ajout d'une classe pour cibler la description
        alimentDiv.appendChild(description);

        const oll = document.createElement('ol');
        const lii = document.createElement('li');
        lii.textContent = "oui1";
        oll.appendChild(lii);
        alimentDiv.appendChild(oll);

        const button = document.createElement('button');
        button.textContent = '▼';
        button.addEventListener('click', function () {
          toggleDescription(description);
          if (this.textContent == "▲") {
            this.textContent = "▼";
          }
          else {
            this.textContent = "▲"
          }
        });
        alimentDiv.appendChild(button);

        alimentsContainer.appendChild(alimentDiv);
      });
    })
    .catch(error => console.error('Erreur de chargement du fichier JSON :', error));
});

function toggleDescription(descriptionElement) {
  // Utilisez la classe 'visible' pour afficher ou masquer la description
  descriptionElement.classList.toggle('visible');
}

function time_format(time, nb_char) {
  s = `${time}`;
  while (s.length < nb_char) {
    s = '0' + s;
  }
  return s;
}

function formatDuree(milliseconds) {
  // Conversion en secondes, minutes, heures, jours et années
  var seconds = Math.floor(milliseconds / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  // Calcul des parties restantes après la conversion en années, mois, jours, heures, minutes et secondes
  hours = hours % 24;
  minutes = minutes % 60;
  seconds = seconds % 60;

  // Formatage de la durée
  var formattedDuration = time_format(hours, 2) + ":" + time_format(minutes, 2) + ":" + time_format(seconds, 2);
  if (days != 0) {
    formattedDuration = days + " jours, " + formattedDuration;
  }

  return formattedDuration;
}

function update_date() {
  var x = new Date("2024/03/01 18:00:00").getTime();
  var y = new Date().getTime();
  document.getElementById("temps").innerText = formatDuree(y - x);
  console.log(formatDuree(y - x));
}

update_date();
setInterval(update_date, 1000);

// par exemple, où toute autre manière de récupérer la date
// alert(y - x);
// alert(new Date("2024/03/01 18:00:00").toLocaleString());
// var z = y - x;
// alert(formatDuree(z));

