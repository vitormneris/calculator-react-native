import { Text, View } from 'react-native';

import { styles } from './style';

type OutPutProps = {
    data: string,
    result: string
}

export default function OutPut({ data, result }: OutPutProps) {
    let show = data;
    if (data.length >= 13) {
        show = "LIMITE ATINGIDO";
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.expression}>
                <Text style={styles.text}>EXPRESSÃO</Text>
                <Text style={styles.text}>{ show }</Text>
            </View>

            <View style={styles.result}>
                <Text style={styles.text}>RESULTADO</Text>
                <Text style={styles.text}>{ result }</Text>
            </View>
        </View>
    );
}
