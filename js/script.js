//Question 1
var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

//Question 2
var selectedNumber = 20;

for (var i = 15; i <= 25; i++) {
    if (selectedNumber === 17 || selectedNumber === 20) {
        console.log(selectedNumber);
    }
}

//Question 3
var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	}
];

var gamesContainer = document.querySelector("ul");

for (var i = 0; i < games.length; i++) {
   
    if (games[i].rating <= 3.5 && games[i].rating > 0) {
        
    gamesContainer.innerHTML += "<li>" + games[i].title + ": " + games[i].rating + "</li>";
       
    console.log(games[i].title + ": " + games[i].rating);

    }
}

