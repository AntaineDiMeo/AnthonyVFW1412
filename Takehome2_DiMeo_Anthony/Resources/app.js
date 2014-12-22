var mainWindow = Ti.UI.createWindow({
	title: "Pokemon Wallpapers",
	backgroundColor: "black"
});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

Titanium.UI.KEYBOARD_DEFAULT;
Ti.API.info("Ti.Platform.displayCaps.density: " + Ti.Platform.displayCaps.density);
Ti.API.info("Ti.Platform.displayCaps.dpi: " + Ti.Platform.displayCaps.dpi);
Ti.API.info("Ti.Platform.displayCaps.platformHeight: " + Ti.Platform.displayCaps.platformHeight);
Ti.API.info("Ti.Platform.displayCaps.platformWidth: " + Ti.Platform.displayCaps.platformWidth);
if((Ti.Platform.osname === "iphone")||(Ti.Platform.osname === "ipad")||(Ti.Platform.osname === "android")){
  Ti.API.info("Ti.Platform.displayCaps.logicalDensityFactor: " + Ti.Platform.displayCaps.logicalDensityFactor);
}
if(Ti.Platform.osname === "android"){
  Ti.API.info("Ti.Platform.displayCaps.xdpi: " + Ti.Platform.displayCaps.xdpi);
  Ti.API.info("Ti.Platform.displayCaps.ydpi: " + Ti.Platform.displayCaps.ydpi);
}

var fireType = Ti.UI.createButton({
	backgroundColor: "ef4408",
	width: 80,
	height: 40,
	top: 50,
	left: 20
});
var fireText = Ti.UI.createLabel({
	text: "Fire",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "ff9000",
});
var fireWin = Ti.UI.createWindow({
	title: "Fire Type wallpapers",
	backgroundColor: "ef4408"
});
	var textField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#336699',
	top: 10,
	left: 10,
	width: 300, 
	height: 50
});

