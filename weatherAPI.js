var weatherData;
var notParsedJson;

var request = {
  url: "http://api.openweathermap.org/data/2.5/weather",
  data: {
    id: "2643743",
    APPID: "99de480d57598b514395bc959524e5b9"
  },
  type: "GET",
  dataType: "json"
};

$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=99de480d57598b514395bc959524e5b9',
  success: function(data){
    console.log('success', data);
    console.log(data.name + ':' + data.weather);
  }
});
