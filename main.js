// Giphy API object
const giphy = {
  url: "https://api.giphy.com/v1/gifs/trending",
  query: {
    api_key: "54452c59b31e4d14aca213ec76014baa",
    limit: 12
  }
};

function update() {
  $("#update .icon").toggleClass("d-none");
  $.get(giphy.url, giphy.query)
    .done(res => {
      $("#giphys").empty();
      $.each(res.data, (i, giphy) => {
        $("#giphys").prepend(
          '<div class="col-sm-6 col-md-4 col-lg-3 p-1">' +
            '<img class="w-100 img-fluid" src="' +
            giphy.images.downsized_large.url +
            '">' +
            "</div>"
        );
      });
    })
    .fail(() => {
      $(".alert").slideDown();
      setTimeout(() => {
        $(".alert").slideUp();
      }, 2000);
    })
    .always(() => {
      $("#update .icon").toggleClass("d-none");
    });

  return false;
}

$("#update a").click(update);
update();
