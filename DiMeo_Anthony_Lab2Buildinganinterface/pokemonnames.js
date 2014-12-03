var mainWindow = Titanium.UI.createWindow({
	title: "pokemon window"
});
var pokemonArray = require("app.js");
mainWindow.add(pokemonArray);

