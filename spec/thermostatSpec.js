describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('Should have a default temperature of 25',function(){
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });
});
