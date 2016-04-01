require 'sinatra'
require 'json'

enable :sessions

  get '/' do
    File.read('views/index.html')
  end

  post '/temperature' do
    session[:temp] = params[:temp].to_i
    redirect '/'
  end

  get '/temperature' do
    if session[:temp]
      JSON.generate({temp: session[:temp]})
    else
      JSON.generate({temp: 20})
    end
  end
