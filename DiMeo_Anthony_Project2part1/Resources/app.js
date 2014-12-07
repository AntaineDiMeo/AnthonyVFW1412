
//Main Screen
var pokemonHeader = Ti.UI.createWindow({
    backgroundColor: "white",
    title: "My pokemon team"
});


var navWindow = Ti.UI.iOS.createNavigationWindow({
   window: pokemonHeader
});

//Pokemon team stats window
var pokemonStats = Titanium.UI.createWindow({
    backgroundColor: "red",
    title: "Pokemon team stats"
});
//Pokemon team information
var pokemonInfo = Ti.UI.createWindow({
	backgroundColor: "red",
	title: "Pokemon team information"
});

var pokeball = Ti.UI.createView({
	backgroundImage: "pokeball.png",
	width: 30,
	height: 30,
	bottom: 10,
	left: 10
});
var pokeball1 = Ti.UI.createView({
	backgroundImage: "pokeball.png",
	width: 30,
	height: 30,
	bottom: 10,
	left: 40
});
var pokeball2 = Ti.UI.createView({
	backgroundImage: "pokeball.png",
	width: 30,
	height: 30,
	bottom: 10,
	left: 70
});
var pokeball3 = Ti.UI.createView({
	backgroundImage: "pokeball.png",
	width: 30,
	height: 30,
	bottom: 10,
	left: 100
});
var pokeball4 = Ti.UI.createView({
	backgroundImage: "pokeball.png",
	width: 30,
	height: 30,
	bottom: 10,
	left: 130
});
var pokeball5 = Ti.UI.createView({
	backgroundImage: "pokeball.png",
	width: 30,
	height: 30,
	bottom: 10,
	left: 160
});
var icon1 = Ti.UI.createView({
	backgroundImage: "Charizardicon.png",
	width: 30,
	height: 30,
	bottom: 40,
	left: 10
});
var icon2 = Ti.UI.createView({
	backgroundImage: "Lucarioicon.png",
	width: 30,
	height: 30,
	bottom: 40,
	left: 40
});
var icon3 = Ti.UI.createView({
	backgroundImage: "Gengaricon.png",
	width: 30,
	height: 30,
	bottom: 40,
	left: 70
});
var icon4 = Ti.UI.createView({
	backgroundImage: "Volcaronaicon.png",
	width: 30,
	height: 30,
	bottom: 40,
	left: 100
});
var icon5 = Ti.UI.createView({
	backgroundImage: "Florgesicon.png",
	width: 30,
	height: 30,
	bottom: 40,
	left: 130
});
var icon6 = Ti.UI.createView({
	backgroundImage: "Alakazamicon.png",
	width: 30,
	height: 30,
	bottom: 40,
	left: 160
});
//Pokemon stats array
var stats = [
{name: "Charizard", description: "LvL: 90  						Nature: Brave 						Gender: M 						Health: 266  						Attack: 155  						Defense: 165 						Sp.Atk: 220 						Sp.Def: 184 						Speed: 198"},
{name: "Lucario",   description: "LvL: 85  						Nature: Adament  				Gender: F 				        Health: 250  						Attack: 202  						Defense: 160  						Sp.Atk: 211  						Sp.Def: 160   						Speed: 200"},
{name: "Gengar",    description: "LvL: 89  						Nature: Jolly						Gender: F 				        Health: 230  						Attack: 150  						Defense: 131  						Sp.Atk: 270,  						Sp.Def: 150  						Speed: 220"},
{name: "Vulcarona", description: "LvL: 87  						Nature: Rash						Gender: F 				        Health: 300 						Attack: 112  						Defense: 130  						Sp.Atk: 265,  						Sp.Def: 201 						Speed: 191"},
{name: "Florges",   description: "LvL: 83  						Nature: Quiet						Gender: F				        Health: 270  						Attack: 130  						Defense: 135  						Sp.Atk: 215,  						Sp.Def: 305  						Speed: 142"},
{name: "Alakazam",  description: "LvL: 91  						Nature: Careful  					Gender: M 				        Health: 220  						Attack: 94   						Defense: 100  						Sp.Atk: 280,  						Sp.Def: 180  						Speed: 320"},
 

];
// Stats page table
var pokemonStatTable = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});
//stats page header
var myTeamStats = Ti.UI.createTableViewSection({
	headerTitle: "My team Stats"
});

