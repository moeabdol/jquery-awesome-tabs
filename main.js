$(document).ready(function() {
  $('.tabs-header .item').click(function() {
    var number = $(this).data('option');

    $('.tabs-header .item').removeClass('active');
    $(this).addClass('active');

    $('.tabs-container .item').hide();
    $('.tabs-container .item[data-item="' + number + '"]').show();
  });
});
