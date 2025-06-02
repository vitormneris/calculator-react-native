import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    subcontainerNumber: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    subcontainerOperation: {
        backgroundColor: '#fff',
        width: 80,
    },

    key: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 1
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