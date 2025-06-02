import { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';

import Slider from '@react-native-community/slider';

import { styles } from './style';

type SwitchThemeProps = {
    title: string,
    value: number,
    onValueChange: Dispatch<SetStateAction<number>>,
    background: string,
    color: string
}

export default function FontSize({ title, value, onValueChange, background, color }: SwitchThemeProps) {

    return (
        <View style={[styles.container, { backgroundColor: background, borderColor: color }]}>
            <Text style={[styles.title, { color: color }]}>{title}</Text>
            <Slider
                style={{ width: 300, height: 40 }}
                minimumValue={20}
                maximumValue={30}
                step={1}
                value={value}
                onValueChange={onValueChange}
                minimumTrackTintColor={color}
                maximumTrackTintColor={color}
                thumbTintColor={color}
            />
        </View>
    );
}
