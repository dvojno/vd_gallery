
var GalleryVD = function (images) {
  //this.firstName = firstName;
  var self = this;

  this.imagesArrType = [];
  this.imagesArr = images;

//function createModal(){
    // Your existing code unmodified...
  this.iDiv = document.createElement('div');
  this.iDiv.id = 'modal';
  this.iDiv.style.position = 'fixed';
  this.iDiv.style.top = '0';
  this.iDiv.style.left = '0';
  this.iDiv.style.width = '100%';
  this.iDiv.style.height = '100%';
  this.iDiv.style.backgroundColor = 'rgba(0,0,0,0.75)';
  this.iDiv.style.zIndex = '990';

  //iDiv.innerHTML = 'Hello Modal!';

  //iDiv.className = 'block';
  document.getElementsByTagName('body')[0].appendChild(this.iDiv);
  document.getElementById("modal").style.visibility = "hidden";
  document.body.style.overflow = 'visible';

//}
this.showModal = function(){

  document.getElementById("modal").style.visibility = "visible";
  document.body.style.overflow = 'hidden';
}

//showModal();

this.hideModal = function(){
  document.getElementById("modal").innerHTML = "";
  document.getElementById("modal").style.visibility = "hidden";
  document.body.style.overflow = 'visible';
}



this.createThumbs = function(element, clss) {
  //this.data = "";
  //alert("this: " + this.showImage(1));
  //this.imagesArr = images;
  for(var i = 0; i < self.imagesArr.length; i++){

    this.iDiv = document.createElement('div');
    this.iDiv.className = clss;
    this.iDiv.style.background = 'url('+self.imagesArr[i]+') no-repeat center';
    this.iDiv.style.backgroundSize = 'cover';
    // this.iDiv.style.display = 'inline-block';
    // this.iDiv.style.width = '180px';
    // this.iDiv.style.height = '135px';
    // this.iDiv.style.cursor = 'pointer';
    

    this.iDiv.id = i;
    this.iDiv.addEventListener('click',function(){self.showImage(this.id)});
    document.getElementById(element).appendChild(this.iDiv);

    thumbs.push(this.iDiv);
    //this.data += '<div style="background: url('+this.imagesArr[i]+') no-repeat center; background-size: contain; width: 180px; height: 135px;" onclick="showImage('+i+')" style="cursor:pointer"></div>';
  }
};

var thumbs = [];
this.thumbsSetClass = function(c){
  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].className = c;
    console.log('set class: '+c);
    console.log('element: '+thumbs[i]);
  };
  //document.getElementById("MyElement").className = class;
};




