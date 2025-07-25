import { StyleSheet, Text, View,Platform } from 'react-native';
import React from 'react';
import { Card, Button,Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskItems = ({ id, title, description, date,isComplete,onComplete,onDelete }) => {
  return (
    <Card style={styles.card}>
      {isComplete && 
      // <Chip icon={"calendar-multiple-check"} style={{marginLeft:"auto"}} mode='outlined'>Done</Chip>
      <Icon name="check-circle" size={33} color="purple" style={{marginLeft:"auto",color: '#5E17EB', opacity:0.5}} />
      }
      <Card.Title title={title} />
      <Card.Content>
        <Text style={styles.description}>{description}</Text>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button onPress={()=>onDelete(id)} style={styles.button}>Delete</Button>
        <Button onPress={()=>onComplete(id)} style={styles.button}>Complete</Button>
      </Card.Actions>
    </Card>
  );
};

export default TaskItems;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    ...Platform.select({
      android: {
        elevation: 10,
        backgroundColor: '#fff',
      },
      ios: {
        backgroundColor: '#f8f8f8',
      }
  })},
  description: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    padding: 10,
    justifyContent: 'space-between',
    gap: 50,
  },
  button: {
    borderRadius: 18,
    elevation: 2,
  },
});
