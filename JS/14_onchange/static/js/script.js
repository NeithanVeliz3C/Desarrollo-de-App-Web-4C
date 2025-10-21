function acceptCookies() {
    const cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.remove();
}

function cambioTemp(selectElement) {
    const unidad = selectElement.value; // "celsius" o "fahrenheit"
    const tempMax = document.querySelectorAll(".temperatura-max");
    const tempMin = document.querySelectorAll(".temperatura-min");

    tempMax.forEach((element) => {
        let valor = parseInt(element.textContent);
        if (unidad === "fahrenheit") {
            element.textContent = `${Math.round((valor * 9) / 5 + 32)}°`;
        } else {
            element.textContent = `${Math.round(((valor - 32) * 5) / 9)}°`;
        }
    });

    tempMin.forEach((element) => {
        let valor = parseInt(element.textContent);
        if (unidad === "fahrenheit") {
            element.textContent = `${Math.round((valor * 9) / 5 + 32)}°`;
        } else {
            element.textContent = `${Math.round(((valor - 32) * 5) / 9)}°`;
        }
    });
}
