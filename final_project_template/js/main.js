




//  When the "ui Team" button is clicked
$('#ui').on('click', function () {
  // a. Remove the boring class from the section with the id boxes
  $('#boxes').removeClass('hide');
  // b. Fade out all of the divs in #row4 slowly (hint: your selector could be $('#row4 div') )
  $('#row4 div').fadeOut(1000);
  // c. Add a class snazzy in your css and add it to all items with the class .box
  $('.box').addClass('snazzy');

  // SlideUp all the h2s on the page quickly
  $('h2').slideUp(200);
  $('#box12').prepend('<h4>"Wild!"</h4>');
});


//  When the "Digital Marketing Team" button is clicked
$('#reset').on('click', function () {
  // a. Slide down the header
  $('header').slideDown(350);

  $('#row4 div').show();



  $('h2').slideDown();

  $('.add-para p').remove();
  $('#box12 h4').remove();
});
