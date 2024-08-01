// Función que realiza el cálculo de la conversión a coordenadas polares
function calculatePolar(x, y) {
    // Cálculo del radio
    const r = Math.sqrt(x * x + y * y);
    
    // Cálculo del ángulo en radianes y conversión a grados
    const theta = Math.atan2(y, x) * (180 / Math.PI);
    
    // Retorna los resultados como un objeto
    return { r, theta };
}

// Función principal que maneja la conversión y actualización del DOM
function convertToPolar() {
    // Obtiene los valores de los campos de entrada
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const resultDiv = document.getElementById('result');

    // Validación de entradas
    if (isNaN(x) || isNaN(y)) {
        resultDiv.innerHTML = '<p id="error">Por favor, ingresa valores válidos para X e Y.</p>';
        return;
    }

    // Llama a la función de cálculo
    const { r, theta } = calculatePolar(x, y);

    // Muestra los resultados en el DOM
    resultDiv.innerHTML = `<p>Coordenadas Polares:</p><p>Radio (r): ${r.toFixed(2)}</p><p>Ángulo (θ): ${theta.toFixed(2)} grados</p>`;
}


// Función que realiza el cálculo de la conversión a coordenadas rectangulares
function calculateRectangular(r, theta) {
    // Conversión del ángulo a radianes
    const thetaRad = theta * (Math.PI / 180);
    
    // Cálculo de las coordenadas rectangulares
    const x = r * Math.cos(thetaRad);
    const y = r * Math.sin(thetaRad);
    
    // Retorna los resultados como un objeto
    return { x, y };
}

// Función principal que maneja la conversión y actualización del DOM
function convertRectangular() {
    // Obtiene los valores de los campos de entrada
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);
    const resultDiv = document.getElementById('result');

    // Validación de entradas
    if (isNaN(r) || isNaN(theta)) {
        resultDiv.innerHTML = '<p id="error">Por favor, ingresa valores válidos para Radio y Ángulo.</p>';
        return;
    }

    // Llama a la función de cálculo
    const { x, y } = calculateRectangular(r, theta);

    // Muestra los resultados en el DOM
    resultDiv.innerHTML = `<p>Coordenadas Rectangulares:</p><p>X: ${x.toFixed(2)}</p><p>Y: ${y.toFixed(2)}</p>`;
}


