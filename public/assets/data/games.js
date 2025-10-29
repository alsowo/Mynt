var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
  {
    id: 'osu',
    title: 'osu!',
    description: 'A web version of osu!',
    url: 'https://web-osu.github.io/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png'
  },
  {
    id: 'deltarune',
    title: 'DELTARUNE',
    description: 'the web port required a save file to verify ownership but i just used devtools lol',
    url: 'https://deltarune.win/play/play.html',
    image: 'https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fw0sn0rvlasw51.png'
  },
  {
    id: 'undertale',
    title: 'UNDERTALE',
    url: 'https://undertale.win/play/play.html',
    image: 'https://pm1.aminoapps.com/6352/aecbd1fcc0a127674f063649d88cc4f343610adb_hq.jpg'
  },
  {
    id: 'fnf',
    title: 'fnf (friday night funkin)',
    url: 'https://fnf.kdata1.com/2025/fnf/7500/',
    image: 'https://ih1.redbubble.net/image.2228225012.4308/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
  },
  {
    id: 'gd',
    title: 'Geometry Dash',
    description: 'I somehow got the offical gd lite on here',
    url: 'https://rawcdn.githack.com/genizy/google-class/main/gdlite/index.html',
    image: 'https://static.wikia.nocookie.net/logopedia/images/4/41/Geometry_Dash_Icon.svg/revision/latest?cb=20220220121501'
  },
  {
    id: 'eagler',
    title: 'EaglerCraft',
    description: 'yes this is tuffclient',
    url: 'https://eaglercraft.dev/clients/TuffClientWASM/index.html',
    image: 'https://static.wikia.nocookie.net/eaglercraft-reboot/images/a/a3/Eaglercraft_Origin.jpeg/revision/latest/smart/width/250/height/250?cb=20241202211458'
  },
  {
    id: 'omori',
    title: 'Omori',
    url: 'https://rawcdn.githack.com/genizy/web-port/4e018d7f2ca2b3d77ecfd0123d2926421e2b26a5/omori-fixed/index.html',
    image: 'https://static.wikia.nocookie.net/omori/images/8/89/Omori_Neutral_%28No_Background%29.gif/revision/latest?cb=20211217073238'
  },
  {
    id: 'yellow',
    title: 'UNDERTALE YELLOW',
    url: 'https://cdn.jsdelivr.net/gh/genizy/web-port@main/undertale-yellow/',
    image: 'https://media.indiedb.com/images/downloads/1/115/114884/DBThumb.png'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customGameId = "customgame"; // replace with the id of the game you want to pin
var customGame = games.find(function (game) {
  return game.id === customGameId;
});
games.splice(games.indexOf(customGame), 1);
games.unshift(customGame);

var customgames = getObj("customgames")
if (customgames) customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")
