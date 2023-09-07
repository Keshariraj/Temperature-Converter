document.addEventListener('DOMContentLoaded', function () {
    const celsiusInput = document.getElementById('celsius');
    const convertBtn = document.getElementById('convertBtn');
    const resultElement = document.getElementById('result');

    convertBtn.addEventListener('click', function () {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultElement.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
        } else {
            resultElement.textContent = 'Please enter a valid number for Celsius.';
        }
    });
});
