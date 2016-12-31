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
    eval(entered);
    $('.screen').text(eval(entered));

  });

  $('.clear').on('click', function () {
    entered = "";
    $('.screen').text(entered);
  })



});
