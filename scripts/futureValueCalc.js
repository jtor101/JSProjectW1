// Future Value Of One Time Deposit Calculator
// by John Torres
"use strict"

/*
 *   Calculates the future value of a single deposit after accruing a set 
 *   interest rate for a set period of years.*
 *
 *   @param depositJ (Number) - the amount of the initial deposit.
 *   @param depintRtJ (Number) - the amount of the interest rate on the deposit.
 *   @param numOfYrsJ (Number) - the length of time over which interest will accrue.
 *
 *   @return futureValueJ (Number) - the value of the deposit after interest.
 *   @return totalIntEarnedJ (Number) - the total amount of interest earned.
 */
function getFutureVal(depositJ, depIntRtJ, numOfYrsJ) { // helper function 1: determines futureValueJ
    let futureValueJ = depositJ * Math.pow(1 + depIntRtJ / 12, numOfYrsJ * 12);
    return futureValueJ;
}

function getTotalInt(futureValueJ, depositJ) { // helper function 2: determines totalIntEarnedJ
    let totalIntEarnedJ = futureValueJ - depositJ;
    return totalIntEarnedJ;
}

function futureValCalc() { // Function for gathering user inputs, calling helpers, and returning output.
    let depositJ, depIntRtJ, numOfYrsJ; // Inputs
    let futureValueJ, totalIntEarnedJ; // Outputs

    // Get data off of UI.
    depositJ = Number(document.getElementById("depositAmt").value);
    depIntRtJ = Number(document.getElementById("depInterestRate").value / 100);
    numOfYrsJ = Number(document.getElementById("numberOfYrs").value);

    // call helper functions.
    futureValueJ = getFutureVal(depositJ, depIntRtJ, numOfYrsJ);
    totalIntEarnedJ = getTotalInt(futureValueJ, depositJ);

    // return to UI
    document.getElementById("futureVal").value = futureValueJ.toFixed(2);
    document.getElementById("intEarnedTotal").value = totalIntEarnedJ.toFixed(2);
}

function init() { // Function for click event handler initialization
    const valueCalcBtn = document.getElementById("valueCalc");
    valueCalcBtn.onclick = futureValCalc;
}

window.onload = init;

// HTML IDs: JS name

// depositAmt: depositJ
// depInterestRate: depIntRtJ
// numberOfYrs: numOfYrsJ

// futureVal: futureValueJ
// intEarnedTotal: totalIntEarnedJ

// valueCalc: valueCalcBtn (button)