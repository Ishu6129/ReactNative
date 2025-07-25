import { StyleSheet, View, Text ,Alert } from 'react-native';
import React from 'react';
import { Chip, TextInput, Button, Appbar } from 'react-native-paper';
import { AppScreen } from '../Utils/Constants';

const validateInput = (text, description) => {
  if (!text || !description || text.trim() === '' || description.trim() === '') {
    Alert.alert("Something is missing", 'Please fill in all fields');
    return false;
  }
  return true;
}

const AddTaskScreen = ({ onAddNewTask, changeScreen }) => {
  const [text, setText] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = () => {
    if (!validateInput(text, description)) return;

    const newTask = {
      title: text,
      description,
      date: new Date().toLocaleDateString(),
      isComplete: false,
      id: Date.now(),
    };
    onAddNewTask(newTask);
    setText('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="arrow-left" onPress={() => changeScreen(AppScreen.HomeScreen)} />
        <Appbar.Content title="View Tasks" />
      </Appbar.Header>

      <Chip icon="playlist-plus" style={styles.chip} textStyle={styles.chipText}>
        Add New Task
      </Chip>

      <TextInput
        style={styles.input}
        mode="outlined"
        label="Task Title"
        placeholder="Enter Task Title"
        value={text}
        onChangeText={setText}
        theme={{ roundness: 12 }}
      />

      <TextInput
        style={styles.description}
        mode="outlined"
        label="Task Description"
        numberOfLines={5}
        placeholder="Enter Task Description"
        multiline
        value={description}
        onChangeText={setDescription}
        theme={{ roundness: 12 }}
      />

      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
      >
        Save Task
      </Button>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  appbar: {
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  chip: {
    backgroundColor: '#eeeeee',
    alignSelf: 'center',
    marginBottom: 52,
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  chipText: {
    fontSize: 30,
    color: '#5E17EB',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 20,
     marginBottom: 34,
    backgroundColor: '#f9f9f9',
  },
  description: {
    marginBottom: 20,
    height: 120,
    backgroundColor: '#f9f9f9',
     marginBottom: 52,
  },
  button: {
    borderRadius: 18,
    elevation: 2,
  },
});
