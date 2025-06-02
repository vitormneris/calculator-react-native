import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import Title from '../../components/Title';
import Keyboard from '../../components/Keyboard';
import OutPut from '../../components/OutPut';
import SwitchTheme from '../../components/SwitchTheme';
import FontSize from '../../components/FontSize';

import { CalculatorService } from '../../service/CalculatorService';

import { GLOBAL_VAR } from '../../config/config';

import { styles } from './style';

const calculator: CalculatorService = new CalculatorService();

export default function Calculator() {
    const [expression, setExpression] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [themeDark, setThemeDark] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(22);

    if (themeDark) {
        GLOBAL_VAR.BACKGROUND_COLOR = "#1f1f1f",
        GLOBAL_VAR.FONT_COLOR = "#e6e6eb"
    } else {
        GLOBAL_VAR.BACKGROUND_COLOR = "#e6e6eb",
        GLOBAL_VAR.FONT_COLOR = "#1f1f1f"
    }

    useEffect(() => {
        calculator.setExpression(expression);
        if (calculator.checkValidityOfExpression()) {
            setResult(String(calculator.resolve()))
        } else {
            setResult("----")
        }
    }, [expression])

    return (
        <ScrollView style={{ backgroundColor: GLOBAL_VAR.BACKGROUND_COLOR }}>
            <View style={[styles.container, { backgroundColor: GLOBAL_VAR.BACKGROUND_COLOR }]}>
                <Title
                    text="Calculadora"
                    fontSize={fontSize}
                    color={GLOBAL_VAR.FONT_COLOR}
                />
                <OutPut
                    data={expression}
                    result={result}
                    fontSize={fontSize}
                    background={GLOBAL_VAR.BACKGROUND_COLOR}
                    color={GLOBAL_VAR.FONT_COLOR}
                />

                <Keyboard
                    data={expression}
                    action={setExpression}
                    fontSize={fontSize}
                    background={GLOBAL_VAR.BACKGROUND_COLOR}
                    color={GLOBAL_VAR.FONT_COLOR}
                />
                <SwitchTheme
                    title="TEMA ESCURO"
                    value={themeDark}
                    onValueChange={setThemeDark}
                    background={GLOBAL_VAR.BACKGROUND_COLOR}
                    color={GLOBAL_VAR.FONT_COLOR}
                />

                <FontSize
                    title="TAMANHO DA FONTE"
                    value={fontSize}
                    onValueChange={setFontSize}
                    background={GLOBAL_VAR.BACKGROUND_COLOR}
                    color={GLOBAL_VAR.FONT_COLOR}
                />
            </View>
        </ScrollView>
    );
}