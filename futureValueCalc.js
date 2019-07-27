// Future Value Of One Time Deposit Calculator
// by John Torres
"use strict"

// User Input - depositJ, depIntRtJ, numOfYrsJ
// Desired Output - futureValueJ, totalIntEarnedJ



let depositJ, depIntRtJ, numOfYrsJ; // Inputs
let futureValueJ, totalIntEarnedJ; // Outputs


function getFutureValInputs() {
    depositJ = Number(document.getElementById("depositAmt").value);
    depIntRtJ = Number(document.getElementById("depInterestRate").value / 100);
    numOfYrsJ = Number(document.getElementById("numberOfYrs").value);
} //Inputs verified as logging to console.


function futureValCalc() {
    getFutureValInputs();
    futureValueJ = depositJ * Math.pow(1 + depIntRtJ / 12, numOfYrsJ * 12);
    totalIntEarnedJ = futureValueJ - depositJ;
    document.getElementById("futureVal").value = futureValueJ.toFixed(2);
    document.getElementById("intEarnedTotal").value = totalIntEarnedJ.toFixed(2);
}

function init() {
    const valueCalcBtn = document.getElementById("valueCalc");
    valueCalcBtn.onclick = futureValCalc;
}

window.onload = init;

// HTML IDs
// depositAmt: depositJ
// depInterestRate: depIntRtJ
// numberOfYrs: numOfYrsJ

// futureVal: futureValueJ
// intEarnedTotal: totalIntEarnedJ

// valueCalc: valueCalcBtn (button)