window.addEventListener("resize", makeHeaderResponsive);
var PhoneView = false;
makeHeaderResponsive();
function makeHeaderResponsive() {
  var width = document.documentElement.clientWidth;

  if (width < 600 && !PhoneView) {
    PhoneView = true;
    var lang = document
      .getElementsByClassName("header")[0]
      .removeChild(document.getElementById("lang"));
    document
      .getElementsByClassName("cart-count")[0]
      .insertBefore(
        lang,
        document.getElementsByClassName("cart-count")[0].firstChild
      );
  }
  if (width > 600 && PhoneView) {
    PhoneView = false;
    var lang = document
      .getElementsByClassName("cart-count")[0]
      .removeChild(document.getElementById("lang"));

    document
      .getElementsByClassName("header")[0]
      .insertBefore(
        lang,
        document.getElementsByClassName("header")[0].firstChild
      );
  }
}