// stats page text
var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "black",
		title: this.title,
		modal: true
	});
	var detailFlorges = Ti.UI.createView({
		backgroundImage: "Florges.png",
		right: 10,
		width: 150,
		height: 150
	});
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 24, fontFamily: "Avenir Black Oblique"},
		color: "white"
	});
		detailWindow.add(detailText);
		detailWindow.add(detailFlorges[0]);
		detailWindow.open();
		detailWindow.addEventListener("click", function(){
		detailWindow.close();
		});
};

// for loop stats array
for(var i=0, j=stats.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: stats[i].name,
		hasChild: true,
		desc: stats[i].description
	});
	myTeamStats.add(theRow);
	theRow.addEventListener("click", getDetail);
	
}
var mySections = [myTeamStats];
pokemonStatTable.setData(mySections);
pokemonStats.add(pokemonStatTable);



//pokemon info array

var info = [
{name: "Charizard", description: "Charizard is a fire/flying type pokemon. Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."},
{name: "Lucario", description: "Lucario is a fighting/steel type pokemon. It has the ability to sense the Auras of all things. It understands human speech.. It's said that no foe can remain invisible to Lucario, since it can detect Auras. Even foes it could not otherwise see."},
{name: "Gengar", description: "Gengar is a ghost/poison type pokemon. It hides in shadows. It is said that if Gengar is hiding, it cools the area by nearly 10 degrees Fahrenheit.. To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity."},
{name: "Vulcarona", description: "Vulcarona is a bug/fire type pokemon. When volcanic ash darkened the atmosphere, it is said that Volcarona's fire provided a replacement for the sun. A sea of fire engulfs the surroundings of their battles, since they use their six wings to scatter their ember scales."},  
{name: "Florges", description: "Florges is a fairy type pokemon. It claims exquisite flower gardens as its territory, and it obtains power from basking in the energy emitted by flowering plants."}  ,
{name: "Alakazam", description: "Alakazam is a psychic type pokemon. Its brain can outperform a super-computer. Its intelligence quotient is said to be 5,000. Its brain cells multiply continually until it dies. As a result, it remembers everything."}  

];

//info page list 
var pokemonInfoList = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});
//info page header
var myTeamList = Ti.UI.createTableViewSection({
	headerTitle: "My team Information"
});


//info page text
var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "black",
		title: this.title,
		modal: true
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 24, fontFamily: "Avenir Black Oblique"},
		color: "white"
	});
		detailWindow.add(detailText);
		detailWindow.open();
		detailWindow.addEventListener("click", function(){
		detailWindow.close();
		});
};
//for loop info array
for(var i=0, j=info.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: info[i].name,
		hasChild: true,
		desc: info[i].description
	});
	myTeamList.add(theRow);
	theRow.addEventListener("click", getDetail);
	
}
var mySections = [myTeamList];

pokemonInfo.add(pokemonInfoList);
pokemonInfoList.setData(mySections);



//stats page button
var tableStats = Titanium.UI.createButton({
    width: 200,
    height: 50,
    top: 100,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 3
});

var statsLabel = Ti.UI.createLabel({
	text: "Pokemon team statistics",
	font: {fontSize: 18, fontFamily: "Avenir Black Oblique"},
	color: "white"
});

//info page button
var listInformation = Ti.UI.createButton({
	width: 200,
	height: 50,
	top: 200,
	backgroundColor: "red",
	borderColor: "black",
	borderWidth: 3
});

var infoLabel = Ti.UI.createLabel({
	text: "Pokemon team information",
	font: {fontSize: 18, fontFamily: "Avenir Black Oblique"},
	color: "white",
});


tableStats.addEventListener('click', function(){
    navWindow.openWindow(pokemonStats, {animated:true});
});
listInformation.addEventListener("click", function(){
	navWindow.openWindow(pokemonInfo, {animated: true});
});


pokemonHeader.add(tableStats);
tableStats.add(statsLabel);
pokemonHeader.add(listInformation);
listInformation.add(infoLabel);
pokemonHeader.add(pokeball, pokeball1, pokeball2, pokeball3, pokeball4, pokeball5, icon1, icon2, icon3, icon4, icon5, icon6);
navWindow.open();

