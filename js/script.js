//Question 1
var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} 
else {
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


//Question 4
function whatIDontLike(myDislikes) {
	if (typeof myDislikes !== "string") {
		console.log("Please send in a string");
	} 
	else {
		console.log("I don't like " + myDislikes);
	}
}

whatIDontLike("celery");


//Question 5
function subtractTwoNumbers(number1, number2) {
	var convertedNum1 = parseFloat(number1);
	var convertedNum2 = parseFloat(number2);

	if (isNaN(convertedNum1) || isNaN(convertedNum2)) {
	return "Invalid argument(s)";
}	
	return convertedNum1 - convertedNum2;
}

var subtractionDiv = document.querySelector("#subtraction");
subtractionDiv.innerHTML = subtractTwoNumbers("10", 7.3);


//Question 6

var buttonPage = document.querySelector(".page");

buttonPage.onclick = function() {

	var buttonTitle = document.querySelector("title");
	var buttonBody = document.querySelector("body");
	var buttonHeading = document.querySelector("h1");
	var buttonList = document.querySelector("ul");

    buttonTitle.innerHTML = "Updated title";
	buttonBody.style.backgroundColor = "yellow"; 
	buttonHeading.style.color = "green";
	buttonHeading.style.fontFamily = "impact";
	buttonHeading.innerHTML = "<a href=#>" + buttonHeading.innerHTML + "</a>";
	buttonList.style.listStyleType = "none";
	buttonList.style.padding = "0";
};

//Question 7
