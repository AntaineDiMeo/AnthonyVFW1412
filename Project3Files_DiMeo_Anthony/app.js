var loadFile = require("Project3");


Titanium.UI.setBackgroundColor("#FBFEFD");



var mainWindow = Titanium.UI.createWindow({
	title: "My First Window",
});
 var pokemonBackground = Ti.UI.createView({
 	backgroundImage: "pokeball.png",
 	height: 350,
 	width: 350
 });
 
 
var previousButton = Ti.UI.createButton({
	
});
var previousLabel = Ti.UI.createLabel({
	text: "<Previous",
	color: "#FBFEFD",
	font: {fontSize:14, fontFamily: "Arial Black"},
});
var previous = Ti.UI.createView({
	backgroundColor: "#C1444E",
	borderColor: "#000000",
	borderWidth: 1,
	borderRadius: 5,
	bottom: 5,
	height: 25,
	width: 150,
	left: 5,
});
var nextButton = Ti.UI.createButton({
});
var nextLabel = Ti.UI.createLabel({
	text: "Next>",
	color: "#FBFEFD",
	font: {fontSize:14, fontFamily: "Arial Black"},
});
var next = Ti.UI.createView({
	backgroundColor: "#C1444E",
	borderColor: "#000000",
	borderWidth: 1,
	borderRadius: 5,
	bottom: 5,
	height: 25,
	width: 150,
	right: 5
});
var headerLabel = Ti.UI.createLabel({
	text: "Charmander VS. Bulbasaur",
	color: "#FBFEFD",
	font: {fontSize: 14, fontFamily: "Arial Black"},
	left: 15,
	right: 15,
	height: Ti.UI.SIZE
});

var headerView = Ti.UI.createView({
	backgroundColor: "#C1444E",
	borderColor: "#000000",
	borderWidth: 1,
	borderRadius: 5,
	height: 50,
	top: 20,
	left: 5,
	right: 5
});

var popUp = Ti.UI.createView({
	backgroundImage:"Charmander.png",
	borderColor: "#000000",
	borderRadius: 10,
	width: 100,
	height: 100,
});
popUpButton= Ti.UI.createButton({
	width: 100,
	height: 100
});
var changeImage = function() {
	popUp.backgroundImage = "bulbasaur.png";
};

			
mainWindow.add(pokemonBackground);

mainWindow.add(previous);
previous.add(previousLabel);
previous.add(previousButton);

mainWindow.add(next);
next.add(nextLabel);
next.add(nextButton);

headerView.add(headerLabel);
mainWindow.add(headerView);

mainWindow.add(popUp);
popUp.add(popUpButton);
popUp.add(changeImage);






next.addEventListener("click", function(changeImage) {
	popUp.backgroundImage = "bulbasaur.png";
});
previous.addEventListener("click", changeImage);

	mainWindow.open();
	mainWindow.open();
