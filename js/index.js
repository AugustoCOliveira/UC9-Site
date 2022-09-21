$("#product-button-right").on("click", function () {
  let first = $("#row").find(".product-card:first-child");
  $("#row").append(first);
  $("#row").find(".product-card").first();
});

$("#product-button-left").on("click", function () {
  let last = $("#row").find(".product-card:last-child");
  $("#row").prepend(last);
  $("#row").find(".product-card").last();
});
