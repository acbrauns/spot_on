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
      $('form.create_event').find("input[type=text]").val("");
    });
  });

});
