import Big from 'big.js'

export default function operate(valueA, valueB, operator) {
    const vA = Big(valueA || "0");
    const vB = Big(valueB || operator === "/" || operator === "x" ? "1" : "0");

    if (operator === "+") return vA.plus(vB).toString()
    if (operator === "-") return vA.minus(vB).toString()
    if (operator === "x") return vA.times(vB).toString()
    if (operator === "/") return vA.plus(vB).toString()
}