// Annuity Calculator
// by John Torres
"use strict"

/*
 *   Calculates te deposit necessary to fund an annuity of a specifc
 *   withdrawal amount per year, every year, for a set number of years
 *   given an explicit interest rate*
 *
 *   @param annualPayoutJ (Number) - the amount of the annual withdrawal
 *   @param intRtJ (Number) - the amount of the interest rate.
 *   @param yearsToPayoutJ (Number) - the length of time over which payments will be made.
 *
 *   @return principalDueJ (Number) - the amount needed to fund the annuity
 */
function getAnnuityValue(annualPayoutJ, intRtJ, yearsToPayoutJ) { // helper function 1: determines principalDueJ
    let principalDueJ = annualPayoutJ * (1 - (Math.pow((1 + intRtJ), -yearsToPayoutJ))) / intRtJ;
    return principalDueJ;
}

function doAnnuityCalculations() { // Function for gathering user inputs, calling helpers, and returning output.
    let annualPayoutJ, intRtJ, yearsToPayoutJ; // Inputs
    let principalDueJ; // Outputs 

    // Get data off UI    
    annualPayoutJ = Number(document.getElementById("annPayout").value);
    intRtJ = (Number(document.getElementById("interestRt").value / 100));
    yearsToPayoutJ = Number(document.getElementById("yearsPayout").value);

    // call helper function(s)
    principalDueJ = getAnnuityValue(annualPayoutJ, intRtJ, yearsToPayoutJ);

    // put results back in UI
    document.getElementById("principalOut").value = principalDueJ.toFixed(2);
}

function init() { // Function for click event handler initialization
    const annuityCalcBtn = document.getElementById("annCalc");
    annuityCalcBtn.onclick = doAnnuityCalculations;
}

window.onload = init;

// HTML IDs: JS name

// annPayout: annualPayoutJ
// interestRt: intRtJ
// yearsPayout: yearsToPayOutJ

// principalOut: principalDueJ

// annCalc: annuityCalcBtn (button)