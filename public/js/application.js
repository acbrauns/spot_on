$(document).ready(function () {

  $("form.create_event").on("submit", function(e){
    e.preventDefault();
    $.ajax({
      url: '/events/create',
      type: 'POST',
      data: $(this).serialize()
    }).done(function(response){
      if(response.saved==true){
        $('.events_list').prepend('<tr class="top_row"><td><p>' + response.day + '</p></td><td><p>'
          + response.start_time + ' - ' + response.end_time + '</p></td><tr class="bottom_row"><td><p>' +
          response.month_day + '</p></td><td><p class="event_title">' + response.title + '</p></td></tr>');

        $('.grid_view').prepend('<div class="col-xs-3 grid-container"><header class="tile_header"><p><b>' + response.day
          + ', ' + response.hyphen_date +
          '<br>' + response.start_time + '</b></p></header><div class="tile_text"><p><b>' + response.title +
          '</b></p><p>' + response.location + '</p></div></div>');

        $('form.create_event').find("input[type=text], input[type=date], input[type=time]").val("");
      }
    }).fail(function(){
      console.log("fail");
    });
  });


  //defaults to list view
  //for persistence w/ layout on page reload, use helper method/toggle boolean instead?
  $(".list_toggle").on("click", function(e){
    e.preventDefault();
    $('.list_view').show();
    $('.grid_view').hide();
    $(this).css("color", "white");
    $('.grid_toggle').css("color", "#819EB2");
  });


  $(".grid_toggle").on("click", function(e){
    e.preventDefault();
    $('.list_view').hide();
    $('.grid_view').show();
    $(this).css("color", "white");
    $('.list_toggle').css("color", "#819EB2");

  });

});
