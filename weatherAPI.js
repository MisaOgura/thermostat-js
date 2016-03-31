$('#submit').click(function(){

  var city = $('#city').val();
  var address = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "yourAPI";

  $.ajax({
    type: 'GET',
    url: address,
    success: function(data){
      $('#weather').text('Location:' + data.name + ", "+ 'Conditions:' + data.weather[0].main);
    },
    error: function(){
      alert('Error loading weather info');
    }
  });
});
