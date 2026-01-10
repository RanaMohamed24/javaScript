

var images = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/4.jpg",
    "./assets/5.jpg",
    "./assets/6.jpg"
];

var currentIndex = 0;
var slideshowInterval = null;


function showImage() {
    document.getElementById("photoDisplay").src = images[currentIndex];
}


function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage();
    }
}


function previousImage() {
    if (currentIndex > 0) {
        currentIndex--;
        showImage();
    }
}


function startSlideshow() {
    stopSlideshow();
    slideshowInterval = setInterval(function () {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage();
    }, 2000);
}


function stopSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
}