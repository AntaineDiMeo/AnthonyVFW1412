
	var win = Ti.UI.createWindow({
	backgroundColor: "cyan",
	layout: "vertical",
	
});


var navWindow = Ti.UI.iOS.createNavigationWindow({
   window: win
});

var secondWindow = Ti.UI.createWindow({
	backgroundColor: "#333",
	layout: "vertical"
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imageGallery");
var galleryList = gallery.getDirectoryListing();
var Gallery2 = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "gallerytwo");
var galleryList2 = Gallery2.getDirectoryListing();


var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var itemCount = 28;
var rowCount = 4;
var margin = 5;

var trueCanvasWidth = pWidth - margin * (rowCount+1);
var size = trueCanvasWidth/rowCount;
var trueCanvasHeight = pHeight - margin * (rowCount+1);
var sizeTwo = trueCanvasHeight/rowCount;

console.log("Your device is " + pWidth + " wide.");
console.log("Each view is a " + size + " square.");


var viewContainer = Ti.UI.createScrollView({
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
	contentHeight: pHeight,
	backgroundColor: "#1814a2",
	showVerticalScrollIndicator: true
});


for(var i=0; i<itemCount; i++){

	var view = Ti.UI.createView({
		backgroundColor: "black",
		top: margin,
		left: margin,
		width: size,
		height: size
	});
	var theImage = Ti.UI.createImageView({
		image: "imageGallery/" + galleryList[i]
		});

	viewContainer.add(view);
	view.add(theImage);
	
	

		view.addEventListener("click", function(){
   	    navWindow.openWindow(secondWindow, {animated:true});
});
	
};

var viewContainerTwo = Ti.UI.createScrollView({
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
	contentHeight: 6500,
	backgroundColor: "#1814a2",
	showVerticalScrollIndicator: true
});

for(var i=0; i<galleryList2.length; i++){

	var viewTwo = Ti.UI.createView({
		backgroundColor: "black",
		top: 30,
		width: 200,
		height: 200
	});
var theSecondImage = Ti.UI.createImageView({
	image: "gallerytwo/" + galleryList2[i]
	});

viewContainerTwo.add(viewTwo);
viewTwo.add(theSecondImage);



};
	

win.add(viewContainer);
secondWindow.add(viewContainerTwo);
//secondWindow.add(viewTwo);
win.open();
navWindow.open();
	
	
	
	
	
	
	
