import { useEffect, useState } from 'react';
import { View } from 'react-native';

import Title from '../../components/Title';
import Keyboard from '../../components/Keyboard';
import OutPut from '../../components/OutPut';

import { CalculatorService } from '../../service/CalculatorService';

import { styles } from './style';

const calculator: CalculatorService = new CalculatorService();

export default function Calculator() {

    const [expression, setExpression] = useState<string>("");
    const [result, setResult] = useState<string>("");

    useEffect(() => {
        calculator.setExpression(expression);
        if (calculator.checkValidityOfExpression()) {
            setResult(String(calculator.resolve()))
        } else {
            setResult("----")
        }
    }, [expression])

    return (
        <View style={styles.container}>
            <Title text="Calculadora" />
            <OutPut data={expression} result={result} />
            <Keyboard data={expression} action={setExpression} />
        </View>
    );
}
