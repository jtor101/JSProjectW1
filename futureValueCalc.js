// Future Value Of One Time Deposit Calculator
// by John Torres
"use strict"

// User Input - depositJ, depIntRtJ, numOfYrsJ
// Desired Output - futureValueJ, totalIntEarnedJ



let depositJ, depIntRtJ, numOfYrsJ; // Inputs
let futureValueJ, totalIntEarnedJ; // Outputs


function getFutureValInputs() {
    depositJ = Number(document.getElementById("depositAmt").value);
    depIntRtJ = Number(document.getElementById("depInterestRate").value);
    numOfYrsJ = Number(document.getElementById("numberOfYrs").value);
    depositJ = Math.ceil(depositJ);
    depIntRtJ = Math.ceil(depIntRtJ);
    numOfYrsJ = Math.ceil(numOfYrsJ);
    console.log(depositJ);
    console.log(depIntRtJ);
    console.log(numOfYrsJ);
} //Inputs verified as logging to console.


function futureValCalc() {
    getFutureValInputs();
    //futureValueJ = 
    document.getElementById("futureVal").value = futureValueJ;
    document.getElementById("intEarnedTotal").value = totalIntEarnedJ;
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