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
    id: 'fnf',
    title: 'fnf (friday night funkin'),
    url: 'https://fnf.kdata1.com/2025/fnf/7500/',
    image: 'https://ih1.redbubble.net/image.2228225012.4308/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
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
