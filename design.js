function convert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    var kelvin = celsius + 273.15;
  
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("kelvin").value = kelvin;
  }
  