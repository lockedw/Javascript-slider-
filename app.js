let images = ["./images/image1.jpg","./images/image2.jpg","./images/image3.jpg","./images/image4.jpg","./images/image5.jpg","./images/image6.jpg"]; //? And there is the images
let i = 0; //? You can change the value of first picture
let timeOut = 2500; //? You can change the time 


function slide(){
    slider = document.getElementById("slider"); //! Slider Function
    slider.src = images[i];
    console.log("Image was changed");
    if(i < images.length -1){
        i++
       
    }
    else {
        i=0;
    }
    setTimeout("slide()",timeOut);
}
window.onload= slide();