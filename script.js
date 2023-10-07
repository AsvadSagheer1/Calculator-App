let showExp = document.querySelector(".show-exp");
let calculateExp = document.querySelector(".calculate-exp")

let exp = "";
function makeExp(i) {
    exp += i;
    showExp.textContent = exp;
    console.log(exp)
}
function calculate() {
    if (showExp.textContent != 0) {
        const result = eval(exp)
        calculateExp.textContent = result;
        console.log(exp)
    } else {
        calculateExp.textContent = "_"
    }
}
function backSpace() {
    if (showExp.textContent != 0 && showExp.textContent.length != 1) {
        exp = exp.slice(0, -1);
        showExp.textContent = exp;
        console.log(exp);
        console.log(showExp.textContent.length)
    } else if (showExp.textContent.length = 1) {
        showExp.textContent = 0
        exp = ""
    }

}
function sqrt() {
    const result = Math.sqrt(eval(exp));
    calculateExp.textContent = result;
}