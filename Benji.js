document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector("body");

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 500) {
            body.style.backgroundColor = "#213149"; // Change background color when scrolled down
        }
        else if (scrollPosition > 502 ) {
            body.style.backgroundColor = "#fffff"; // Change background color when scrolled down
        } else {
            body.style.backgroundColor = "#1e2336"; // Reset to default background color
        }
    });
});
// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
  }
