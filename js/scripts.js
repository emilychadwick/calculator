$(document).ready(function() {

  var entered = "";

  $('.integer').on('click', function () {
    entered += this.innerText;
    // console.log(entered);
    $('.screen').text(entered);

  });

  $('.operator').on('click', function () {

    if (entered[entered.length - 1] === '-' ||
        entered[entered.length - 1] === '+' ||
        entered[entered.length - 1] === '*' ||
        entered[entered.length - 1] === '/') {

      // replace old operator with new

      entered = entered.split("");
      entered[entered.length - 1] = this.innerText;
      entered = entered.join('');
      $('.screen').text(entered);

    } else {

      // add like normal
      entered += this.innerText;
      $('.screen').text(entered);

    }
  });

  $('.calculate').on('click', function () {
    // console.log(entered);
    if (entered.indexOf('/0') !== -1) {
      $('.screen').text('Error');
    } else {
      eval(entered);
      $('.screen').text(eval(entered));
    };
  });

  $('.clear').on('click', function () {
    entered = "";
    $('.screen').text(entered);
  });

});


