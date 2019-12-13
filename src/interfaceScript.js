var api_key = 'api key';

function weather(cityData,cityName){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityData + '&appid=' + api_key + '&units=metric',function(data){
    $('#city_temperature').text(data.main.temp);
  });
  $('#city').text(cityName);
}

function interface_init(){
  var thermostat = new Thermostat();

  $(document).ready(function(){
    weather('London,uk','London');
    $('#London').click(function(){
      weather('London,uk','London');
    });
    $('#NewYork').click(function(){
      weather('New York,us','New York');
    });
    $('#Ashgabat').click(function(){
      weather('Ashgabat,tm','Ashgabat');
    });
    $('#temperature').text(thermostat.temperature);
    $('#powersave').text('Ecological consideration mode');
    $('#down').click(function(){
      thermostat.decrease(1);
      $('#temperature').text(thermostat.temperature);
    });
    $('#up').click(function(){
      thermostat.increase(1);
      $('#temperature').text(thermostat.temperature);
    });
    $('#powersave').click(function(){
      if(thermostat.isPowerSave()){
        thermostat.dangerMode();
        $('#powersave').text('Ecological destruction mode');
      } else {
        thermostat.safetyMode();
        $('#powersave').text('Ecological consideration mode');
      };
      $('#temperature').text(thermostat.temperature);
    });
    $('#reset').click(function(){
      thermostat.reset();
      $('#temperature').text(thermostat.temperature);
    });
  });
};
