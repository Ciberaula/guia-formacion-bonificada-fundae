---
layout: default
title: "Devolución de bonificaciones improcedentes"
parent: "Contabilización de la formación bonificada"
grand_parent: "Guía de Formación Bonificada FUNDAE"
nav_order: 7
description: "Cómo se contabiliza la devolución de una bonificación FUNDAE cuando el SEPE reclama su reintegro: cuenta 658, intereses de demora y caso práctico."
permalink: /guias/contabilizacion/devolucion-bonificaciones-improcedentes/
---

# La devolución de bonificaciones improcedentes
{: .fs-7 }

<span style="font-size:12px;color:#71717a">Última actualización: junio 2026 · Por Ana María González · Verificada contra el PGC (RD 1514/2007), RD 694/2017 y doctrina del ICAC</span>

---

## Por qué te puede llegar una resolución de reintegro

El SEPE o la Inspección de Trabajo pueden exigir la devolución de una bonificación FUNDAE aplicada cuando, tras una actuación de seguimiento o una inspección ordinaria, concluyen que no se cumplían las condiciones para aplicarla. Los motivos típicos son cuatro: que la acción formativa no se impartió efectivamente, que se impartió pero no cumplía los requisitos (contenidos, duración, trazabilidad de asistencia), que los costes declarados no son reales o no están documentalmente soportados, o que la empresa no estaba al corriente de cotización en el momento de aplicar la bonificación, requisito que exige la normativa.

La notificación llega como resolución administrativa con importe concreto a devolver, plazo voluntario para el pago y, crucialmente, el cálculo de los **intereses de demora** desde la fecha en que la bonificación fue aplicada. Ese cálculo se hace al tipo de interés legal del dinero incrementado en un 25 por ciento, conforme al régimen general de la Ley 38/2003 General de Subvenciones, que es la norma aplicable supletoriamente a las bonificaciones FUNDAE cuando se reclama su reintegro.

## La cuenta 658: qué recoge y qué no

El Plan General Contable aprobado por el **RD 1514/2007** prevé específicamente la cuenta **658 «Reintegro de subvenciones, donaciones y legados recibidos»** dentro del subgrupo 65 «Otros gastos de gestión». Esta cuenta está diseñada exactamente para el escenario que nos ocupa: registrar los reintegros de subvenciones que ya fueron imputadas a resultados en ejercicios anteriores y que han pasado a ser exigibles por incumplimiento de los requisitos de concesión.

> 💼 **Cuenta 658 · Reintegro de subvenciones, donaciones y legados recibidos**  — Reintegro
>
> Subgrupo 65 · Recoge el gasto por devolución de subvenciones imputadas a resultados en ejercicios anteriores que devienen exigibles por incumplimiento sobrevenido.

