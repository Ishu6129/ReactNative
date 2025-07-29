import { StyleSheet, Text, View,Button} from 'react-native'
import React from 'react'

const User = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to User Screen</Text>
      <Button style={styles.button} onPress={()=>navigation.navigate("Home")} title="Go to Home Screen"/>
      <Button style={styles.button} onPress={()=>navigation.navigate("Profile")} title="Go to Profile"/>
       <Button style={styles.button} onPress={()=>navigation.goBack()} title="Go Back"/>
        
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  }
})