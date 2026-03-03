/**
 * Calculadora de Crédito de Formación Bonificada FUNDAE
 * Versión: 2026.1
 * 
 * Calcula el crédito de formación disponible para una empresa
 * según su plantilla y cotización por formación profesional.
 * 
 * Basado en la normativa vigente (Ley 30/2015 y RD 694/2017)
 * 
 * @author CiberAula - www.ciberaula.com
 * @license CC BY-SA 4.0
 */

const CREDITO_MINIMO = 420;

const TRAMOS = [
    { min: 1,   max: 5,    porcentaje: 0,   cofinanciacion: 0,  label: "1-5 trabajadores" },
    { min: 6,   max: 9,    porcentaje: 100, cofinanciacion: 5,  label: "6-9 trabajadores" },
    { min: 10,  max: 49,   porcentaje: 75,  cofinanciacion: 10, label: "10-49 trabajadores" },
    { min: 50,  max: 249,  porcentaje: 60,  cofinanciacion: 20, label: "50-249 trabajadores" },
    { min: 250, max: 99999, porcentaje: 50,  cofinanciacion: 40, label: "250+ trabajadores" }
];

/**
 * Calcula el crédito de formación FUNDAE disponible
 * 
 * @param {Object} params
 * @param {number} params.numTrabajadores - Número medio de trabajadores en plantilla
 * @param {number} params.cotizacionFP - Cuota de formación profesional del año anterior (€)
 * @returns {Object} Resultado con crédito calculado, porcentaje, cofinanciación, etc.
 * 
 * @example
 * calcularCreditoFUNDAE({ numTrabajadores: 3, cotizacionFP: 200 })
 * // => { creditoFinal: 420, ... } (crédito mínimo garantizado)
 * 
 * @example
 * calcularCreditoFUNDAE({ numTrabajadores: 25, cotizacionFP: 4500 })
 * // => { creditoFinal: 3375, porcentaje: 75, ... }
 */
function calcularCreditoFUNDAE({ numTrabajadores, cotizacionFP }) {
    // Validación de entrada
    if (!numTrabajadores || numTrabajadores < 1) {
        return { error: "El número de trabajadores debe ser al menos 1" };
    }
    if (cotizacionFP === undefined || cotizacionFP < 0) {
        return { error: "La cotización por formación profesional no puede ser negativa" };
    }

    // Encontrar el tramo correspondiente
    const tramo = TRAMOS.find(t => numTrabajadores >= t.min && numTrabajadores <= t.max);
    
    if (!tramo) {
        return { error: "Número de trabajadores fuera de rango" };
    }

    // Calcular crédito
    let creditoCalculado;
    let nota;

    if (numTrabajadores <= 5) {
        // Las empresas de 1-5 trabajadores tienen crédito mínimo garantizado
        creditoCalculado = CREDITO_MINIMO;
        nota = `Crédito mínimo garantizado de ${CREDITO_MINIMO} € para empresas de 1-5 trabajadores`;
    } else {
        creditoCalculado = Math.round((cotizacionFP * tramo.porcentaje / 100) * 100) / 100;
        nota = `Crédito calculado: ${tramo.porcentaje}% de ${cotizacionFP.toLocaleString('es-ES')} € = ${creditoCalculado.toLocaleString('es-ES')} €`;
    }

    // El crédito final es el mayor entre el calculado y el mínimo
    const creditoFinal = Math.max(creditoCalculado, CREDITO_MINIMO);

    // Si se aplicó el mínimo garantizado en empresa de más de 5
    if (creditoFinal === CREDITO_MINIMO && numTrabajadores > 5) {
        nota += ` (se aplica crédito mínimo garantizado de ${CREDITO_MINIMO} €)`;
    }

    return {
        plantilla: tramo.label,
        numTrabajadores,
        cotizacionFP,
        porcentaje: tramo.porcentaje,
        creditoCalculado,
        creditoMinimo: CREDITO_MINIMO,
        creditoFinal,
        cofinanciacion: tramo.cofinanciacion,
        nota,
        // Información adicional útil
        detalles: {
            descripcionCofinanciacion: tramo.cofinanciacion === 0 
                ? "Sin obligación de cofinanciación" 
                : `La empresa debe aportar al menos el ${tramo.cofinanciacion}% del coste de la formación. Este porcentaje puede cubrirse con el coste salarial de los trabajadores durante las horas de formación en horario laboral.`,
            plazosComunicacion: numTrabajadores < 10
                ? "Comunicar a FUNDAE al menos 2 días naturales antes del inicio"
                : "Comunicar a FUNDAE al menos 7 días naturales antes del inicio",
            fechaLimite: `31 de diciembre del ejercicio en curso. El crédito no utilizado se pierde.`,
            recursoOficial: "https://empresa.fundae.es"
        }
    };
}

// Ejemplos de uso
if (typeof module !== 'undefined') {
    module.exports = { calcularCreditoFUNDAE, TRAMOS, CREDITO_MINIMO };
}

// Ejemplos para probar
console.log("=== Calculadora de Crédito FUNDAE ===\n");

const ejemplos = [
    { numTrabajadores: 3, cotizacionFP: 200 },
    { numTrabajadores: 8, cotizacionFP: 1500 },
    { numTrabajadores: 25, cotizacionFP: 4500 },
    { numTrabajadores: 100, cotizacionFP: 18000 },
    { numTrabajadores: 500, cotizacionFP: 90000 }
];

ejemplos.forEach(ejemplo => {
    const resultado = calcularCreditoFUNDAE(ejemplo);
    console.log(`Empresa de ${ejemplo.numTrabajadores} trabajadores (cotización FP: ${ejemplo.cotizacionFP} €):`);
    console.log(`  → Crédito disponible: ${resultado.creditoFinal.toLocaleString('es-ES')} €`);
    console.log(`  → ${resultado.nota}`);
    console.log(`  → Cofinanciación: ${resultado.cofinanciacion}%`);
    console.log(`  → ${resultado.detalles.plazosComunicacion}`);
    console.log("");
});
