function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.increase = function(n) {
  this.temperature += n;
};

Thermostat.prototype.decrease = function(n) {
  this.temperature -= n;
};
