document.getElementById('injection-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const maxFlowRate = parseFloat(document.getElementById('maxFlowRate').value);
    const injectionPercentage = parseFloat(document.getElementById('injectionPercentage').value);

    if (isNaN(maxFlowRate) || isNaN(injectionPercentage) || injectionPercentage <= 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    }

    // Convertir le pourcentage en coefficient
    const injectionCoefficient = injectionPercentage / 100;

    // Calcul de la valeur de débit à 20mA
    const maxInjectionFlowRate = maxFlowRate / injectionCoefficient;

    // Afficher le résultat
    document.getElementById('result').innerText = 
        `Configurez le F110-P pour 20mA = ${maxInjectionFlowRate.toFixed(2)} L/h`;
});
