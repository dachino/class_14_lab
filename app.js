function Conversion(fromUnit, toUnit, ratio) {
  this.fromUnit = fromUnit;
  this.toUnit = toUnit;
  this.ratio = ratio;
}

Conversion.prototype.convert = function(unit, number) {
  if (unit === this.fromUnit) {
    return { result: number * this.ratio, unit: this.toUnit };
  } else if (unit === this.toUnit) {
    return { result: number / this.ratio, unit: this.fromUnit };
  } else {
    console.log('Invalid conversion.');
    return -1;
  }
};

var convApp = {
  log: [],

  conversions: [
    new Conversion('inches', 'centimeters', 2.54),
    new Conversion('fluid-ounces', 'milliliters', 29.5735),
    new Conversion('miles', 'kilometers', 1.60934),
    new Conversion('pounds', 'kilograms', 0.453592),
    new Conversion('shit-tons', 'metric-shit-tons', 24)
  ],

  getConversion: function(fromUnit) {
    for(i in this.conversions) {
      if (this.conversions[i].fromUnit == fromUnit || this.conversions[i].toUnit == fromUnit)
        return this.conversions[i];
    }
  },

  submitConversion: function(event) {
    event.preventDefault();
    var toConvert = parseFloat(event.target.fromNum.value);
    var fromUnit = event.target.fromUnit.value;
    var conversion = convApp.getConversion(fromUnit).convert(fromUnit, toConvert);
    console.log(toConvert + ' ' + fromUnit + ' is ' + conversion.result + ' ' + conversion.unit + '.');
  }
}

document.getElementById('calc-form').addEventListener('submit', convApp.submitConversion);
