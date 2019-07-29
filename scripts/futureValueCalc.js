// Future Value Of One Time Deposit Calculator
// by John Torres
"use strict"

let depositJ, depIntRtJ, numOfYrsJ; // Inputs
let futureValueJ, totalIntEarnedJ; // Outputs

function getFutureValInputs() { // Function for gathering user inputs
    depositJ = Number(document.getElementById("depositAmt").value);
    depIntRtJ = Number(document.getElementById("depInterestRate").value / 100);
    numOfYrsJ = Number(document.getElementById("numberOfYrs").value);
}

function futureValCalc() { // Function for calculation and output
    getFutureValInputs();
    futureValueJ = depositJ * Math.pow(1 + depIntRtJ / 12, numOfYrsJ * 12);

    totalIntEarnedJ = futureValueJ - depositJ;

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