> ℹ️ **Error conceptual frecuente**
>
> Error conceptual frecuente El reintegro NO es una reversión del asiento original La tentación habitual, cuando aparece el reintegro, es intentar anular el asiento del subgrupo 74 que en su día reconoció la bonificación como subvención (Opción A del [BOICAC 94](https://www.ciberaula.com/biblia-formacion-bonificada/contabilizacion/bonificacion-aplicada-cuenta-74-o-642)). Esto es contablemente incorrecto. Aquel asiento reflejaba la realidad económica de aquel ejercicio: la subvención se había concedido, se había reconocido el derecho, se había cobrado físicamente vía descuento TGSS. Todo eso ocurrió. Lo que pasa ahora, en un ejercicio distinto, es un hecho económico nuevo: el organismo concedente reclama la devolución. Ese hecho se registra como gasto de este ejercicio en la 658, sin tocar la contabilidad del ejercicio en que se reconoció el ingreso.

La excepción a esta regla es que el reintegro afecte al **mismo ejercicio** en que se reconoció la bonificación, y eso solo ocurre cuando el error se detecta internamente antes del cierre contable. En ese caso sí cabe simplemente anular el asiento original, porque corrige un hecho que se está registrando ahora. En todos los demás casos —que son la mayoría— el asiento corrector es la 658 contra la cuenta de pago.

## Asiento modelo del reintegro principal

El asiento estándar, cuando el reintegro se paga directamente al SEPE mediante transferencia o cargo en cuenta bancaria, es el siguiente. Utilizamos importes concretos para que sirva de referencia: supongamos que el SEPE reclama una bonificación de 4.500 € aplicada en un ejercicio anterior.

| Cuenta | Concepto | Debe | Haber |
| --- | --- | --- | --- |
| 658 | Reintegro de subvenciones, donaciones y legados recibidos | 4.500,00 | — |
| 572 | Bancos e instituciones de crédito (por el pago al SEPE) | — | 4.500,00 |

Si el SEPE ofrece compensar el reintegro contra cotizaciones futuras (no es la práctica habitual en reintegros formativos, pero puede ocurrir), la cuenta de contrapartida sería la **476 «Organismos de la Seguridad Social, acreedores»** en lugar de la 572.

## Los intereses de demora: cuenta separada siempre

La resolución del SEPE nunca viene sola con el principal. Acompaña el cálculo de los intereses de demora desde la fecha en que la bonificación fue aplicada hasta la fecha de la resolución. Esos intereses tienen **naturaleza financiera** y se registran en cuenta separada del principal. La más habitual y coherente con la doctrina contable es la **669 «Otros gastos financieros»**, aunque en la práctica sectorial también se ve la 669 subcuentada o la 678 «Gastos excepcionales» cuando el importe es pequeño y la asesoría prefiere no ensuciar los gastos financieros.

Mi recomendación es usar siempre la 669, que es la más precisa: los intereses de demora son una carga financiera por el uso indebido de fondos públicos, y eso es exactamente lo que la 669 está diseñada para recoger. Supongamos que los intereses calculados por el SEPE ascienden a 340 €:

| Cuenta | Concepto | Debe | Haber |
| --- | --- | --- | --- |
| 669 | Otros gastos financieros (intereses de demora SEPE) | 340,00 | — |
| 572 | Bancos e instituciones de crédito | — | 340,00 |

Los dos asientos pueden unificarse en la práctica contable (el pago al banco es una sola transferencia), pero hay que mantener separados los cargos en 658 y en 669 por coherencia con la naturaleza de cada gasto. Fusionar principal e intereses en la 658 es un error que distorsiona tanto el resultado de explotación como el financiero.

## Plazo voluntario y vía ejecutiva

La resolución de reintegro fija un **plazo voluntario de pago**, normalmente un mes contado desde el día siguiente a la notificación. Si la empresa paga dentro de ese plazo, el cierre contable es el de arriba y acaba ahí. Si no se paga en plazo voluntario, la resolución pasa a la vía ejecutiva con recargo del 20 por ciento, que se registra como un segundo apunte, igualmente en la 669 si se trata como gasto financiero o, mejor, en una subcuenta específica de la 678 para dejar trazabilidad separada.

> ℹ️ **Recomendación operativa**
>
> Recomendación operativa Si recibes una notificación de reintegro, **no pagues inmediatamente**. Verifica primero con la asesoría que el cálculo del SEPE sea correcto (el importe del principal y el de los intereses), porque los errores son frecuentes. Tienes un mes de plazo voluntario para pagar sin recargo ni pasar a vía ejecutiva, tiempo de sobra para revisar y, si procede, presentar un **recurso de reposición** o contencioso-administrativo. Muchas veces el reintegro se reduce o se anula parcialmente tras alegar.

## Y si hay sanción además del reintegro

Es importante no confundir reintegro con sanción. Son dos procedimientos distintos, regulados por normas diferentes y con consecuencias económicas separadas. El reintegro se apoya en la Ley 38/2003 General de Subvenciones y exige la devolución del dinero que no correspondía cobrar; es administrativo, tiene intereses de demora y se contabiliza en la 658. La sanción, cuando procede, se apoya en la [LISOS (RDLeg 5/2000)](https://www.ciberaula.com/biblia-formacion-bonificada/contabilizacion/regimen-sancionador-lisos) y tiene carácter punitivo; se contabiliza como gasto excepcional en la **678 «Gastos excepcionales»** en el ejercicio en que se impone.

El SEPE puede exigir solo reintegro, solo sanción, ambas cosas o ninguna, según el alcance del incumplimiento. La [ficha 17.9](https://www.ciberaula.com/biblia-formacion-bonificada/contabilizacion/regimen-sancionador-lisos), al final del capítulo, desarrolla íntegramente el régimen sancionador LISOS, sus cuantías y el criterio para distinguir infracción grave de muy grave. Y la [ficha 17.8](https://www.ciberaula.com/biblia-formacion-bonificada/contabilizacion/errores-contables-inspeccion-fundae), la siguiente, recopila los siete errores contables que más frecuentemente provocan actuaciones de seguimiento en las asesorías.


## Preguntas frecuentes

### ¿Por qué te puede llegar una resolución de reintegro?

El SEPE o la Inspección de Trabajo pueden exigir la devolución de una bonificación FUNDAE aplicada cuando, tras una actuación de seguimiento o una inspección ordinaria, concluyen que no se cumplían las condiciones para aplicarla. Los motivos típicos son cuatro: que la acción formativa no se impartió efectivamente, que se impartió pero no cumplía los requisitos (contenidos, duración, trazabilidad de asistencia), que los costes declarados no son reales o no están documentalmente soportados, o que la empresa no estaba al corriente de cotización en el momento de aplicar la bonificación, requisito que exige la normativa. La notificación llega como resolución administrativa con importe concreto a devolver, plazo voluntario para el pago y, crucialmente, el cálculo de los intereses de demora desde la fecha en que la bonificación fue aplicada. Ese cálculo se hace al tipo de interés legal del dinero incrementado en un 25 por ciento, conforme al régimen general de la Ley 38/2003 General de Subvenciones, que es la norma aplicable supletoriamente a las bonificaciones FUNDAE cuando se reclama su reintegro.

### ¿Y si hay sanción además del reintegro?

Es importante no confundir reintegro con sanción. Son dos procedimientos distintos, regulados por normas diferentes y con consecuencias económicas separadas. El reintegro se apoya en la Ley 38/2003 General de Subvenciones y exige la devolución del dinero que no correspondía cobrar; es administrativo, tiene intereses de demora y se contabiliza en la 658. La sanción, cuando procede, se apoya en la LISOS (RDLeg 5/2000) y tiene carácter punitivo; se contabiliza como gasto excepcional en la 678 «Gastos excepcionales» en el ejercicio en que se impone. El SEPE puede exigir solo reintegro, solo sanción, ambas cosas o ninguna, según el alcance del incumplimiento. La ficha 17.9, al final del capítulo, desarrolla íntegramente el régimen sancionador LISOS, sus cuantías y el criterio para distinguir infracción grave de muy grave. Y la ficha 17.8, la siguiente, recopila los siete errores contables que más frecuentemente provocan actuaciones de seguimiento en las asesorías. Cierre de la ficha ← Ficha anterior 17.6 · Periodificación entre ejercicios Índice Cap. 17 · Contabilización Ficha siguiente → 17.8 Los 7 errores más frecuentes en inspección Sigue leyendo en La Biblia Ficha 17.6 Periodificación de la bonificación entre ejercicios Ficha 17.4 Cómo contabilizar la bonificación aplicada: cuenta 74 o 642 Ficha17.7 · La devolución de bonificaciones improcedentes Capítulo17 · Contabilización de las bonificaciones AutoraAna María González · Directora de CiberAula Publicada22 abril 2026 · v1.0 Normativa y fuentesPGC RD 1514/2007 (cuentas 658, 669, 572, 476, 678) · Ley 38/2003 General de Subvenciones (régimen de reintegro e intereses) · BOICAC 94/2013 Consulta 5

