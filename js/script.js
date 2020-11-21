
//text reveal
var i = 0;
var txt = 'Polar Bears are the largest bear in the world.'
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var i2 = 0;
var txt2 = 'Polar Bears actually have black skin!';
var speed2 = 30;
function typeWriter2() {
	if (i2 < txt2.length) {
	  document.getElementById("demo2").innerHTML += txt2.charAt(i2);
	  i2++;
	  setTimeout(typeWriter2, speed2);
	}
  }
  var i3 = 0;
  var txt3 = 'Polar Bears can swim up to 6 mph!';
  var speed3 = 30;
  function typeWriter3() {
	if (i3 < txt3.length) {
	  document.getElementById("demo3").innerHTML += txt3.charAt(i3);
	  i3++;
	  setTimeout(typeWriter3, speed3);
	}
  }
 //accordian

 var acc = document.getElementsByClassName("accordion");
 var i;
 
 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
	 /* Toggle between adding and removing the "active" class,
	 to highlight the button that controls the panel */
	 this.classList.toggle("active");
 
	 /* Toggle between hiding and showing the active panel */
	 var panel = this.nextElementSibling;
	 if (panel.style.display === "block") {
	   panel.style.display = "none";
	 } else {
	   panel.style.display = "block";
	 }
   });
 }




//javascript for slides

// Define options
var options = {
  root: document.querySelector('.slides'),
  threshold: 0.8
};


// Define what we do when things intersect or don't
var callback = (entries, observer) => {
  entries.forEach(entry => {
    
    // Handle if the entry is intersecting or not
    if (entry.isIntersecting) {
      // Do this if its intersecting
      // add the active class to the right dot
      
      var id = entry.target.id.replace("slide", "dot");
      var dot = document.getElementById(id);
      
      dot.classList.add("active");
      
    } else {
      // Do this if its not
      // remove the active class from any other dot
      
      var id = entry.target.id.replace("slide", "dot");
      var dot = document.getElementById(id);
      
      dot.classList.remove("active");
    }

  });
};

// Setup observer
var observer = new IntersectionObserver(callback, options);


// Tell the observer what to look for
var targets = document.querySelectorAll('.slides > div');

targets.forEach(target => {
  observer.observe(target);
});




//adopt button

 //Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    //if (event.target == modal) {
        modal.style.display = "none";
    }

//image popup


 //Get the modal
 var modal2 = document.getElementById('id02');

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     //if (event.target == modal) {
         modal2.style.display = "none";
     }

     var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

 




