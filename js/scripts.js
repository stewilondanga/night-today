var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(document).ready(function() {
  $("#tooglenight").change(function() {
    if (this.checked) {
      $("#bd").addClass("night");
      $("i").css("color", "white");
    } else {
      $("#bd").removeClass("night");
      $("i").css("color", "black");
    }
  });
});