this.showImage = function(index){
  this.hideModal();

  var arrLength = self.imagesArr.length;

  var i = index % arrLength;
  if(i < 0){
    i = arrLength - 1;
  }
  var data;
  
  if(self.imagesArrType[i] == 'video'){
    playVideo(i);
  }else{

    
    this.cont = document.createElement('div');
    this.cont.style.textAlign = 'center';
    this.cont.style.margin = 'auto';
    this.cont.style.width = '100%';

    //this.image.innerHTML = i;
    this.imageR = document.createElement('div');

    var indexToAdd;
    if(i+1 >= self.imagesArr.length){
      indexToAdd = 0;
    }else{
      indexToAdd = i+1;
    }
    this.imageR.style.background = 'url('+(self.imagesArr[indexToAdd])+') no-repeat center';
    this.imageR.style.backgroundSize = 'contain';
    this.imageR.style.display = 'inline-block';
    this.imageR.style.width = '100%';
    this.imageR.style.height = '100%';
    this.imageR.id = 'modalImageR';
    this.imageR.zIndex = 99;
    this.imageR.style.position = 'absolute';
    this.imageR.style.left = '100%';
    
    this.cont.appendChild(this.imageR);


    if(i-1 < 0){
      indexToAdd = self.imagesArr.length - 1;
    }else{
      indexToAdd = i-1;
    }
    //this.image.innerHTML = i;
    this.imageL = document.createElement('div');
    this.imageL.style.background = 'url('+(self.imagesArr[indexToAdd])+') no-repeat center';
    this.imageL.style.backgroundSize = 'contain';
    this.imageL.style.display = 'inline-block';
    this.imageL.style.width = '100%';
    this.imageL.style.height = '100%';
    this.imageL.id = 'modalImageL';
    this.imageL.zIndex = 98;
    this.imageL.style.position = 'absolute';
    this.imageL.style.left = '-100%';

    this.cont.appendChild(this.imageL);
    //this.image.innerHTML = i;

    this.image = document.createElement('div');
    this.image.style.background = 'url('+self.imagesArr[i]+') no-repeat center';
    this.image.style.backgroundSize = 'contain';
    this.image.style.display = 'inline-block';
    this.image.style.width = '100%';
    this.image.style.height = '100%';
    this.image.zIndex = 100;
    this.image.id = 'modalImage';
    


    this.cont.appendChild(this.image);

    this.btnClose = document.createElement('div');
    this.btnClose.style.position = 'absolute';
    this.btnClose.innerHTML = '&#215';
    this.btnClose.style.right = '10px';
    this.btnClose.style.top = '5px';
    this.btnClose.style.fontSize = '50px';
    this.btnClose.style.color = '#fff';
    this.btnClose.style.cursor = 'pointer';
    this.btnClose.addEventListener('click',function(){self.hideModal()});

    this.cont.appendChild(this.btnClose);

    this.btnLeft = document.createElement('div');
    this.btnLeft.style.position = 'absolute';
    this.btnLeft.innerHTML = '<';
    this.btnLeft.style.left = '5px';
    this.btnLeft.style.top = '45%';
    this.btnLeft.style.fontSize = '50px';
    this.btnLeft.style.color = '#fff';
    this.btnLeft.style.cursor = 'pointer';
    this.btnLeft.id = i;
    this.btnLeft.addEventListener('click',function(){self.showImage(this.id-1)});

    this.cont.appendChild(this.btnLeft);

    this.btnRight = document.createElement('div');
    this.btnRight.style.position = 'absolute';
    this.btnRight.innerHTML = '>';
    this.btnRight.style.right = '5px';
    this.btnRight.style.top = '45%';
    this.btnRight.style.fontSize = '50px';
    this.btnRight.style.color = '#fff';
    this.btnRight.style.cursor = 'pointer';
    this.btnRight.id = i;
    this.btnRight.addEventListener('click',function(){self.showImage(this.id+1)});

    this.cont.appendChild(this.btnRight);

    document.getElementById("modal").appendChild(this.cont);

    this.showModal();

    // swipe addIndex in function
    this.addSwipeTo(i);

  }
}

this.addSwipeTo = function(i){ // i is index of a photo;
     var el = document.getElementById('modal');
     var img = document.getElementById('modalImage');
     var imgL = document.getElementById('modalImageL');
     var imgR = document.getElementById('modalImageR');
     imgL.sx = imgL.offsetLeft;
     imgR.sx = imgR.offsetLeft;
     img.style.position = "relative";
     ontouch(img, function(evt, dir, phase, swipetype, distance){
      if ( phase == 'move' && (dir =='left' || dir == 'right') ){
        img.style.left = distance + "px";
        imgL.style.left = (distance + imgL.sx) + "px";
        imgR.style.left = (distance + imgR.sx) + "px";
      }

    if ( phase == 'end'){
        if(swipetype == 'left'){
          self.showImage(i + 1);
        }
        if(swipetype == 'right'){
          self.showImage(i - 1);
        }
        img.style.left = "0px";
    }
     });
}

};  // CLASS END






//
function playVideo(path){
	var data = '<div class="bannerCommon" style="height: 100%; background: rgba(0,0,0,0.16); margin-top; 2em;"> \
		<div id="modalImage" style="width: 100%; height: 100%;"> <video id="videoWrapper" class="video" controls style="background-color: black;"> \
  		<source src=' + imagesArr[path] + ' type="video/mp4">\
		Your browser does not support the video tag. \
		</video> </div> \
		<img class="navigationSize" onclick="closeModalReset()" src="images/graphics/close-white.png" style="position: absolute; right: 5px; top: 5px; cursor: pointer;" /> \
		<img class="navigationSize" onclick="showImage(' + (path + 1) + ')" src="images/graphics/arrow-right.png" style="position: absolute; right: 5px; top: 50%; cursor: pointer;" /> \
		<img class="navigationSize" onclick="showImage(' + (path - 1) + ')" src="images/graphics/arrow-left.png" style="position: absolute; left: 5px; top: 50%; cursor: pointer;" /> \
		</div>';
	document.getElementById("modal").innerHTML = data;
	document.getElementById("modal").style.backgroundColor = 'rgba(0,0,0,0.75)';

	document.getElementById("videoWrapper").addEventListener("click", function(e) {
    	e.stopPropagation();
	});

	var h = document.getElementById("videoWrapper").offsetHeight;
	document.getElementById("videoWrapper").style.marginTop = h/-2;

	showModal();
	addSwipeTo(path);
}


