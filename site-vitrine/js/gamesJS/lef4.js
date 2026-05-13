async function loadGame(){
  try{
    const response = await fetch("./assets/data/games.json");
    
    const games = await response.json();
    
    const game = games.find(g => g.id === "left-4-dead-2");

    if (!game) {

      document.getElementById("details-container").innerHTML =
       "<h1>Jogo não encontrado, tente novamente mais tarde</h1>";
       return;
    }

    document.getElementsById("details-container").innerHTML = 
    `
       <div class="game-details">
        <h1>${game.title}</h1> 
        <img src="${game.banner}" alt="${game.title}" >
        <p>${game.description}</p>
       </div>
    `;

  }

catch(error) {
    console.error("Error ao carregar games.json:", error);
 }
}
