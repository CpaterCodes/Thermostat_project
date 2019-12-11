function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.POWERSAVE_MAX = 25;
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.increase = function(n) {
  this.temperature += n;
  if (this.temperature > this.POWERSAVE_MAX) this.temperature = this.POWERSAVE_MAX;
};

Thermostat.prototype.decrease = function(n) {
  this.temperature -= n;
  if (this.temperature < this.MINIMUM_TEMPERATURE) this.temperature = this.MINIMUM_TEMPERATURE;
};
