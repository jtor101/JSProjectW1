// Mortgage Monthly Payment Calculator
// by John Torres
"use strict"

/*
 *   Calculates the monthly payments and total cost of a mortgage
 *   by utilizing the original principal, interest rate, and length of the mortgage.
 *   @param mortgagePrincipalJ (Number) - the amount of the initial principal on the mortgage.
 *   @param mtgIntRtJ (Number) - the amount of the interest rate on the mortgage.
 *   @param lengthOfLoanJ (Number) - the length of time of the mortgage.
 *
 *   @return mtgMonthlyJ (Number) - the amount of the monthly payments.
 *   @return mtgTotalCostJ (Number) - the total cost of the mortgage.
 */
function getMtgMonthlyPay(mortgagePrincipalJ, mtgIntRtJ, lengthOfLoanJ) { // helper function 1: determines mtgMonthlyJ
    let mtgMonthlyJ = mortgagePrincipalJ * (mtgIntRtJ / 1200) /
        (1 - Math.pow(1 + mtgIntRtJ / 1200, -12 * lengthOfLoanJ));
    return mtgMonthlyJ;
}

function getMtgTotalCost(mtgMonthlyJ, lengthOfLoanJ) { // helper function 2: determines mtgTotalCostJ
    let mtgTotalCostJ = mtgMonthlyJ * lengthOfLoanJ;
    return mtgTotalCostJ;
}

function mortgageCalc() { // Function for gathering user inputs, calling helpers, and returning output.
    let mortgagePrincipalJ, mtgIntRtJ, lengthOfLoanJ; // Inputs
    let mtgMonthlyJ, mtgTotalCostJ; // Outputs

    // Get data from UI
    mortgagePrincipalJ = Number(document.getElementById("mtgPrin").value);
    mtgIntRtJ = Number(document.getElementById("mtgInterestRate").value);
    lengthOfLoanJ = Number(document.getElementById("loanLength").value);

    // Call helper functions
    mtgMonthlyJ = getMtgMonthlyPay(mortgagePrincipalJ, mtgIntRtJ, lengthOfLoanJ);
    mtgTotalCostJ = getMtgTotalCost(mtgMonthlyJ, lengthOfLoanJ);

    // return to UI
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