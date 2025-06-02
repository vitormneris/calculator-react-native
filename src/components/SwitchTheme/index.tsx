import { Switch, Text, View } from 'react-native';

import { styles } from './style';
import { Dispatch, SetStateAction } from 'react';

type SwitchThemeProps = {
    title: string,
    value: boolean,
    onValueChange: Dispatch<SetStateAction<boolean>>,
    background: string,
    color: string
}

export default function SwitchTheme({ title, value, onValueChange, background, color }: SwitchThemeProps) {

    return (
        <View style={[styles.container, { backgroundColor: background, borderColor: color }]}>
            <Text style={[styles.title, { color: color }]}>{title}</Text>
            <Switch 
                trackColor={{false: "#545454", true: "#545454"}} 
                thumbColor={value ? "#e6e6eb" : "#1f1f1f" } 
                value={value} 
                onValueChange={onValueChange} 
            />
        </View>
    );
}
