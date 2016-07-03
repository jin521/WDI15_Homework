

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'



get '/' do   # root path
  erb :form
end


get '/lookup' do   # set up the route for root path,

  @title = params[:title]
  #binding.pry

  url = "http://www.omdbapi.com/?t=#{ @title }"
  movie_info = HTTParty.get url
  @Poster = movie_info['Poster']


  # title = "star wars"
  # url = "http://www.omdbapi.com/"
  # parameter = "?s="
  # search_term = url + parameter + title
  # results = HTTParty.get(search_term)
  # @results = results["Search"]
  # @title = @results[0]["Title"]
  erb :lookup
end
