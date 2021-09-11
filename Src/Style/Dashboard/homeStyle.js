import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#FFF',
        height: 60,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerIcon: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginHorizontal: 10,
        alignItems: 'center'
    },
    containerSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        borderWidth: 1,
        width: '48%',
        height: 40,
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: 7,
        borderColor: '#7A63FF'
    }
})