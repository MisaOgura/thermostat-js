$(document).ready(function() {

  var thermostat = new Thermostat();
  var temp = thermostat.temperature;

  updateTemperature();

  $.ajax({
    type: 'GET',
    url: 'http://localhost:4567/temperature',
    success: function(data){
      temp = (JSON.parse(data)).temp;
      console.log('inside ajax request '+temp);
    },
    error: function(){
      alert('Error loading temp');
    }
  });

  console.log('outside '+temp);

  $('#up').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
    console.log('inside up click '+temp);
  });

  $('#down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset').click(function() {
      thermostat.tempReset();
      updateTemperature();
    });

  $('#switchpowersaving').click(function() {
    thermostat.switchModePowerSaving();
    updateTemperature();
  });

    function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature() + "\xB0C");
    $('#up').attr('value', thermostat.currentTemperature());
    $('#down').attr('value', thermostat.currentTemperature());
    $('#reset').attr('value', thermostat.currentTemperature());
    $('.display').css('background-color', thermostat.displayColor());
    $('#psm').text(thermostat.displayPowerSaveMode());
  }
});
