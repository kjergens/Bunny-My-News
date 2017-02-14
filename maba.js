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


	if (debug){
		console.log('maba processing blacklist is '+blacklistWord);
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
			var randk = Math.floor(Math.random() * 5) + 1;
			img.src = 'https://s3.amazonaws.com/katieinbrooklyn.com/images/maba/' + randk + '.jpg'; 
			img.width = imgwidth;
			img.height = imgheight;

				if (debug){
					console.log('maba processing...'+ imgsrc);
				}
			
			// if (theKittens.kitten[randk].type == 0){
			// 	img.alt = 'Photo by '+theKittens.kitten[randk].Credit+' source '+theKittens.kitten[randk].URL+'';
			// }
			// else {
			// 	img.alt = 'Photo by '+theKittens.kitten[randk].Credit+'';
			// };
		}

	}
		

	if (debug){
		console.log('maba processing complete');
	}	    


