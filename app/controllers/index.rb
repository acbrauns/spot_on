require 'pry'

get '/' do
  @events = Event.all
  erb :index
end



post '/events/create' do
  event = Event.create(params)
  content_type :json
  {event: event}.to_json
end
