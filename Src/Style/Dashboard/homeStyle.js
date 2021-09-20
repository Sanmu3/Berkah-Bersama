import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#7A63FF',
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
        borderColor: '#fff'
    },
    card: {
        height: 200,
        width: 140,
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 6,
        elevation: 2
    },
    cardArrow: {
        height: 200,
        width: 150,
        borderRadius: 10,
        margin: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigcard: {
        height: 200,
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 6,
        elevation: 2
    },
    containerCard: {
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 6,
        elevation: 2
    },
    image: {
        height: 80,
        width: 140,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    text: {
        fontSize: 11,
        marginVertical: 5,
        color: '#696969'
    },
    containerArrow: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: '#69AFFF',
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBig: {
        width: 250,
        height: 120,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    containerList: {
        width: '91%',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 0.5,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageList: {
        height: 106,
        width: 160,
        borderRadius: 3
    }
})