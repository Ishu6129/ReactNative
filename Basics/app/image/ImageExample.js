import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import favicon from '../../assets/images/favicon.png';
import { ScrollView } from 'react-native-gesture-handler';

const ImageExample = () => {
  return (
    <ScrollView>
      <View style={{margin:0,flexWrap: 'wrap', gap: 20 }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          loadingIndicatorSource={favicon}
          resizeMode="cover"
        />
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          loadingIndicatorSource={favicon}
          resizeMode="cover"
        />
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          loadingIndicatorSource={favicon}
          resizeMode="cover"/>
          
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          loadingIndicatorSource={favicon}
          resizeMode="cover"
        />
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          loadingIndicatorSource={favicon}
          resizeMode="cover"
        />
      </View>
    </ScrollView>
  );
};

export default ImageExample;

const styles = StyleSheet.create({});
