$(function() {
  $("#fakeLoader").fakeLoader({
    timeToHide:1200, //Time in milliseconds for fakeLoader disappear
    zIndex:"999",//Default zIndex
    spinner:"spinner6",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
    bgColor:"rgb(229, 124, 41)", //Hex, RGB or RGBA colors
    });

    // initialize bLazy library.
    var bLazy = new Blazy();

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

  });
