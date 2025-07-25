import React from 'react';
import { View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const StatusBarController = () => {
  const [status, setStatus] = React.useState(true);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar
        style="dark"
        animated
        hidden={status}
      />
      <Button title="Toggle Status Bar" onPress={() => setStatus(prev => !prev)} />
    </View>
  );
};

export default StatusBarController;
