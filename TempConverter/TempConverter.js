document.getElementById("num").addEventListener('input', function () {
    var inputTemp = parseFloat(this.value);
    var fromUnit;
    if (inputTemp >= -100 && inputTemp <= 100) {
        fromUnit = "Celsius";
    } else {
        fromUnit = "Fahrenheit";
    }
    document.getElementById("degreeSelect").value = fromUnit;
    var toUnitDropdown = document.getElementById("SelectDegree");
    toUnitDropdown.value = fromUnit === "Celsius" ? "Fahrenheit" : "Celsius";
});

function ConvertTemprature() {
    var inputTemp = parseFloat(document.getElementById("num").value);
    var fromUnit = document.getElementById("degreeSelect").value;
    var toUnit = document.getElementById("SelectDegree").value;

    var result;
    if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            result = (inputTemp * 9 / 5) + 32;
        } else {
            result = inputTemp;
        }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            result = ((inputTemp - 32) * 5) / 9;
        } else {
            result = inputTemp;
        }
    }

    var resultBox = document.querySelector(".view");
    resultBox.innerHTML = `<h4>${result.toFixed(2)}<span style="vertical-align: super; font-size: 20px;">°${toUnit.charAt(0)}</span></h4>`;
}
