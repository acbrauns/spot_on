
get '/' do
  @events = Event.all
  erb :index
end

post '/events/create' do
  event = Event.new(params)

  if event.save
    day = (event.start_date).strftime("%a")
    hyphen_date = (event.start_date).strftime("%m-%d")
    start_time = (event.start_time).strftime("%I:%M %p")
    end_time = (event.end_time).strftime("%I:%M %p")
    month_day = (event.start_date).strftime("%d")
    content_type :json
    {title: event.title, day: day, start_time: start_time, end_time: end_time, month_day: month_day, hyphen_date: hyphen_date, location: event.location, saved: true}.to_json
  else
    redirect '/'
  end

end
