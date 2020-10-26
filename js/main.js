// Get the container element
var navContainer = document.getElementById("navbarSupportedContent");

// Get all buttons with class="btn" inside the container
const btns = navContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}