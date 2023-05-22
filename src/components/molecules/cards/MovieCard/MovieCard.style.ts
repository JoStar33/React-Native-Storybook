import { StyleSheet } from 'react-native';

export const movieCardStyles = StyleSheet.create({
  container: {
    padding: '3%',
    flex: 1,
    margin: '4%',
    width: '40%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 20,
    color: 'black' 
  },
  description: { 
    height: 50,
    color: 'black' 
  },
});