var imagesArrType = [];
var imagesArr = [];

var AshowImage = function(index){
	var arrLength = imagesArr.length;
	var i = index % arrLength;
	if(i < 0){
		i = arrLength - 1;
	}
	var data;
	
	if(imagesArrType[i] == 'video'){
		playVideo(i);
	}else{
		data = '<div id="container" style="text-align: center; margin: auto; width: 100%;"> \
		<div id="modalImage" style="background: url('+ imagesArr[i] +') no-repeat center; background-size: contain; width: 100%; height: 100%;"></div> \
    <div onclick="self.hideModal()" style="position: absolute; right: 5px; top: 5px; cursor: pointer; font-size: 50px; color: white;">&#215</div> \
    <div onclick="this.showImage(' + (i + 1) + ')" style="position: absolute; right: 5px; top: 45%; cursor: pointer; font-size: 50px; color: white;">></div> \
    <div onclick="this.showImage(' + (i - 1) + ')" style="position: absolute; left: 5px; top: 45%; cursor: pointer; font-size: 50px; color: white;"><</div> \
		<div>';
	
	//<img class="navigationSize" onclick="closeModalReset()" src="images/graphics/close-white.png" style="position: absolute; right: 5px; top: 5px; cursor: pointer;" /> \
//<img class="navigationSize" onclick="showImage(' + (i + 1) + ')" src="images/graphics/arrow-right.png" style="position: absolute; right: 5px; top: 50%; cursor: pointer;" /> \
   // <img class="navigationSize" onclick="showImage(' + (i - 1) + ')" src="images/graphics/arrow-left.png" style="position: absolute; left: 5px; top: 50%; cursor: pointer;" /> \
		document.getElementById("modal").innerHTML = data;
    //document.getElementById("modal").innerHTML = imagesArr[i];
		document.getElementById("modal").style.backgroundColor = 'rgba(0,0,0,0.75)';

		document.getElementById("modal").style.overflow = 'scroll';
		this.showModal();

		// swipe addIndex in function
		addSwipeTo(i);

	}
}

function forceLower(strInput) 
{
	strInput.value = strInput.value.toLowerCase();
}

function showLoader(txt){
	var data = '<div id="container" style="text-align: center; margin: auto; width: 100%; "> \
	 <div class="loader"></div>';
	 if(txt != ""){
	 	data += '<div class="loaderText">' + txt + '</div>';
	 }
	 data += '<div>';

	 document.getElementById("modal").innerHTML = data;  
	 document.getElementById("modal").style.backgroundColor = 'rgba(0,0,0,0.75)';
	 showModal();
}


// TOUCH
function ontouch(el, callback){
 
    var touchsurface = el,
    dir,
    swipeType,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 500, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handletouch = callback || function(evt, dir, phase, swipetype, distance){}
 
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        dir = 'none'
        swipeType = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        handletouch(e, 'none', 'start', swipeType, 0) // fire callback function with params dir="none", phase="start", swipetype="none" etc
        e.preventDefault()
 
    }, false)
 
    touchsurface.addEventListener('touchmove', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        if (Math.abs(distX) > Math.abs(distY)){ // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
            dir = (distX < 0)? 'left' : 'right'
            handletouch(e, dir, 'move', swipeType, distX) // fire callback function with params dir="left|right", phase="move", swipetype="none" etc
        }
        else{ // else consider this a vertical movement
            dir = (distY < 0)? 'up' : 'down'
            handletouch(e, dir, 'move', swipeType, distY) // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
        }
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
 
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipeType = dir // set swipeType to either "left" or "right"
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipeType = dir // set swipeType to either "top" or "down"
            }
        }
        // Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
        handletouch(e, dir, 'end', swipeType, (dir =='left' || dir =='right')? distX : distY)
        e.preventDefault()
    }, false)
}
















