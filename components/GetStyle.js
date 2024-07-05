import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fefefe',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pollenText: {
    backgroundColor: '#D5DCA5',
    textAlign: 'center',
    padding: 5,
    marginVertical: 3,
    fontWeight: 'bold',
    fontSize: 12, 
  },
  text: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    padding: 3,
    fontWeight: 'bold',
    margin: 3,
  },
  picker: {
    width: 100, 
    margin: 10, 
    borderColor: 'gray',
    borderWidth: 1,
 },
  text2: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
    padding: 3,
    fontWeight: 'bold',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 10, 
  },
  button: {
    backgroundColor: '#D5DCA5',
    padding: 8,
    alignItems: 'center',
    marginHorizontal: 5, 
    width:250,
    borderRadius: 7,
    margin: 8,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80, 
    resizeMode: 'contain',
    margin: 5, 
  },
  cityContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
});

export default styles;
