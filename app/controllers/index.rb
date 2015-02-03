require 'pry'

get '/' do
  @events = Event.all
  erb :index
end



post '/events/create' do
  event = Event.create(params)
  day = (event.start_date).strftime("%a")
  start_time = (event.start_time).strftime("%I:%M %p")
  month_day = (event.start_date).strftime("%d")
  content_type :json
  {title: event.title, day: day, start_time: start_time, month_day: month_day}.to_json
end
