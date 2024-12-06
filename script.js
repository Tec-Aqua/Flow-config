document.getElementById('injection-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const maxFlowRate = parseFloat(document.getElementById('maxFlowRate').value);
    const injectionPercentage = parseFloat(document.getElementById('injectionPercentage').value);

    if (isNaN(maxFlowRate) || isNaN(injectionPercentage) || injectionPercentage <= 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    }

    // Conversion du pourcentage en coefficient (fraction de 1)
    const injectionCoefficient = injectionPercentage / 100;

    // Calcul de la valeur de débit à 20mA
    const maxInjectionFlowRate = maxFlowRate / injectionCoefficient;

    // Convertir en différentes unités
    const formattedFlowLh = maxInjectionFlowRate.toLocaleString('fr-FR', { minimumFractionDigits: 2 });
    const flowM3h = (maxInjectionFlowRate / 1000).toLocaleString('fr-FR', { minimumFractionDigits: 2 });
    const flowLs = (maxInjectionFlowRate / 3600).toLocaleString('fr-FR', { minimumFractionDigits: 2 });
    const flowLmin = (maxInjectionFlowRate / 60).toLocaleString('fr-FR', { minimumFractionDigits: 2 });

    // Afficher le résultat
    document.getElementById('result').innerHTML = `
        <p>Configurez le <b>paramètre 63 rate-max (débit max.)</b> sur l'appareil avec la valeur suivante (sélectionner suivant l'unité de mesure paramétrée m3/h, l/min etc..) :</p>
        <ul>
            <li><strong>${formattedFlowLh}</strong> L/h</li>
            <li><strong>${flowM3h}</strong> m³/h</li>
            <li><strong>${flowLs}</strong> L/s</li>
            <li><strong>${flowLmin}</strong> L/min</li>
        </ul>
    `;
});
