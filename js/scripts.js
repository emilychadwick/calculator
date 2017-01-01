$(document).ready(function() {

  var entered = "";

  $('.integer').on('click', function () {
    entered += this.innerText;
    console.log(entered);

    $('.screen').text(entered);

  });

  $('.operator').on('click', function () {
    entered += this.innerText;
    console.log(entered);

    $('.screen').text(entered);

  });

  $('.calculate').on('click', function () {
    console.log(entered);
    if (entered.indexOf('/0') !== -1) {
      $('.screen').text('Error');
    } else {
      eval(entered);
      $('.screen').text(eval(entered));
    };
  });






    //eval(entered);
    //$('.screen').text(eval(entered));


  $('.clear').on('click', function () {
    entered = "";
    $('.screen').text(entered);
  });



});
