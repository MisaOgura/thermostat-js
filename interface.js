$(document).ready(function() {

  var thermostat = new Thermostat();

  updateTemperature();

  $('#up').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
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
    $('#temperature').text(thermostat.currentTemperature());
    // $('#temperature').attr('class', thermostat.displayColor());
  };
});