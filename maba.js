// maba.js - part of make america bunnies again
// v1.1.1
// by Katie Jergens version of Tom Royal 
// tomroyal.com

var debug = false; // for debugging only

if (debug){
	console.log('maba initiated');
	
	if (typeof jQuery != 'undefined') {  
    	console.log('jQ loaded');
	};
	
}	

// init blacklist
// TODO: let user configure this
var blacklistWord = "trump";

var bunnies = [
"http://www.publicdomainpictures.net/view-image.php?image=31505&picture=my-cute-bunny-pet", //0
"https://pixabay.com/p-1711286/?no_redirect", //1
"http://www.publicdomainpictures.net/view-image.php?image=82704&picture=bunny-rabbit", //2
"http://maxpixel.freegreatpicture.com/Brown-Bunny-Spring-Grass-Rabbit-Green-Mammal-214540", //3
"https://www.flickr.com/photos/34739556@N04/14550572871", //4
"https://www.flickr.com/photos/tomitapio/5369631094", //5
"https://www.flickr.com/photos/nblumhardt/3500477551", // 6
"https://commons.wikimedia.org/wiki/File:Serious_bunny_(5767442711).jpg", // 7
"https://upload.wikimedia.org/wikipedia/commons/6/61/Holland_lop_bunny.JPG", // 8
"https://cdn.pixabay.com/photo/2016/01/19/14/55/bunny-1149060_960_720.jpg" // 9
]


	if (debug){
		console.log('maba processing blacklist is '+ blacklistWord);
	}

	// Search all img alt text and srcs for the strings in blacklist, replaces with bunnies
	var pagepics=document.getElementsByTagName("img"), i=0, img;	// get all images

	if (debug){
		console.log('maba processing...'+ pagepics.length + ' images found.');
	}

	// Loop through images, detect blacklist and replace
	while (img = pagepics[i++])
	{	

		var alttext = String(img.alt).toLowerCase();
		var imgsrc = String(img.src).toLowerCase();
		var imgwidth = img.clientWidth;
		var imgheight = img.clientHeight;

		// Identify parent anchor tag. 
		var href =  String(img.parentElement).toLowerCase(); // the href is more reliable than innnerHTML
		var imgParent = img.parentNode;
		var count = 0;
		var MAX_LEVELS = 5; // Give up after 5 levels

		// If img's immediate parent is not the anchor tag travel up the DOM 
		//   to find it. This is especially useful for side menus.
		while (imgParent != null && imgParent.nodeName != "A" && count++ < MAX_LEVELS) {
	 		imgParent = imgParent.parentNode;

	 		if (imgParent != null && imgParent.nodeName === "A") {
	 			href = String(imgParent).toLowerCase();
	 		}
	 	}


		if (debug){
			console.log('maba processing...'+ i + '. ' + href);
		}

	 	// If find the blacklist word in alt tag, img src link or href link, replace image src.
		if ((alttext.indexOf(blacklistWord) != -1) || (imgsrc.indexOf(blacklistWord) != -1) || (href.indexOf(blacklistWord) != -1)){
			var randk = Math.floor(Math.random() * 10);
			img.src = 'https://s3.amazonaws.com/katieinbrooklyn.com/images/maba/' + randk + '.jpg'; 
			img.alt = 'Photo source ' + bunnies[randk];
			img.width = imgwidth;
			img.height = imgheight;

			if (debug){
				console.log('maba processing...'+ imgsrc);
			}
		}
	}
		

	if (debug){
		console.log('maba processing complete');
	}	    


