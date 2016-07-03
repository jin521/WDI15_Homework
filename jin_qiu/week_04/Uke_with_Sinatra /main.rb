require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


get '/' do
  erb :home
end


# Index
get '/uke' do
  @uke = query_db "SELECT * FROM uke"
  erb :uke_index
end


get '/uke/new' do
  erb :uke_new
end


post '/uke' do
  query = "INSERT INTO uke (name, family, size, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:size] }','#{ params[:image] }')"

  query_db query
  redirect to('/uke')
end



# Show ( show a single uke)
get '/uke/:id' do
  @uke = query_db "SELECT * FROM uke WHERE id = #{ params[:id] }"
  @uke= @uke.first # Extract the uke hash from the array
  erb :uke_show
end

# Edit
get '/uke/:id/edit' do
  @uke = query_db "SELECT * FROM uke WHERE id = #{ params[:id] }"
  @uke = @uke.first # Extract the uke hash from the array
  erb :uke_edit
end

# Update
post '/uke/:id' do
  query = "UPDATE uke SET name='#{ params[:name] }', family='#{ params[:family] }', size='#{ params[:size] }',image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to('/uke/' + params[:id])
end

# Delete
get '/uke/:id/delete' do
  query_db "DELETE FROM uke WHERE id = #{ params[:id] }"
  redirect to('/uke')
end


def query_db(sql)
  db = SQLite3::Database.new 'database.db' # Establish connection to the database
  db.results_as_hash = true

  puts sql

  result = db.execute sql # Actually run the sql against the database
  db.close # Close the database connection so we don't run out of connections
  result # Finally, return the result
end
