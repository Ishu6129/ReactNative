import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
   <View style={styles.container}>
         <Text style={styles.text}>Welcome to Home Screen</Text>
         <Button style={styles.button} onPress={()=>navigation.navigate("User")} title="Go to User"/>
         <Button style={styles.button} onPress={()=>navigation.navigate("Profile")} title="Go to Profile"/>
          <Button style={styles.button} onPress={()=>navigation.popToTop()} title="pop to top"/>
       </View>
  )
}

export default HomeScreen

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
    margin: 10
  }
})