import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },

    subcontainerNumber: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },

    subcontainerOperation: {
        backgroundColor: '#fff',
        width: 80,
    },

    key: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },

    value: {
        fontSize: 50,
        fontWeight: '600'
    },

    valueDelete: {
        fontSize: 25,
        fontWeight: '600',
    }
});