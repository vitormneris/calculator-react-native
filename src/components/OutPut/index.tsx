import { Text, View } from 'react-native';

import { styles } from './style';

type OutPutProps = {
    data: string,
    result: string,
    background: string, 
    color: string,
    fontSize: number
}

export default function OutPut({ data, result, background, color, fontSize }: OutPutProps) {
    let show = data;
    if (data.length >= 13) {
        show = "LIM ATINGIDO";
    }
    
    return (
        <View style={[styles.container, { backgroundColor: background, borderColor: color}]}>
            <View style={styles.expression}>
                <Text style={[styles.text, {color: color, fontSize: (fontSize * 0.7)}]}>EXPRESSÃO</Text>
                <Text style={[styles.text, {color: color, fontSize: (fontSize * 0.7)}]}>{ show }</Text>
            </View>

            <View style={styles.result}>
                <Text style={[styles.text, {color: color, fontSize: (fontSize * 0.7)}]}>RESULTADO  </Text>
                <Text style={[styles.text, {color: color, fontSize: (fontSize * 0.7)}]}>{ result }</Text>
            </View>
        </View>
    );
}
