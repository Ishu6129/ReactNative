import React, { useState } from 'react';
import {View,Text,TextInput,StyleSheet,Button,Pressable,FlatList} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ImageExample from '../image/ImageExample';
import FlatItemList from './FlatItemList';
import CategorySectionList from './CategorySectionList';
import ModalExample from '../modal/ModalExample';
import StatusBarController from '../statusBar/StatusBarController';

const products = [
  "Mobiles", "Laptops", "Tablets", "Accessories", "Smartwatches",
  "Headphones", "Speakers", "Cameras", "Printers", "Monitors",
  "Televisions", "Gaming Consoles", "Smart Home Devices", "Wearable Tech",
  "Virtual Reality Headsets", "Drones", "Fitness Trackers", "Smart Glasses",
  "E-Readers", "Smart Speakers", "Action Cameras",
];

const DATA = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
  { id: '4', title: 'Fourth Item' },
  { id: '5', title: 'Fifth Item' },
];

export default function App() {
  const [text, setText] = useState('');

  return (
    <GestureHandlerRootView>
      
      <FlatList
        ListHeaderComponent={
          
          <View style={styles.container}>
            <StatusBarController />
            <Text style={styles.main}>{text}</Text>

            <ImageExample />

            {products.map((product, index) => (
              <Text
                key={index}
                style={{ fontSize: 18, marginVertical: 5 }}
              >
                {product}
              </Text>
            ))}

            <TextInput
              value={text}
              onChangeText={(ev) => setText(ev)}
              placeholder="Type something"
              placeholderTextColor="#999"
            />
            <Button title="button" color="red" onPress={() => console.log('button pressed')} />

            <CategorySectionList />

            <Pressable
              android_ripple={{ color: 'red' }}
              onPress={() => console.log('Text Pressed')}
              onPressOut={() => console.log('Text Pressed Out')}
              onLongPress={() => console.log('Text Long Pressed')}
            >
              <Text style={{ color: 'blue', fontSize: 20 }}>Press Me</Text>
            </Pressable>
          </View>
        }
        data={DATA}
        renderItem={FlatItemList}
        keyExtractor={(item) => item.id}
      />
      
      <ModalExample />
      
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  main: {
    color: 'red',
    fontSize: 20,
    marginBottom: 20,
  },
});
