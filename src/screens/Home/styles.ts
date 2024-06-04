
import { Button, StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
    
  },
  eventName:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    color: '#FFF',
  },
  eventDate:{fontSize: 16,
    fontWeight: '500',
    color: '#6b6b6b',},

  input: {
    flex: 1,
    backgroundColor:'#1f1e25',
    height: 56,
    borderRadius:5,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 18,
    marginRight: 12
    },
    buttonText:{
      color: '#fdfcfe',
      fontSize: 24
    },
    button:{
      height: 56,
      width: 56,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center'
    }
});
