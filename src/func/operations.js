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

}