
# SafeBase
 O SafeBase é um site de vitrine de jogos, especificamente jogos que já joguei ou tenho interesse em jogar, ele é um projeto de estudo que estou fazendo para melhorar minha lógica e estrutura de um projeto web, que pode futuramente ser integrado a desktop e mobile.

 O site terá: 
 - LeadingPage(Home), onde terá jogos em destaque por exemplo "O último que zerei", "Jogando" ou "Favoritos". 
 - Library(A biblioteca), todos os jogos que ja joguei, com sistema de filtros para separa-los em suas respectivas categórias.
 - GamePage(A página do game selecionado), aqui estará o Trailer(puxando o link original do criador e empresa), Screenshots minhas e databank disponibilizada pelo próprio DEV, reviews gerais, guias caso tenha.

## Tecnologias usadas

Por enquanto são:
- HTML
- CSS
- JAVASCRIPT
- JSON

(Ainda pretendo estudar REACT e talvez aplica-lo no projeto ou em um futuro)

## Lógica de arquivos

safe-base/
├── index.html              # Página principal (Vitrine)
├── game-details.html       # Página individual de cada jogo
├── assets/                 # Arquivos estáticos que não mudam
│   ├── css/
│   │   ├── styles.css      # Estilos globais (fontes, cores, reset)
│   │   ├── home.css        # Estilos específicos da home
│   │   └── game-card.css   # Estilos dos cards de jogos
│   ├── images/
│   │   ├── icons/          # Ícones de plataformas (Steam, Epic)
│   │   └── screenshots/    # Fotos dos jogos que você adicionar
│   └── data/
│       └── games.json      # Onde ficam as informações dos seus jogos
├── js/                     # Toda a lógica do seu sistema
│   ├── main.js             # Carrega os jogos na Home
│   ├── details.js          # Lógica para mostrar o trailer e fotos na página de detalhes
│   └── api.js              # (Opcional) Funções para ler o JSON (Fetch API)
└── README.md               # Documentação do projeto (essencial para o seu time)

# AVISO

 Esse site não pretende desfazer ou se aproveitar do contéudo original das empresas e game dev's, os videos relacionados de propriedade do criador são linkados aos seus respectivos canais e sites, já os videos de gameplay caso tiverem são gameplays minhas, já que pretendo adicionar isso também, mas caso não for também será conectado ao criador para receber os devidos créditos, caso queira que eu remova o video mesmo assim estou a disposição.

 Obrigado pela atenção, espero que goste da experiência! Quaisquer dúvidas do como, porque e escolhas feitas, leia o arquivo "DOCUMENTATION.md"!
