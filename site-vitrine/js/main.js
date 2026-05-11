fetch("./assets/data/games.json")

  .then(response => response.json())

  .then(data => {

    const games = data.games;

    const container = document.getElementById("games-container");

    games.forEach(game => {

      container.innerHTML += `

        <div class="game-card">

          <img src="${game.cover}" alt="${game.title}" onclick="irGameDetails()">

          <div class="game-info">

            <h3>${game.title}</h3>

            <p>${game.status.review}</p>

            <div class="genres">

              ${game.genres.map(genre =>
                `<span>${genre}</span>`
              ).join("")}

            </div>

          </div>

        </div>

      `;

    });

  })

  .catch(error => {
    console.error("Erro ao carregar games.json:", error);
  });