import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  Header: {
    backgroundColor: '#7A63FF',
    height: 60,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderIcon: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  Title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  Biodata: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    // borderWidth: 2,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
    tintColor: '#f12',
    marginHorizontal: 10,
  },
  data: {
    // marginVertical: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  occupation: {
    fontSize: 12,
    color: 'gray',
  },

  Select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 2,
    marginVertical: 5,
  },
  Selected: {
    alignItems: 'center',
    width: '50%',
    padding: 5,
    borderWidth: 1,
  },

  SelectedText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  project: {
    marginVertical: 5,
    // borderWidth: 1,
  },
  projectPack: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  projectPic: {
    backgroundColor: 'grey',
    height: 115,
    width: 115,
    margin: 10,
  },
});
