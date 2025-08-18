import { StyleSheet, Text, View } from 'react-native'
import generateFakeNews from '../data/FakeNews'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import React from 'react'

const AllNews = ({navigation}) => {
  const news=generateFakeNews(5);
  return (
    <SafeAreaView>
      <FlatList
      data={news}
      renderItem={(iter) => <ListItem {...iter.item}  navigation={navigation}/> }
      keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

export default AllNews

const styles = StyleSheet.create({})