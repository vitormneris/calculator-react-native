import { Text, View } from 'react-native';

import { styles } from './style';

type TitleProps = {
    text: string,
    color: string,
    fontSize: number
}

export default function Title({ text, color, fontSize }: TitleProps) {

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: color }, { fontSize: (fontSize * 2) }]}>{ text }</Text>
        </View>
    );
}
