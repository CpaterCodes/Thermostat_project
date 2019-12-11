describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Should have a default temperature of 20',function(){
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('Should be able to increase', function() {
    thermostat.increase(2);
    expect(thermostat.temperature).toEqual(22);
  });

  it('Should be able to decrease', function() {
    thermostat.decrease(2);
    expect(thermostat.temperature).toEqual(18);
  });
});
