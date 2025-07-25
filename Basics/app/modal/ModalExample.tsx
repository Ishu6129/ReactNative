import { StyleSheet, Text, View, Modal, Button, StatusBar } from 'react-native'
import React, { useState } from 'react'

const ModalExample = () => {
    const [open, setOpen] = useState(false);
  return (
    <View>
      <Text>ModalExample</Text>
      <Modal visible={open} 
      animationType='fade'
      transparent={true}>
        <View style={styles.container}>
            <View style={styles.modal}>
                <Button title="close" onPress={()=>setOpen((prev)=>!prev)}/>
            </View>
        </View>
        </Modal>
        <Button title="open form" color="blue" 
        onPress={()=>setOpen(true)}/>
    </View>
  ) 
}

export default ModalExample

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20
    },
    modal:{
        padding: 20,
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 4,
        borderRadius: 10,
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    }
})