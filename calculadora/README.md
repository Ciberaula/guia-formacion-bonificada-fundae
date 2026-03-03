# Calculadora de Crédito de Formación FUNDAE

Herramienta para estimar el crédito de formación bonificada disponible para tu empresa.

## Uso rápido

Abre `calculadora.html` en cualquier navegador para usar la versión visual.

## Uso como módulo JavaScript

```javascript
import { calcularCreditoFUNDAE } from './calculadora.js';

const resultado = calcularCreditoFUNDAE({
    numTrabajadores: 25,
    cotizacionFP: 4500
});

console.log(resultado);
// {
//   plantilla: "10-49 trabajadores",
//   porcentaje: 75,
//   creditoCalculado: 3375,
//   creditoMinimo: 420,
//   creditoFinal: 3375,
//   cofinanciacion: 10,
//   nota: "Crédito calculado: 75% de 4.500 € = 3.375 €"
// }
```

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `numTrabajadores` | number | Número medio de trabajadores en plantilla |
| `cotizacionFP` | number | Cuota de formación profesional pagada el año anterior (€) |

## Cómo obtener los datos

- **Número de trabajadores**: Plantilla media del año anterior. Se calcula sumando los trabajadores de cada mes y dividiendo entre 12.
- **Cotización por formación profesional**: Aparece en los boletines de cotización (TC1) como "Formación Profesional". También se puede consultar en el [portal de la TGSS](https://sede.seg-social.gob.es).

---

*Herramienta creada por [CiberAula](https://www.ciberaula.com)*
