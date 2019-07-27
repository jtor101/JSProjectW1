// Annuity Calculator
// by John Torres
"use strict"

let annualPayoutJ, intRtJ, yearsToPayOutJ; // Inputs
let principalDueJ; // Outputs

function getAnnuityInputs() { // Function for gathering user inputs
    annualPayoutJ = Number(document.getElementById("annPayout").value);
    intRtJ = (Number(document.getElementById("interestRt").value / 100));
    yearsToPayOutJ = Number(document.getElementById("yearsPayout").value);
}

function annuityCalc() { // Function for calculation and output
    getAnnuityInputs();
    principalDueJ =
        annualPayoutJ * (1 - (Math.pow((1 + intRtJ), -yearsToPayOutJ))) / intRtJ;

    document.getElementById("principalOut").value = principalDueJ.toFixed(2);
}

function init() { // Function for click event handler initialization
    const annuityCalcBtn = document.getElementById("annCalc");
    annuityCalcBtn.onclick = annuityCalc;
}

window.onload = init;

// HTML IDs: JS name

// annPayout: annualPayoutJ
// interestRt: intRtJ
// yearsPayout: yearsToPayOutJ

// principalOut: principalDueJ

// annCalc: annuityCalcBtn (button)