var mainWin = Ti.UI.createWindow({
	
});

var title = Ti.UI.createView({
	backgroundColor: "black",
	
	width: 150,
	height: 50,
	top: 20
});
var text = Ti.UI.createLabel({
	text: "MusicPlayer",
	font: {fontSize: 24, fontFamily: "Avenir Black Oblique"},
	color: "FFA900"
});
		//sound/media object
var sound = Ti.Media.createSound({
	url: "overwerk.mp3",
	
	preload: true
});

	var soundButton = Ti.UI.createButton({
		backgroundImage: "Play.png",
		width: 50,
		height: 50,
		bottom: 15,
		left: 105
	});
	
   	    soundButton.addEventListener("click", function() {
	sound.play(); 
}); 

var pauseButton = Ti.UI.createButton({
		backgroundImage: "pause.png",
		width: 45,
		height: 45,
		bottom: 15,
		right: 105
	});
	pauseButton.addEventListener("click", function() {
	sound.pause(); 
}); 



	var bImage = Ti.UI.createView({
		backgroundImage: "trees.jpg",
		width: 320,
		height:550,
		top: 20
	});
	
	var playBox = Ti.UI.createView({
		borderColor: "black",
		borderWidth: 10,
		height: 100,
		width: 160,
		bottom: 1
		
	});



mainWin.add(bImage);
mainWin.add(playBox);
mainWin.add(title);
title.add(text);
mainWin.add(sound);

mainWin.add(soundButton);
mainWin.add(pauseButton);

mainWin.open();