var waterType = Ti.UI.createButton({
	backgroundColor: "000cfc",
	width: 80,
	height: 40,
	top: 110,
	left: 20
});
var waterText = Ti.UI.createLabel({
	text: "Water",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "00c0ff"
});
var waterWin = Ti.UI.createWindow({
	title: "Water Type wallpapers",
	backgroundColor: "000cfc"
});
var grassType = Ti.UI.createButton({
	backgroundColor: "008d00",
	width: 80,
	height: 40,
	top: 170,
	left: 20
});
var grassText = Ti.UI.createLabel({
	text: "Grass",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "a8ff00"
});
var grassWin = Ti.UI.createWindow({
	title: "Grass Type wallpapers",
	backgroundColor: "008d00"
});
var psychicType = Ti.UI.createButton({
	backgroundColor: "8a0262",
	width: 80,
	height: 40,
	top: 230,
	left: 20
});
var psychicText = Ti.UI.createLabel({
	text: "Psychic",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "ff008a"
});
var psychicWin = Ti.UI.createWindow({
	title: "Psychic Type wallpapers",
	backgroundColor: "8a0262"
});
var poisonType = Ti.UI.createButton({
	backgroundColor: "c600ff",
	width: 80,
	height: 40,
	top: 290,
	left: 20
});
var poisonText = Ti.UI.createLabel({
	text: "Poison",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "8c0198"
});
var poisonWin = Ti.UI.createWindow({
	title: "Poison Type wallpapers",
	backgroundColor: "c600ff"
});
var rockType = Ti.UI.createButton({
	backgroundColor: "6c500c",
	width: 80,
	height: 40,
	top: 350,
	left: 20
});
var rockText = Ti.UI.createLabel({
	text: "Rock",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "a9a380"
});
var rockWin = Ti.UI.createWindow({
	title: "Rock Type wallpapers",
	backgroundColor: "6c500c"
});
var groundType = Ti.UI.createButton({
	backgroundColor: "d1c899",
	width: 80,
	height: 40,
	top: 410,
	left: 20
});
var groundText = Ti.UI.createLabel({
	text: "Ground",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "fff6c1"
});
var groundWin = Ti.UI.createWindow({
	title: "Ground Type wallpapers",
	backgroundColor: "d1c899"
});
var dragonType = Ti.UI.createButton({
	backgroundColor: "5d10e9",
	width: 80,
	height: 40,
	top: 230,
	
});
var dragonText = Ti.UI.createLabel({
	text: "Dragon",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "fcd70d"
});
var dragonWin = Ti.UI.createWindow({
	title: "Dragon Type wallpapers",
	headerColor: "5d10e9",
	backgroundColor: "5d10e9"
});
var steelType = Ti.UI.createButton({
	backgroundColor: "d0d3d3",
	width: 80,
	height: 40,
	top: 50,
	right: 20
});
var steelText = Ti.UI.createLabel({
	text: "Steel",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "8e8e8e"
});
var steelWin = Ti.UI.createWindow({
	title: "Steel Type wallpapers",
	backgroundColor: "d0d3d3"
});
var ghostType = Ti.UI.createButton({
	backgroundColor: "4e0895",
	width: 80,
	height: 40,
	top: 110,
	right: 20
});
var ghostText = Ti.UI.createLabel({
	text: "Ghost",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "dd00e5"
});
var ghostWin = Ti.UI.createWindow({
	title: "Ghost Type wallpapers",
	backgroundColor: "4e0895"
});
var normalType = Ti.UI.createButton({
	backgroundColor: "eae7ea",
	width: 80,
	height: 40,
	top: 170,
	right: 20
});
var normalText = Ti.UI.createLabel({
	text: "Normal",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "000000"
});
var normalWin = Ti.UI.createWindow({
	title: "Normal Type wallpapers",
	backgroundColor: "eae7ea"
});
var flyingType = Ti.UI.createButton({
	backgroundColor: "b2fffe",
	width: 80,
	height: 40,
	top: 230,
	right: 20
});
var flyingText = Ti.UI.createLabel({
	text: "Flying",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "588fff"
});
var flyingWin = Ti.UI.createWindow({
	title: "Flying Type wallpapers",
	backgroundColor: "b2fffe"
});
var fightingType = Ti.UI.createButton({
	backgroundColor: "ed7c02",
	width: 80,
	height: 40,
	top: 290,
	right: 20
});
var fightingText = Ti.UI.createLabel({
	text: "Fighting",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "ef3800"
});
var fightingWin = Ti.UI.createWindow({
	title: "Fighting Type wallpapers",
	backgroundColor: "ed7c02"
});
var fairyType = Ti.UI.createButton({
	backgroundColor: "ff64ca",
	width: 80,
	height: 40,
	top: 350,
	right: 20
});
var fairyText = Ti.UI.createLabel({
	text: "Fairy",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "ffffff"
});
var fairyWin = Ti.UI.createWindow({
	title: "Fairy Type wallpapers",
	backgroundColor: "ff64ca"
});
var darkType = Ti.UI.createButton({
	backgroundColor: "05172b",
	width: 80,
	height: 40,
	top: 410,
	right: 20
});
var darkText = Ti.UI.createLabel({
	text: "Dark",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "ca0000"
});
var darkWin = Ti.UI.createWindow({
	title: "Dark Type wallpapers",
	backgroundColor: "05172b"
});
var electricType = Ti.UI.createButton({
	backgroundColor: "fff000",
	width: 80,
	height: 40,
	top: 290,
	
});
var electricText = Ti.UI.createLabel({
	text: "Electric",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "000000"
});
var electricWin = Ti.UI.createWindow({
	title: "Electric Type wallpapers",
	backgroundColor: "fff000"
});
var iceType = Ti.UI.createButton({
	backgroundColor: "ffffff",
	width: 80,
	height: 40,
	top: 170,
	
});
var iceText = Ti.UI.createLabel({
	text: "Ice",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "00fff6"
});
var iceWin = Ti.UI.createWindow({
	title: "Ice Type wallpapers",
	backgroundColor: "ffffff"
});
fireType.addEventListener("click", function() {
	navWindow.openWindow(fireWin, {animated:true});
});
waterType.addEventListener("click", function() {
	navWindow.openWindow(waterWin, {animated:true});
});
grassType.addEventListener("click", function() {
	navWindow.openWindow(grassWin, {animated:true});
});
psychicType.addEventListener("click", function() {
	navWindow.openWindow(psychicWin, {animated:true});
});
poisonType.addEventListener("click", function() {
	navWindow.openWindow(poisonWin, {animated:true});
});
rockType.addEventListener("click", function() {
	navWindow.openWindow(rockWin, {animated:true});
});
darkType.addEventListener("click", function() {
	navWindow.openWindow(darkWin, {animated:true});
});
fairyType.addEventListener("click", function() {
	navWindow.openWindow(fairyWin, {animated:true});
});
fightingType.addEventListener("click", function() {
	navWindow.openWindow(fightingWin, {animated:true});
});
flyingType.addEventListener("click", function() {
	navWindow.openWindow(flyingWin, {animated:true});
});
normalType.addEventListener("click", function() {
	navWindow.openWindow(normalWin, {animated:true});
});
ghostType.addEventListener("click", function() {
	navWindow.openWindow(ghostWin, {animated:true});
});
steelType.addEventListener("click", function() {
	navWindow.openWindow(steelWin, {animated:true});
});
groundType.addEventListener("click", function() {
	navWindow.openWindow(groundWin, {animated:true});
});
dragonType.addEventListener("click", function() {
	navWindow.openWindow(dragonWin, {animated:true});
});
electricType.addEventListener("click", function() {
	navWindow.openWindow(electricWin, {animated:true});
});
iceType.addEventListener("click", function() {
	navWindow.openWindow(iceWin, {animated:true});
});


fireType.add(fireText);
waterType.add(waterText);
grassType.add(grassText);
psychicType.add(psychicText);
poisonType.add(poisonText);
rockType.add(rockText);
groundType.add(groundText);
steelType.add(steelText);
ghostType.add(ghostText);
normalType.add(normalText);
flyingType.add(flyingText);
fightingType.add(fightingText);
fairyType.add(fairyText);
darkType.add(darkText);
electricType.add(electricText);
dragonType.add(dragonText);
iceType.add(iceText);

fireWin.add(textField);
waterWin.add(textField);
grassWin.add(textField);
psychicWin.add(textField);
poisonWin.add(textField);
rockWin.add(textField);
groundWin.add(textField);
steelWin.add(textField);
ghostWin.add(textField);
normalWin.add(textField);
flyingWin.add(textField);
fightingWin.add(textField);
fairyWin.add(textField);
darkWin.add(textField);
electricWin.add(textField);
dragonWin.add(textField);
iceWin.add(textField);

mainWindow.add(fireType, waterType, grassType, psychicType, poisonType, rockType, darkType, fairyType, fightingType, flyingType, normalType, ghostType, steelType, groundType, dragonType, electricType, iceType );
mainWindow.open();
navWindow.open();

