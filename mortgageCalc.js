// Mortgage Monthly Payment Calculator
// by John Torres
"use strict"

let mortgagePrincipalJ, mtgIntRtJ, lengthOfLoanJ; // Inputs
let mtgMonthlyJ, mtgTotalCostJ; // Outputs

function getMortgageInputs() { // Function for gathering user inputs
    mortgagePrincipalJ = Number(document.getElementById("mtgPrin").value);
    mtgIntRtJ = Number(document.getElementById("mtgInterestRate").value);
    lengthOfLoanJ = Number(document.getElementById("loanLength").value);
}

function mortgageCalc() { // Function for calculation and output
    getMortgageInputs();
    mtgMonthlyJ =
        mortgagePrincipalJ * (mtgIntRtJ / 1200) /
        (1 - Math.pow(1 + mtgIntRtJ / 1200, -12 * lengthOfLoanJ));

    mtgTotalCostJ = mtgMonthlyJ * lengthOfLoanJ * 12;

    document.getElementById("monthlyMortgage").value = mtgMonthlyJ.toFixed(2);
    document.getElementById("totalCostMtg").value = mtgTotalCostJ.toFixed(2);
}

function init() { // Function for click event handler initialization
    const mortgageCalcBtn = document.getElementById("mtgCalc");
    mortgageCalcBtn.onclick = mortgageCalc;
}

window.onload = init;

// HTML IDs: JS name

// mtgPrin: mortgagePrincipalJ
// mtgInterestRate: mtgIntRtJ
// loanLength: lengthOfLoanJ

// monthlyMortgage: mtgMonthlyJ
// totalCostMtg: mtgTotalCostJ

// mtgCalc: mortgageCalcBtn (button)