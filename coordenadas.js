function convertToPolar() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const resultDiv = document.getElementById('result');

    // Validación de entradas
    if (isNaN(x) || isNaN(y)) {
        resultDiv.innerHTML = '<p id="error">Por favor, ingresa valores válidos para X e Y.</p>';
        return;
    }

    // Conversión a coordenadas polares
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI);

    resultDiv.innerHTML = `<p>Coordenadas Polares:</p><p>Radio (r): ${r.toFixed(2)}</p><p>Ángulo (θ): ${theta.toFixed(2)} grados</p>`;
}

function convertToRectangular() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);
    const resultDiv = document.getElementById('result');

    // Validación de entradas
    if (isNaN(r) || isNaN(theta)) {
        resultDiv.innerHTML = '<p id="error">Por favor, ingresa valores válidos para Radio y Ángulo.</p>';
        return;
    }

    // Conversión a coordenadas rectangulares
    const thetaRad = theta * (Math.PI / 180);
    const x = r * Math.cos(thetaRad);
    const y = r * Math.sin(thetaRad);

    resultDiv.innerHTML = `<p>Coordenadas Rectangulares:</p><p>X: ${x.toFixed(2)}</p><p>Y: ${y.toFixed(2)}</p>`;
}
