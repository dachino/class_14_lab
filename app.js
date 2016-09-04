var convApp {
  log: [],

  unit: {
    'inches',
    'centimeters',
    'fluid-ounces',
    'milliliters',
    'miles',
    'kilometers',
    'pounds',
    'kilograms',
    'shit-tons',
    'metric-shit-tons'
  },

  conversions: [
    new Conversion(INCHES, CENTIMETERS, 2.54),
    new Conversion(FLUID_OZ, MILLILITERS, 29.5735),
    new Conversion(MILES, KILOMETERS, 1.60934),
    new Conversion(POUNDS, KILOGRAMS, 0.453592),
    new Conversion(SHIT_TON, METRIC_SHIT_TON, 24)
  ],

  Conversion: function(fromUnit, ratio) {
    this.fromUnit = fromUnit;
    this.ratio = ratio;
  },

  getConversion: function(fromUnit) {
    for(conversion in this.conversions) {
      if (conversion.fromUnit === fromUnit || conversion.toUnit === fromUnit)
        return conversion;
    }
  },

  submitConversion: function(event) {
    var toConvert = parseFloat(event.target.fromNum.value);
    var fromUnit =
  }
}

convApp.Conversion.prototype.convert(unit, number) {
  if (unit === toUnit) {
    return number * ratio;
  } else if (unit === fromUnit) {
    return number / ratio;
  } else {
    console.log('Invalid conversion.');
    return -1;
  }
}
