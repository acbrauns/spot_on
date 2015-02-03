$(document).ready(function () {


  $("form.create_event").on("submit", function(e){
    e.preventDefault();
    $.ajax({
      url: '/events/create',
      type: 'POST',
      data: $(this).serialize()
    }).done(function(response){
      event = response.event;
      $('.events_list').prepend('<li>' + event.title + '</li>');
      $('form.create_event').find("input[type=text], input[type=date]").val("");
    });
  });


  //for persistence w/ layout on page reload, use helper method/boolean instead?
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
