var positionElementInPage = $('#votre_menu_ou_votre_image_ou_votre_element').offset().top;
 $(window).scroll(
 function() {
 if ($(window).scrollTop() >= positionElementInPage) {
 // fixed
 $('#votre_menu_ou_votre_image_ou_votre_element').addClass("floatable");
 } else {
 // relative
 $('#votre_menu_ou_votre_image_ou_votre_element').removeClass("floatable");
 }
 }
 );