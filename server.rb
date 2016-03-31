require 'sinatra'
require 'json'

enable :sessions

  get '/' do
    send_file 'views/index.html'
  end

  post '/temperature' do
    p params[:temp]
    session[:temp] = params[:temp].to_i
    redirect '/temperature'
  end

  get '/temperature' do
    p session[:temp]
    if session[:temp]
      JSON.generate({temp: session[:temp]})
    else
      JSON.generate({temp: 20})
    end
    # redirect '/'
  end
