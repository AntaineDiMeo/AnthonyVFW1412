Titanium.UI.setBackgroundColor("#FBFEFD");

var pokemonArray = ["Froakie", "Squirtle", "Bulbasaur", "Chespin", "Fennekin", "Charmander"];





var mainWindow = Titanium.UI.createWindow({
	title: "My First Window",
});
 var pokemonBackground = Ti.UI.createView({
 	backgroundImage: "pokeball.png",
 	height: 200,
 	width: 200
 });
var previousButton = Ti.UI.createButton({
	backgroundColor: "red",
	borderColor: "#000000",
	borderWidth: 1,
	borderRadius: 5,
	bottom: 30,
	height: 100,
	width: 150,

	
});
var headerLabel = Ti.UI.createLabel({
	text: "<Previous",
	color: "#FBFEFD",
	font: {fontSize:14, fontFamily: "Arial Black"},
});
var header = Ti.UI.createView({
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
var headerTwoLabel = Ti.UI.createLabel({
	text: "Next>",
	color: "#FBFEFD",
	font: {fontSize:14, fontFamily: "Arial Black"},
});
var headerTwo = Ti.UI.createView({
	backgroundColor: "#C1444E",
	borderColor: "#000000",
	borderWidth: 1,
	borderRadius: 5,
	bottom: 5,
	height: 25,
	width: 150,
	right: 5
});
var instructionsLabel = Ti.UI.createLabel({
	text: "The New Starters VS.The Original Starters",
	color: "#FBFEFD",
	font: {fontSize: 14, fontFamily: "Arial Black"},
	left: 15,
	right: 15,
	height: Ti.UI.SIZE
});

var instructionsView = Ti.UI.createView({
	backgroundColor: "#C1444E",
	borderColor: "#000000",
	borderWidth: 1,
	borderRadius: 5,
	height: 50,
	top: 20,
	left: 5,
	right: 5
});
var squirtleButton = Ti.UI.createButton({
	backgroundImage: "007_squirtle_by_pklucario-d5z1gj5.png",
	text: "Squirtle is a water type turtle pokemon.",
	font: {fontSize: 8, fontFamily: "Arial Black"},
	width: 100,
	height: 100
});
var squirtle = Ti.UI.createView({
	backgroundImage: "007_squirtle_by_pklucario-d5z1gj5.png",
	borderColor: "#000000",
	borderRadius: 10,
	width: 75,
	height: 75,
	top: instructionsView.top+instructionsView.height+10,
	right: 10
});
var froakieButton = Ti.UI.createButton({
	backgroundImage: "froakie_by_cl0setbr0ny-d6t1kvq.png",
	text: "Froakie is a water type frog pokemon.",
	font: {fontSize: 8, fontFamily: "Arial Black"},
	width: 100,
	height: 100
});
var froakie = Ti.UI.createView({
	backgroundImage:"froakie_by_cl0setbr0ny-d6t1kvq.png",
	borderColor: "#000000",
	borderRadius: 10,
	width: 75,
	height: 75,
	top: instructionsView.top+instructionsView.height+10,
	left: 10
});
var chespinButton = Ti.UI.createButton({
	backgroundImage: "650_chespin_by_pklucario-d5s4bim.png",
	text: "Chespin is a grass type acorn pokemon.",
	font: {fontSize: 8, fontFamily: "Arial Black"},
	width: 100,
	height: 100
});
var chespin = Ti.UI.createView({
	backgroundImage:"650_chespin_by_pklucario-d5s4bim.png",
	borderColor: "#000000",
	borderRadius: 10,
	width: 75,
	height: 75,
	top: instructionsView.top+instructionsView.height+110,
	left: 10
});
var bulbasaurButton = Ti.UI.createButton({
	backgroundImage: "Bulbasaur.jpg",
	text: "Bulbasaur is a grass type flower pokemon.",
	font: {fontSize: 8, fontFamily: "Arial Black"},
	width: 100,
	height: 100
});
var bulbasaur = Ti.UI.createView({
	backgroundImage:"Bulbasaur.jpg",
	borderColor: "#000000",
	borderRadius: 10,
	width: 75,
	height: 75,
	top: instructionsView.top+instructionsView.height+110,
	right: 10
});
var fennekinButton = Ti.UI.createButton({
	backgroundImage: "Fennekin.png",
	text: "Fennekin is a fire type fox pokemon.",
	font: {fontSize: 8, fontFamily: "Arial Black"},
	width: 100,
	height: 100
});
var fennekin = Ti.UI.createView({
	backgroundImage:"Fennekin.png",
	borderColor: "#000000",
	borderRadius: 10,
	width: 75,
	height: 75,
	top: instructionsView.top+instructionsView.height+210,
	left: 10
});
var charmanderButton = Ti.UI.createButton({
	backgroundImage: "Charmander.jpg",
	text: "Charmander is a fire type lizard pokemon.",
	font: {fontSize: 8, fontFamily: "Arial Black"},
	width: 100,
	height: 100
});
var charmander = Ti.UI.createView({
	backgroundImage:"Charmander.jpg",
	borderColor: "#000000",
	borderRadius: 10,
	width: 75,
	height: 75,
	top: instructionsView.top+instructionsView.height+210,
	right: 10
});
var resultsLabel = Ti.UI.createLabel({
	text: "Vaporean",
	left: 5,
	right: 5,
	color: "#fff",
	font: {fontSize: 18, fontFamily: "Helvetica"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});


mainWindow.add(pokemonBackground);
mainWindow.add(header);
header.add(headerLabel);
mainWindow.add(headerTwo);
headerTwo.add(headerTwoLabel);
instructionsView.add(instructionsLabel);
mainWindow.add(instructionsView);
mainWindow.add(froakie, squirtle, chespin, bulbasaur, charmander, fennekin);

header.add(previousButton);
previousButton.addEventListener("click", function(header) {
	console.log("It works");
});
	
headerTwo.add(nextButton);
squirtle.add(squirtleButton);
squirtleButton.addEventListener("click", function(squirtle) {
alert("Squirtle is a water type turtle pokemon.");
});
froakie.add(froakieButton);
froakieButton.addEventListener("click", function(froakie) {
alert("Froakie is a water type frog pokemon.");
});
chespin.add(chespinButton);
chespinButton.addEventListener("click", function(chespin){
alert("Chespin is a grass/fighting type acorn pokemon.");
});
bulbasaur.add(bulbasaurButton);
bulbasaurButton.addEventListener("click", function(bulbasaur) {
alert("Bulbasaur is a grass type flower pokemon");
});
fennekin.add(fennekinButton);
fennekinButton.addEventListener("click", function(fennekin) {
alert("Fennekin is a fire type fox pokemon");
});
charmander.add(charmanderButton);
charmanderButton.addEventListener("click", function(charmander) {
alert("Charmander is a fire type dragon pokemon");

});

mainWindow.open();


