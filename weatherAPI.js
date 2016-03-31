$('#submit').click(function(){

  var city = $('#city').val();
  var address = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=07aa83fe6409b7edfdda0ff1cbd8b793&units=metric";

  $.ajax({
    type: 'GET',
    url: address,
    success: function(data){
      $('#weather').text('Location: ' + data.name + ", "+ 'Conditions: ' + data.weather[0].main + ', Current Temperature: '+ (data.main.temp).toFixed(2) + "\xB0C");
    },
    error: function(){
      alert('Error loading weather info');
    }
  });
});
