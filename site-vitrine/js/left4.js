function getScoreClass(score) {
  if (score >= 8) return "score-high";
  if (score >= 5) return "score-medium";
  return "score-low";
}

async function loadGame(){
  try{
    const response = await fetch("/site-vitrine/assets/data/games.json");
    
    const dados = await response.json();
    
    const game = dados.games.find(g => g.id === "left-4-dead-2");

    if (!game) {

      document.getElementById("details-container").innerHTML =
       "<h1>Jogo não encontrado, tente novamente mais tarde</h1>";
       return;
    }

      document.getElementById("details-container").innerHTML =`
      <section class="container-header">

         <div class=column><img src="${game.banner}" alt="${game.title}" ></div>
        
         <div class=column>
         <h1>${game.title}</h1> 
         <p class="p-description">${game.description}</p>
         </div>

      </section>

      <section class="game-details"> 

        <div class="review">
          <h2>Review Pessoal</h2>
          <p>${game.status.reviewlong}</p>
        </div>

        <div class="game-status-container">
         <div class="status-badges">
            <h2>Status Geral</h2>          
            ${game.status.played ? '<span class="badge badge-played" title="Played">🎮 Played</span>': ''} 
            ${game.status.favorite ? '<span class="badge badge-favorite" title="Favorite?">⭐ Favorite</span>': ''} 
            ${game.status.finished ? '<span class="badge badge-finished" title="Finished?">🏆 Finished</span>': ''}           
         </div>
        
         <div class="score-circle ${getScoreClass(game.status.score)}" 
           <span>${game.status.score}</span>
         </div>
      </section>
    `;
  
  }

catch(error) {
    console.error("Error ao carregar games.json:", error);
 }
}

loadGame();