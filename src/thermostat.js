function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.POWERSAVE_MAX = 25;
  this.DANGER_MAX = 32;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.maximum = this.POWERSAVE_MAX;
};

Thermostat.prototype.increase = function(n) {
  this.temperature += n;
  if (this.temperature > this.maximum) this.temperature = this.maximum;
};

Thermostat.prototype.decrease = function(n) {
  this.temperature -= n;
  if (this.temperature < this.MINIMUM_TEMPERATURE) this.temperature = this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.dangerMode = function() {
  this.maximum = this.DANGER_MAX;
};

Thermostat.prototype.safetyMode = function() {
  this.maximum = this.POWERSAVE_MAX;
};

Thermostat.prototype.isPowerSave = function() {
  return this.maximum == this.POWERSAVE_MAX;
};
