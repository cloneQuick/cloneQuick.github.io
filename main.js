// VIDEO
const button = document.querySelector("button");
const close = document.querySelector(".close");
const trailer = document.querySelector(".trailer");
const video = document.querySelector("video");
button.addEventListener('click', () => {
    trailer.style.visibility = "visible";
    trailer.style.opacity = 1;
});
close.addEventListener('click', () => {
    trailer.style.visibility = "hidden";
    trailer.style.opacity = 0;
    video.pause();
    video.currentTime = 0;
});

// IMAGE VIEW
// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});

// NAVBAR

