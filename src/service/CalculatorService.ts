export class CalculatorService {
    private expression: string;

    public constructor() {
        this.expression = "";
    }

    public setExpression(expression: string): void {
        this.expression = expression;
    }

    public resolve(): number | undefined {
        const numbers: number[] = this.expression.split(/[+-/*]+/).map((number: string) => parseInt(number));
        const operators: string[] = this.expression.match(/[+-/*]+/g) || [];

        let result: number | undefined = numbers.shift();
        if (result == undefined) return undefined;

        let counter: number = 0
        for (const number of numbers) {
            let operator: string = operators[counter];
            switch (operator) {
                case "+":
                    result += number;
                    break;
                case "-":
                    result -= number;
                    break;
                case "*":
                    result *= number;
                    break;
                case "/": 
                    result /= number;
                    break;
            }
            counter++;
        }

        return result;
    }


    public checkValidityOfExpression(): boolean {
        let counter = 0;

        if (this.expression == "") return false;

        if (this.isPresentOperator(this.expression[0])) return false;

        if (this.isPresentOperator(this.expression[this.expression.length - 1])) return false;

        for (let i = 0; i < this.expression.length; i++) {
            if (this.isPresentOperator(this.expression[i])) {
                counter++;
                if (counter >= 2) {
                    return false;
                }
            } else {
                counter = 0;
            }
        }
        return true;
    }

    private isPresentOperator(operator: string): boolean {
        if (operator == "+" || operator == "*" || operator == "-" || operator == "/") {
            return true;
        }
        return false;
    }
}