import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { AppScreens } from '../utils/Constants';

const ListItem = ({id,title,image,date,content,author,navigation}) => {
  return (
    <Card style={styles.container} 
    onPress={() => navigation.navigate(AppScreens.NewsItem, {id, title, content, date, author, image})}>
    <Card.Title  title={title} titleStyle={styles.title}/>
    <Card.Cover source={{ uri:image }} style={styles.image}  />
    <Card.Content>
      <Text variant="bodySmall" style={{color: 'gray',marginBottom:5}}>{date}</Text>
      <Text variant="bodyMedium" style={styles.content} numberOfLines={2} ellipsizeMode="tail">{content}</Text>
      <Text variant="titleLarge" style={styles.author} >{author}</Text>
    </Card.Content>
  </Card>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,

  },
  content: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  author: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '500',
    alignSelf: 'flex-end',
  },

})