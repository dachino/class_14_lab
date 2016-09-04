function Conversion(fromUnit, ratio) {
  this.fromUnit = fromUnit;
  this.ratio = ratio;
}

Conversion.prototype.convert = function(unit, number) {
  if (unit === toUnit) {
    return { result: number * ratio, unit: fromUnit };
  } else if (unit === fromUnit) {
    return { result: number / ratio, unit: toUnit };
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
    for(conversion in this.conversions) {
      if (conversion.fromUnit == fromUnit || conversion.toUnit == fromUnit)
        return conversion;
    }
  },

  submitConversion: function(event) {
    event.preventDefault();
    var toConvert = parseFloat(event.target.fromNum.value);
    var fromUnit = event.target.fromUnit.value;
    console.log('submitted:', toConvert, fromUnit);
    var conversion = convApp.getConversion(fromUnit).convert(toConvert);
    console.log(toConvert + ' ' + fromUnit + ' is ' + conversion.result + ' ' + conversion.unit);
  }
}

document.getElementById('calc-form').addEventListener('submit', convApp.submitConversion);
