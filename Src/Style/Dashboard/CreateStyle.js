import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },

  Title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
    marginStart: 10,
  },
  TouchImg: {
    borderWidth: 2,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 10,
  },
  addImg: {
    width: 50,
    height: 50,
  },
  inputArea: {
    borderWidth: 2,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  inputAreaDesc: {
    borderWidth: 2,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    borderTopWidth: 0,
    height: 200,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginVertical: 20,
  },
  TapButton: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A63FF',
    borderRadius: 100,
  },
  TextButton: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
