import { Dispatch, SetStateAction } from 'react';
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

type Key = {
    value: string
}

const numbers: Key[] = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "0" },
]

type KeyboardProps = {
    data: string,
    action: Dispatch<SetStateAction<string>>
}

export default function Keyboard({ data, action }: KeyboardProps) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.subcontainerNumber}>
                    <FlatList
                        data={numbers}
                        numColumns={3}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }: ListRenderItemInfo<Key>) =>
                            <Key value={item.value} data={data} action={action} />
                        }
                    />
                </View>
                <View style={styles.subcontainerOperation}>
                    <Key value="+" data={data} action={action} />
                    <Key value="-" data={data} action={action} />
                    <Key value="/" data={data} action={action} />
                    <Key value="*" data={data} action={action} />
                </View>
            </View>
            <KeyDelete value="DELETE" data={data} action={action} />
        </View>
    );
}

type KeyProps = {
    value: string,
    data: string,
    action: Dispatch<SetStateAction<string>>
}

function Key({ value, data, action }: KeyProps) {
    const show = value;
    if (data.length >= 13) {
        value = "";
    }

    return (
        <TouchableOpacity style={styles.key} onPress={() => action(data + value)}>
            <Text style={styles.value}>{show}</Text>
        </TouchableOpacity>
    )
}

function KeyDelete({ value, data, action }: KeyProps) {
    return (
        <TouchableOpacity style={styles.key} onPress={() => action(data.slice(0, -1))}>
            <Text style={styles.valueDelete}>{value}</Text>
        </TouchableOpacity>
    )
}
