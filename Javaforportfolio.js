
function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].type = "radio") {

            if (ele[i].checked)
                document.getElementById("result").innerHTML
                    += ele[i].name + ""
                    + ele[i].value + "<br>";
        }
    }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImg');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// show modal function
var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// bind click event to each img
for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}
// for escape button//
window.onkeyup = function (event) {
  modal.style.display = "none";
}
