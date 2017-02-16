$(function () {
  $('.payment_sum input').keyup(function () {
    if($(this).val().length) {
      $('.payment_sum span i').css({display:'block'});
    } else {
      $('.payment_sum span i').css({display:'none'});
    }
  });

  $('.payment_sum span i').on('click', function () {
    $('.payment_sum input').val('');
    $('.payment_sum span i').css({display:'none'});
  });

  $('.payment_method li').on('click', function () {
    $('.payment_method li').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index() + 1;
    $('.payment_method input:hidden').val(index);
  })
});
