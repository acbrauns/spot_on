$(document).ready(function () {

  $("form.create_event").on("submit", function(e){
    e.preventDefault();
    $.ajax({
      url: '/events/create',
      type: 'POST',
      data: $(this).serialize()
    }).done(function(response){
      $('.events_list').prepend('<tr class="top_row"><td><p>' + response.day + '</p></td><td><p>'
        + response.start_time + ' - ' + response.end_time + '</p></td><tr class="bottom_row"><td><p>' +
        response.month_day + '</p></td><td><p class="event_title">' + response.title + '</p></td></tr>');

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
