$(document).ready(function () {


  $("form.create_event").on("submit", function(e){
    e.preventDefault();
    $.ajax({
      url: '/events/create',
      type: 'POST',
      data: $(this).serialize()
    }).done(function(response){
      // event = response.event;
      $('.events_list').prepend('<tr><td>' + response.day + '</td><td>'
        + response.start_time + '</td><tr class="bottom_line"><td>' +
        response.month_day + '</td><td>' + response.title + '</td></tr>');

      $('form.create_event').find("input[type=text], input[type=date], input[type=time]").val("");
    });
  });


  //defaults to list view
  //for persistence w/ layout on page reload, use helper method/toggle boolean instead?
  $(".list_toggle").on("click", function(e){
    e.preventDefault();
    $('.list_view').show();
    $('.grid_view').hide();
  });

  $(".grid_toggle").on("click", function(e){
    e.preventDefault();
    $('.list_view').hide();
    $('.grid_view').show();
  });

});
