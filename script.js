$(".btn-close").hide();
$(".fa-search").show();
$(".input-text").on("focus", function() {
  $(this)
    .siblings(".btn-close")
    .show();
  $(this)
    .siblings(".fa-search")
    .hide();
});
$(".btn-close").click(function(e) {
  $(".fa-search").show();
  $(".btn-close").hide();
  e.stopPropagation();
});
$(".input-text").on("focusout", function() {
  $(this)
    .siblings(".btn-close")
    .hide();
  $(this)
    .siblings(".fa-search")
    .show();
});
