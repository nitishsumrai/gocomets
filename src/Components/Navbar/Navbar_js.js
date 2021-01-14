window.addEventListener("resize", makeHeaderResponsive);
var PhoneView = false;
function makeHeaderResponsive(e) {
  var width = document.documentElement.clientWidth;

  if (width < 600 && !PhoneView) {
    PhoneView = true;

    var dropdown = document.createElement("div");
    var dropdown = document.createElement("div");
    var navbar = document.getElementsByClassName("navbar")[0];
    var dropdownContent = document.getElementById("all-categories");
    dropdownContent.classList.add("dropdown-content");
    dropdownContent.classList.add("move-left-content");
    dropdown.classList.add("dropdown");
    var button = document.createElement("button");
    button.innerText = `All Categories`;
    button.color = "black";
    button.classList.add("dropbtn");
    dropdown.appendChild(button);
    dropdown.appendChild(dropdownContent);
    navbar.appendChild(dropdown);
  }
  if (width > 600 && PhoneView) {
    PhoneView = false;
    var dropdownContent = document.getElementById("all-categories");
    dropdownContent.classList.remove("dropdown-content", "move-left-content");
    var navbar = document.getElementsByClassName("navbar")[0];
    console.log(navbar);
    navbar.removeChild(navbar.lastChild);
    navbar.insertBefore(dropdownContent, navbar.children[1]);
  }
}
