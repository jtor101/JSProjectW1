// Annuity Calculator
// by John Torres
"use strict"

let annualPayoutJ, intRtJ, yearsToPayOutJ; // Inputs
let principalDueJ; // Outputs

function getAnnuityInputs() {
    annualPayoutJ = Number(document.getElementById("annPayout").value);
    intRtJ = (Number(document.getElementById("interestRt").value / 100));
    yearsToPayOutJ = Number(document.getElementById("yearsPayout").value);
}

function annuityCalc() {
    getAnnuityInputs();
    principalDueJ =
        annualPayoutJ * (1 - (Math.pow((1 + intRtJ), -yearsToPayOutJ))) / intRtJ;
    document.getElementById("principalOut").value = principalDueJ.toFixed(2);
}

function init() {
    const annuityCalcBtn = document.getElementById("annCalc");
    annuityCalcBtn.onclick = annuityCalc;
}

window.onload = init;

// HTML IDs
// annPayout: annualPayoutJ
// interestRt: intRtJ
// yearsPayout: yearsToPayOutJ
// principalOut: principalDueJ
// annCalc: annuityCalcBtn (button)