class Event < ActiveRecord::Base
  validates_presence_of :title, :start_date, :end_date, :start_time, :end_time, :location
end
