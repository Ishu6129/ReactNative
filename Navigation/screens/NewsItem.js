import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const NewsItem = ({ navigation, route }) => {
  const { id, title, content, date, author, image } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.date}>{date}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'right', 
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 10,
    textAlign: 'right',
  },
})
