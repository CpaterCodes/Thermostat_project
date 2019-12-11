describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('Should have a default temperature of 20',function(){
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it("Should be powersaving by default", function() {
    expect(thermostat.isPowerSave()).toEqual(true);
  });

  describe("toggling power mode", function() {
    it("should deactivate powersave", function() {
      thermostat.dangerMode();
      expect(thermostat.isPowerSave()).toEqual(false);
    });

    it("should reactivate powersave", function() {
      thermostat.dangerMode();
      thermostat.safetyMode();
      expect(thermostat.isPowerSave()).toEqual(true);
    });
  });

  describe('.increase', function(){
    it('Should be able to increase', function() {
      thermostat.increase(2);
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE + 2);
    });

    it('Should not exceed 25 when power saving mode active', function(){
      thermostat.increase(6);
      expect(thermostat.temperature).toEqual(thermostat.POWERSAVE_MAX);
    });

    it('Should not exceed 32 when power saving mode inactive', function(){
      thermostat.dangerMode();
      thermostat.increase(31);
      expect(thermostat.temperature).toEqual(thermostat.DANGER_MAX);
    });
  });

  describe('.decrease', function(){
    it('Should be able to decrease', function() {
      thermostat.decrease(2);
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE - 2);
    });

    it('Should not decrease beyond 10', function(){
      for (var i = 0; i < 11; i++) thermostat.decrease(1);
      expect(thermostat.temperature).toEqual(thermostat.MINIMUM_TEMPERATURE);
    });
  });
});
