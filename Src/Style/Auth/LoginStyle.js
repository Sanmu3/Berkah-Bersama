import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    Screen: {
        flex: 1
    },
    Logo: {
      alignSelf: 'center',
      marginTop: 100,
      marginBottom: 50
    },
    Email: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1
    },
    EmailImage: {
        marginRight: 10,
        marginLeft: 10,
        tintColor: '#000'
    },
    EmailInput: {
        width: '60%'
    },
    Password: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        marginTop: 50
    },
    PasswordImage: {
        marginRight: 10,
        marginLeft: 10,
        tintColor: '#000'
    },
    PasswordInput: {
        width: '60%'
    },
    Fitur: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '70%',
        marginTop: 15
    },
    RememberMe: {
        flexDirection: 'row',  
        alignItems: 'center',
        justifyContent: 'center'
    },
    RememberMeBox: {
        borderWidth: 1,
        width: 15,
        height: 15,
        marginRight: 5
    },
    ForgotPassword: {
        fontWeight: 'bold',
        color: '#000'
        
    },
    Login: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75,
        backgroundColor: '#7A63FF',
        width: '70%',
        height: 50,
        borderRadius: 50
    },
    LoginText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    Daftar: {
        alignSelf: 'center',
        marginTop: 50,
        letterSpacing: 0.2,
        color: '#000'
    },
    DaftarPress: {
        fontWeight: 'bold',
        color: '#000'
    }
})

export const Dark = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: '#000'
    },
    Logo: {
      alignSelf: 'center',
      marginTop: 100,
      marginBottom: 50
    },
    Email: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: '#a0a0a0',

    },
    EmailImage: {
        marginRight: 10,
        marginLeft: 10,
        tintColor: '#fff'
    },
    EmailInput: {
        width: '60%',
        color: '#fff'
    },
    Password: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        marginTop: 50,
        borderColor: '#a0a0a0'
    },
    PasswordImage: {
        marginRight: 10,
        marginLeft: 10,
        tintColor: '#fff'
    },
    PasswordInput: {
        width: '60%',
        color: '#fff'
        
    },

    RememberMeBox: {
        borderWidth: 1,
        width: 15,
        height: 15,
        marginRight: 5,
        backgroundColor: '#a0a0a0'
    },

    ForgotPassword: {
        fontWeight: 'bold',
        color: '#a0a0a0'
        
    },
    Login: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 75,
        backgroundColor: '#7A63FF',
        width: '70%',
        height: 50,
        borderRadius: 50
    },
    LoginText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 2
    },
    Daftar: {
        alignSelf: 'center',
        marginTop: 50,
        letterSpacing: 0.2,
        color: '#fff'
    },
    DaftarPress: {
        fontWeight: 'bold',
        color: '#fff'

    }
})
