//Clicker additive button
const clickerButton = document.getElementById('myButton');
var clicker = 0;
clickerButton.addEventListener('click', () => {
    clicker++;
    clickerButton.textContent = clicker;

    if(clicker > 25){
         alert("You Win!");
    }
});


//when image is clicked it will change to another image, and back when clicked again
const slideshowImages = document.getElementById('slideshow');
var slideImage = false;
slideshowImages.addEventListener('click', () => {
    if (slideImage == false){
        slideshowImages.src = 'Media/Picture Group/YoungBrotherPic8.jpg';
        slideImage = true;
    }
    else{
        slideshowImages.src = 'Media/Picture Group/YoungPic6.jpg';
        slideImage = false;
    }
})

$(".div1").hover(function(){
    
})


