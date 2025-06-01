import { Text, View } from 'react-native';

import { styles } from './style';

type TitleProps = {
    text: string,
}

export default function Title({ text }: TitleProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ text }</Text>
        </View>
    );
}
