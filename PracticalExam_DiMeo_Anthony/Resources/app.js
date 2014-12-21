var mainWindow = Ti.UI.createWindow({
	title: "My Pokemon Team",
	backgroundImage: "pokemon.jpg"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
   window: mainWindow
  
});



var firstWindow = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Pokemon Team Pictures"
});



var button1 = Ti.UI.createButton({
	borderColor: "black",
	borderWidth: "5",
	backgroundColor: "8a956d",
	width: 100,
	height: 50,
	bottom: 30,
	left: 10
});
var buttonText1 = Ti.UI.createLabel({
	text: "Pictures",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "c3cfa1"
});
var myArray = []; 
var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "randomGallery");
var galleryList = gallery.getDirectoryListing();

var pictureButton = Ti.UI.createButton({
	backgroundColor: "8a956d",
	borderColor: "black",
	borderwidth: 5,
	width: 200,
	height: 50,
	bottom: 20
});

for(var i=0; i<galleryList.length; i++){
	
pictureButton.addEventListener("click", function() {
	console.log("click works");
});
	var theImage = Ti.UI.createImageView({
		image: "randomGallery/" + galleryList[4],
		image: "randomGallery/" + galleryList[5],
		height: "25%",
		top: 100
	});


};

firstWindow.add(theImage);
firstWindow.add(pictureButton);







var secondWindow = Ti.UI.createWindow({
	backgroundColor: "black",
	title: "Pokemon Team Stats"
});

var ball1 = Ti.UI.createImageView({
	image: "ball.png",
	top: 40,
	height: 50,
	width: 50,
	left: 10
});

var ball2 = Ti.UI.createImageView({
	image: "ball.png",
	top: 40,
	height: 50,
	width: 50,
	left: 60
});
var ball3 = Ti.UI.createImageView({
	image: "ball.png",
	top: 40,
	height: 50,
	width: 50,
	left: 110
});
var ball4 = Ti.UI.createImageView({
	image: "ball.png",
	top: 40,
	height: 50,
	width: 50,
	left: 160
});
var ball5 = Ti.UI.createImageView({
	image: "ball.png",
	top: 40,
	height: 50,
	width: 50,
	left: 210
});
var ball6 = Ti.UI.createImageView({
	image: "ball.png",
	top: 40,
	height: 50,
	width: 50,
	left: 260
});

var button2 = Ti.UI.createButton({
	borderColor: "black",
	borderWidth: "5",
	backgroundColor: "8a956d",
	width: 100,
	height: 50,
	bottom: 30
});
var buttonText2 = Ti.UI.createLabel({
	text: "Stats",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "c3cfa1"
});


//pokemon info array
 
	
var info = [
{id: "Charizard", icon: "Charizard.png", description: "LvL: 90  						Nature: Brave 						Gender: M 						Health: 266  						Attack: 155  						Defense: 165 						Sp.Atk: 220 						Sp.Def: 184 						Speed: 198 						Charizard is a fire/flying type pokemon. Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. "},
{id: "Lucario",   icon: "Lucario.png",   description: "LvL: 89  						Nature: Jolly						Gender: F 				        Health: 230  						Attack: 150  						Defense: 131  						Sp.Atk: 270,  						Sp.Def: 150  						Speed: 220  						Lucario is a fighting/steel type pokemon. It has the ability to sense the Auras of all things. It's said that no foe can remain invisible to Lucario, since it can detect Auras. Even foes it could not otherwise see."},
{id: "Gengar",    icon: "Gengar.png",    description: "LvL: 85  						Nature: Adament  				Gender: F 				        Health: 250  						Attack: 202  						Defense: 160  						Sp.Atk: 211  						Sp.Def: 160   						Speed: 200  						Gengar is a ghost/poison type pokemon. It hides in shadows. It is said that if Gengar is hiding, it cools the area by nearly 10 degrees Fahrenheit.. "},
{id: "Vulcarona", icon: "Volcarona.png", description: "LvL: 87  						Nature: Rash						Gender: F 				        Health: 300 						Attack: 112  						Defense: 130  						Sp.Atk: 265,  						Sp.Def: 201 						Speed: 191  						Vulcarona is a bug/fire type pokemon.  A sea of fire engulfs the surroundings of their battles, since they use their six wings to scatter their ember scales."},  
{id: "Florges",   icon: "Florges.png",   description: "LvL: 83  						Nature: Quiet						Gender: F				        Health: 270  						Attack: 130  						Defense: 135  						Sp.Atk: 215,  						Sp.Def: 305  						Speed: 142  						Florges is a fairy type pokemon. It claims exquisite flower gardens as its territory, and it obtains power from basking in the energy emitted by flowering plants."}  ,
{id: "Alakazam",  icon: "Alakazam.png",  description: "LvL: 91  						Nature: Careful  					Gender: M 				        Health: 220  						Attack: 94   						Defense: 100  						Sp.Atk: 280,  						Sp.Def: 180  						Speed: 320  						Alakazam is a psychic type pokemon. Its brain can outperform a super-computer. Its intelligence quotient is said to be 5,000. Its brain cells multiply continually until it dies."} 


		   ];
		   
