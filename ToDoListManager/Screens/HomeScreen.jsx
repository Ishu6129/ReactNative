import { FlatList, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Chip } from 'react-native-paper';
import TaskItems from '../Components/TaskItems';
import {Button} from 'react-native-paper';
import { AppScreen } from '../Utils/Constants';

const HomeScreen = ({id,tasks, onTaskComplete, onTaskDelete,changeNoTaskScreen }) => {
  return (
    <View style={styles.container}>
      <Chip style={styles.chip} textStyle={styles.chipText} icon="format-list-bulleted">
        Your Tasks
      </Chip>

      {tasks.length === 0 ? (
        <View>
        <Text style={styles.noTasksText}>No tasks added yet 🎯</Text>
        <Button onPress={()=>changeNoTaskScreen(AppScreen.AddTakScreen)}>Click here Add Task</Button>
        </View>
      ) : (
        <FlatList
          data={tasks}
          contentContainerStyle={styles.taskList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItems
              date={item.date}
              id={item.id}
              title={item.title}
              description={item.description}
              isComplete={item.isComplete}
              onComplete={(id) => onTaskComplete(id)}
              onDelete={(id) => onTaskDelete(id)}
            />
          )}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 27
  },
  chip: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  chipText: {
    fontSize: 30,
    color: '#5E17EB',
    fontWeight: 'bold',
  },
  noTasksText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#999',
    marginTop: 40,
  },
  taskList: {
    paddingBottom: 16,
  },
});
