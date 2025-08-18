import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import generateFakeNews from '../data/FakeNews'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const LatestNews = ({navigation}) => {
  const news=generateFakeNews(5);
  return (
    <SafeAreaView>
      <FlatList
      data={news}
      renderItem={(iter) => <ListItem {...iter.item} navigation={navigation} /> }
      keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

export default LatestNews

const styles = StyleSheet.create({})