var pokemonListView = Ti.UI.createListView({
	backgroundColor: "#ffffff",
	top: 239
	});
	
	
	

var getDetail = function(e){
var item = pokemonListSection.getItemAt(e.itemIndex);
var detailWindow = Ti.UI.createWindow({
		
		backgroundColor: "black",
		title: this.title,
		modal: true,
		
	});
	



	var detailText = Ti.UI.createLabel({
		text: item.properties.desc,
		font: {fontSize: 24, fontFamily: "Avenir Black Oblique"},
		color: "#ffffff"
	});
	var detailImage = Ti.UI.createImageView({
		image: "trainer",
		top: 10,
		right: 10,
		Height: 300,
		width: 180
		
	});
	


	detailWindow.add(detailText);
	detailWindow.add(detailImage);
	detailWindow.open();
	detailWindow.addEventListener("click", function(){
	detailWindow.close();
	});
};

var data = [];
for(var i=0, j=info.length; i<j; i++) {

	data.push({
		properties: {
			title: info[i].id,
			image: info[i].icon,
			hasChild: true,
			desc: info[i].description,
			
			accesoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
			color: "#000000"
		}
	});
}






//console.log(data[0].properties.desc + " ...........");

var pokemonListSection = Ti.UI.createListSection();
pokemonListSection.setItems(data);

var mySections = [];
mySections.push(pokemonListSection);

pokemonListView.sections = [pokemonListSection];







var button3 = Ti.UI.createButton({
	borderColor: "black",
	borderWidth: "5",
	backgroundColor: "8a956d",
	width: 100,
	height: 50,
	bottom: 30,
	right: 10
});
var buttonText3 = Ti.UI.createLabel({
	text: "Videos",
	font: {fontSize: 20, fontFamily: "Avenir Black Oblique"},
	color: "c3cfa1"
});






var videoWindow1 = Ti.UI.createWindow({
	title: " video View Demo",
	backgroundColor: "fff",
	orientationModes: [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
	Titanium.UI.PORTRAIT,
	Titanium.UI.UPSIDE_PORTRAIT
	]
});



var videoPlayer1 = Titanium.Media.createVideoPlayer({
	top: 2,
	//autoplay: true,
	//mediaControlStyle: Titanium.Media.VIDEO_CONTROL_DEFAULT,
	//scalingMode: Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
});

Ti.Gesture.addEventListener("orientationchange", function(e){
  });
  


videoPlayer1.url = "origins.mp4";

videoWindow1.add(videoPlayer1);





button1.addEventListener("click", function(){
   	    navWindow.openWindow(firstWindow, {animated:true});
   	 });

button2.addEventListener("click", function(){
   	    navWindow.openWindow(secondWindow, {animated:true});
   	 });

button3.addEventListener("click", function(){
   	    navWindow.openWindow(videoWindow1, {animated:true});
   	 });
   	


mainWindow.add(button1, button2, button3);
button1.add(buttonText1);
button2.add(buttonText2);
button3.add(buttonText3);
secondWindow.add(ball1, ball2, ball3, ball4, ball5, ball6);
secondWindow.add(pokemonListView);
pokemonListView.addEventListener("itemclick", getDetail);

mainWindow.open();

navWindow.open();


