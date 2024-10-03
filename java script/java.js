var images = ['img/IMG_4174.jpg','img/IMG_4214.jpg'];


var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 1500);

}

window.onload = slideShow;