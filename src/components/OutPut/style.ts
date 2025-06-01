import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        width: '80%',
        margin: 40,
        borderRadius: 10
    },

    expression: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },

    result: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },

    text: {
        fontSize: 20,
        fontFamily: "google-sans"
    }
});
