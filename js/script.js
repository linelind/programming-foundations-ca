//Question 1
var outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} 
else {
    console.log("In stock");
}


//Question 2
var selectedNumber = 17;

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
    if (games[i].rating < 3.5 && games[i].rating > 0) {
		gamesContainer.innerHTML += "<li>" + games[i].title + ": " + games[i].rating + "</li>";
    }
}


//Question 4
function whatIDontLike(myDislike) {
	if (typeof myDislike !== "string") {
		console.log("Please send in a string");
	} 
	else {
		console.log("I don't like " + myDislike);
	}
}

whatIDontLike("celery");


//Question 5
function subtractTwoNumbers(num1, num2) {
	var convertedNum1 = parseFloat(num1);
	var convertedNum2 = parseFloat(num2);

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
var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

var buttonPrice = document.querySelector(".price");
var totalPrice = document.querySelector("#total");

var total = 0;

buttonPrice.onclick = function() {
	for (var i = 0; i < toys.length; i++) {

		var currentPrice = toys[i].price;

		if (currentPrice === null) {
			currentPrice = 0;
		}
	
		var convertedPrice = parseFloat(currentPrice);

		total += convertedPrice;
		totalPrice.innerHTML = "<p>" + total + "</p>";
	}	
}