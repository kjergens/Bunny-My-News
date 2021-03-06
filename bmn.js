// bmn.js - part of make america bunnies again
// v1.1.1
// by Katie Jergens (forked and edited from Tom Royal's Make America Kittens Again tomroyal.com)
// https://github.com/kjergens/Bunny-My-News

var debug = false; // for debugging only

if (debug){
	console.log('bmn initiated');
	
	if (typeof jQuery != 'undefined') {  
    	console.log('jQ loaded');
	};
	
}	

// init blacklist
// TODO: let user configure this
var blacklistWord = "trump";

var bunnies = [
"Photo by Maliz Ong. Image has been resized. Source www.publicdomainpictures.net/view-image.php?image=31505&picture=my-cute-bunny-pet", //0
"Source pixabay.com/p-1711286/", //1
"Photo by Karen Arnold. Image has been resized. Source www.publicdomainpictures.net/view-image.php?image=82704", //2
"Image has been resized. Source maxpixel.freegreatpicture.com/Brown-Bunny-Spring-Grass-Rabbit-Green-Mammal-214540", //3
"Photo by rawdonfox on Flicker. Image has been resized. Source www.flickr.com/photos/34739556@N04/14550572871", //4
"Photo by Tomi Tapio on Flicker. Image has been resized. Source www.flickr.com/photos/tomitapio/5369631094", //5
"Photo by Nicholas Blumhardt on Flickr. Image has been resized. Source www.flickr.com/photos/nblumhardt/3500477551", // 6
"This image was originally posted to Flickr by wstryder at http://flickr.com/photos/36514345@N00/5767442711. Image has been resized. Source commons.wikimedia.org/wiki/File:Serious_bunny_(5767442711).jpg", // 7
"Image has been resized. Source upload.wikimedia.org/wikipedia/commons/6/61/Holland_lop_bunny.JPG", // 8
"Image has been resized. Source cdn.pixabay.com/photo/2016/01/19/14/55/bunny-1149060_960_720.jpg", // 9
"Image has been resized. Source https://pixabay.com/en/hare-animals-gray-hare-rabbit-1751616/", //10
"Image has been resized. Source https://pixabay.com/en/rabbit-animals-nature-hay-1644601/", //11
"Bunny My News", //12
"Bunny My News", //13
"Bunny My News", //14
"Bunny My News", //15
"Bunny My News", //16
"Bunny My News", //17
"Bunny My News", //18
"Bunny My News", //19
"Bunny My News", //20
"Bunny My News", //21
"Bunny My News", //22
"Bunny My News", //23
"Bunny My News", //24
"Bunny My News", //25
"Bunny My News", //26
"Bunny My News", //27
"Bunny My News", //28
"Bunny My News", //29
"Bunny My News", //30
"Bunny My News", //31
"Bunny My News", //32
"Bunny My News", //33
"Bunny My News", //34
"Bunny My News", //35
"Bunny My News", //36
"Bunny My News", //37
"Bunny My News", //38
"Bunny My News", //39
"Bunny My News", //40
"Bunny My News", //41
"Bunny My News", //42
"Bunny My News", //43
"Bunny My News", //44
"Bunny My News", //45
"Bunny My News", //46
"Bunny My News", //47
"Bunny My News" //48
]


	if (debug){
		console.log('bmn processing blacklist is '+ blacklistWord);
	}

	// Search all img alt text and srcs for the strings in blacklist, replaces with bunnies
	var pagepics=document.getElementsByTagName("img"), i=0, img;	// get all images

	if (debug){
		console.log('bmn processing...'+ pagepics.length + ' images found.');
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
			console.log('bmn processing...'+ i + '. ' + href);
		}

	 	// If find the blacklist word in alt tag, img src link or href link, replace image src.
		if ((alttext.indexOf(blacklistWord) != -1) || (imgsrc.indexOf(blacklistWord) != -1) || (href.indexOf(blacklistWord) != -1)){
			var randk = Math.floor(Math.random() * bunnies.length);
			img.src = 'https://s3.amazonaws.com/katieinbrooklyn.com/images/maba/' + randk + '.jpg'; 
			img.alt = bunnies[randk];
			img.title = bunnies[randk];
			img.width = imgwidth;
			img.height = imgheight;

			if (debug){
				console.log('maba processing...'+ imgsrc);
			}
		}
	}
		

	if (debug){
		console.log('bmn processing complete');
	}	    


