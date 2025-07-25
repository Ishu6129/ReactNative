import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AppScreen, Dummy_Task } from '../Utils/Constants';
import HomeScreen from '../Screens/HomeScreen';
import AddTaskScreen from '../Screens/AddTaskScreen';
import { Modal, Button, Chip } from 'react-native-paper';

const AppManager = () => {
  const [currentScreen, setCurrentScreen] = useState(AppScreen.AddTaskScreen);
  const [modalVisible, setModalVisible] = useState(false);
  const [tasks, setTasks] = useState([...Dummy_Task]);

  const handleTaskComplete = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const newList=[...tasks];
    newList[taskIndex]={
      ...newList[taskIndex],
      isComplete:true
    }
    setTasks(newList);
  };
   

  const handleTaskDelete = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const newList = tasks.filter(task => task.id !== id);
    setTasks(newList);
  };

  const handleNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setModalVisible(true);
    setCurrentScreen(AppScreen.HomeScreen);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === AppScreen.HomeScreen ? (
        <HomeScreen
          tasks={tasks}
          onTaskComplete={handleTaskComplete}
          onTaskDelete={handleTaskDelete}
          changeNoTaskScreen={(screen) => setCurrentScreen(screen)}

        />
      ) : (
        <AddTaskScreen onAddNewTask={handleNewTask} changeScreen={(screen) => setCurrentScreen(screen)} />
      )}

      <View style={styles.bottomBar}>
        <Chip
          icon="home"
          onPress={() => setCurrentScreen(AppScreen.HomeScreen)}
          style={styles.chip}
        >
          HOME
        </Chip>
        <Chip
          icon="playlist-plus"
          onPress={() => setCurrentScreen(AppScreen.AddTaskScreen)}
          style={styles.chip}
        >
          ADD
        </Chip>
      </View>

      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        contentContainerStyle={styles.modalContent}
      >
        <Text style={{ textAlign: "center",marginBottom:20 }}>✅ Task Added Successfully!</Text>
        <Button onPress={() => setModalVisible(false)}>Close</Button>
      </Modal>
    </View>
  );
};

export default AppManager;

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    position: 'absolute',
    borderRadius: 10,
  },
  chip: {
    elevation: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -150 }, { translateY: -75 }],
    width: 300,
    elevation: 5,
  },
});
