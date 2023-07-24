const temperature = document.querySelector(".temp input");
const result = document.querySelector(".result input");
const inputTemp = document.querySelector(".temp select");
const resultTemp = document.querySelector(".result select");

temperature.oninput = function () {
    let inputTempValue = inputTemp.value;
    let resultTempValue = resultTemp.value;

    let CelciusToKelvin = inputTempValue === "Celcius" && resultTempValue === "Kelvin";
    let CelciusToFahrenheit = inputTempValue === "Celcius" && resultTempValue === "Fahrenheit";

    let KelvinToCelcius = inputTempValue === "Kelvin" && resultTempValue === "Celcius";
    let KelvinToFahrenheit = inputTempValue === "Kelvin" && resultTempValue === "Fahrenheit";

    let FahrenheitToCelcius = inputTempValue === "Fahrenheit" && resultTempValue === "Celcius";
    let FahrenheitToKelvin = inputTempValue === "Fahrenheit" && resultTempValue === "Kelvin";

    let sameUnit = inputTempValue === resultTempValue;

    let inputTemperatureValue = temperature.value;
    let convertTemperature = 0;

    if (CelciusToKelvin) {
        convertTemperature = (inputTemperatureValue * 1) + 273.15;
        result.value = convertTemperature.toFixed(2);
    }
    else if (CelciusToFahrenheit) {
        convertTemperature = (9 / 5 * inputTemperatureValue) + 32;
        result.value = convertTemperature.toFixed(2);
    }
    else if (KelvinToCelcius) {
        convertTemperature = (inputTemperatureValue - 273.15);
        result.value = convertTemperature.toFixed(2);
    }
    else if (KelvinToFahrenheit) {
        convertTemperature = 9 / 5 * (inputTemperatureValue - 273.15) + 32;
        result.value = convertTemperature.toFixed(2);
    }
    else if (FahrenheitToCelcius) {
        convertTemperature = 5 / 9 * (inputTemperatureValue - 32);
        result.value = convertTemperature.toFixed(2);
    }
    else if (FahrenheitToKelvin) {
        convertTemperature = 5 / 9 * (inputTemperatureValue - 32) + 273.15;
        result.value = convertTemperature.toFixed(2);
    }
    else if (sameUnit) {
        result.value = inputTemperatureValue;
    }
}
