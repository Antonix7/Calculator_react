import Big from "big.js";
import operate from "./operatorConfig.js";
import compr from "./comprobate.js";

export default function operations (stat, buttonValue) {
    if (buttonValue === "AC") {
        return{
            total: null,
            next: null,
            operator: null
        }
    }

    if (compr(buttonValue)) {
        // first value
        if (buttonValue === "0" && stat.next === "0") return {}
        if (stat.operator){
            if (stat.next) return {next: stat.next + buttonValue}
            return {next: buttonValue}
        }
        // second value, then of operator chosse
        if (stat.next) {
            const next = stat.next === "0" ? buttonValue: stat.next + buttonValue
            return {next, total: null}
        }

        if (stat.operator && stat.next) {
            const result = operate(stat.total, stat.next, stat.operator)
            
            return {total: Big(result).div(Big("100").toString()), next: null, operator: null}
        }

        if (stat.next) {
            return {next: Big(stat.next).div(Big("100").toString())}
        }

        return {}
    }

    if (buttonValue === ".") {
        if (stat.next) {
            if (stat.next.include(".")) return {}

            return {next: stat.next + "."}
        }
        return {next: "0."}
    }

    if (buttonValue === "=") {
        if (stat.next) {
            if (stat.next && stat.operator) {
                return {total: operate(stat.total, stat.next, stat.operator),
                next: null,
                operator: null}
            }
        }
        return {}
    }

    if (buttonValue === "+/-") {
        if (stat.next) return {next: (-1 * parseFloat(stat.next).toString())}

        if (stat.total) return {total: -1 * parseFloat(stat.total).toString()}
    }

    if (stat.operator) {
        return {total: operate(stat.next, stat.total, stat.operator),
        next: null,
        operator: buttonValue}
    }

    if (!stat.next) return {operator: buttonValue}

    return {
        total: stat.next,
        next: null,
        operator: buttonValue
    }

}