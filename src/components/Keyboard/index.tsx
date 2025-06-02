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
    background: string,
    color: string,
    fontSize: number
}

export default function Keyboard({ data, action, background, color, fontSize }: KeyboardProps) {
    return (
        <View style={{ backgroundColor: background }}>
            <View style={styles.container}>
                <View style={styles.subcontainerNumber}>
                    <FlatList
                        data={numbers}
                        numColumns={3}
                        scrollEnabled={false} 
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }: ListRenderItemInfo<Key>) =>
                            <Key
                                value={item.value}
                                data={data}
                                action={action}
                                background={background}
                                color={color}
                                fontSize={fontSize}
                            />
                        }
                    />
                </View>
                <View style={[styles.subcontainerOperation, { backgroundColor: background }]}>
                    <Key value="+" data={data} action={action} background={background} color={color} fontSize={fontSize} />
                    <Key value="-" data={data} action={action} background={background} color={color} fontSize={fontSize} />
                    <Key value="/" data={data} action={action} background={background} color={color} fontSize={fontSize} />
                    <Key value="*" data={data} action={action} background={background} color={color} fontSize={fontSize} />
                </View>
            </View>
            <KeyDelete 
                value="DELETAR" 
                data={data} 
                action={action} 
                background={background} 
                color={color} 
                fontSize={fontSize}
            />
        </View>
    );
}

type KeyProps = {
    value: string,
    data: string,
    action: Dispatch<SetStateAction<string>>,
    background: string,
    color: string,
    fontSize: number
}

function Key({ value, data, action, background, color, fontSize }: KeyProps) {
    const show = value;
    if (data.length >= 13) {
        value = "";
    }

    return (
        <TouchableOpacity style={[styles.key, { borderWidth: 1, borderColor: color, backgroundColor: background  }]} onPress={() => action(data + value)}>
            <Text style={[styles.value, { color: color, fontSize: (fontSize * 2) }]}>{show}</Text>
        </TouchableOpacity>
    )
}

function KeyDelete({ value, data, action, background, color, fontSize }: KeyProps) {
    return (
        <TouchableOpacity style={[styles.key, { borderWidth: 1, borderColor: color, backgroundColor: background }]} onPress={() => action(data.slice(0, -1))}>
            <Text style={[styles.valueDelete, { color: color, fontSize: (fontSize * 1.5) }]}>{value}</Text>
        </TouchableOpacity>
    )
}
