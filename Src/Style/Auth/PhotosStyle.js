import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  Pic: {
    position: 'absolute',
    alignSelf: 'center',
    top: '30%',
  },

  Circle1: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    width: 150,
    height: 150,
    borderColor: '#a0a0a0',
  },
  Circle2: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    width: 200,
    height: 200,
    borderColor: '#a0a0a0',
  },
  Circle3: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    width: 250,
    height: 250,
    borderColor: '#a0a0a0',
  },
  Circle4: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 300,
    width: 300,
    height: 300,
    borderColor: '#a0a0a0',
  },
  Circle5: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 350,
    width: 350,
    height: 350,
    borderColor: '#a0a0a0',
  },
  Add: {
    alignSelf: 'center',
  },
  Title: {
    alignSelf: 'center',
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  Unggah: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
    backgroundColor: '#7A63FF',
    width: '70%',
    height: 50,
    borderRadius: 50,
  },
  UnggahText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Lewati: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '70%',
    height: 50,
    borderWidth: 3,
    borderColor: '#7A63FF',
    borderRadius: 50,
  },
  LewatiText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#63FF',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});

export const Dark = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  Title: {
    alignSelf: 'center',
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
