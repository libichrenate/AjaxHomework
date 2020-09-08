var baseUrl = "https://games-world.herokuapp.com";
var allGames;
var game;

const displayGames = (post) => {
  var postList = document.getElementById("gamesList");
  var item = document.createElement("li");
  var img = document.createElement("IMG");
  img.src = post.imageUrl;
  item.innerHTML = post.title + ": " + post.description;
  postList.appendChild(img);
  postList.appendChild(item);
};

fetch(baseUrl + "/games", { method: "GET" })
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResp) {
    allGames = jsonResp;
    allGames.forEach(function (element) {
      displayGames(element);
    });
  });
