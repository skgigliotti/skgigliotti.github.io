//object.onmouseover = function(){myScript};

function enlarge(foto,display,toDisplay,capt) {
   // Get the display
   var dis = display;

   // Get the image for the display - use its "alt" text as a caption
   var img = foto;

   var diplayImg = document.getElementsByClassName("foto-to-display")[0];
   var captionText = capt;
   img.onclick = function(){

     dis.style.display = "block";
     diplayImg.src = this.src;
     captionText.innerHTML = this.alt;
   }
   // Get the <span> element that closes the modal
   var xOut = document.getElementsByClassName("close")[0];

   // When the user clicks on <span> (x), close the modal
   xOut.onclick = function() {
     dis.style.display = "none";
   }
}
