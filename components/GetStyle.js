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
    width: 100, // 너비 설정
    margin: 10, // 여백 설정
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
  pollenMapButton: {
    backgroundColor: '#D5DCA5',
    padding: 8,
    alignItems: 'center',
    marginHorizontal: 5, 
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
  underTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 80,
    height: 80, 
    resizeMode: 'contain',
    margin: 5, // 여백 설정
  },
  pollenMapText: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 5,
    borderRadius: 3,
    marginTop: 2,
  },
  cityContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },versionContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  versionText: {
    textAlign: 'center',
    color: '#888',
  },
});

export default styles;
