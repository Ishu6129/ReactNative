import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface FlatItemListProps {
  item: {
    title: string;
  };
}

const FlatItemList = (props: FlatItemListProps) => {
  return (
    <View style={styles.container}>
      <Text>{props.item.title}</Text>
    </View>
  )
}

export default FlatItemList

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#a964b2ff',
    marginVertical: 8,
    marginHorizontal: 16,
  }
})