import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import AppManager from './Manager/AppManager';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.statusBarBackground} />
      <ExpoStatusBar style='light' />
      <View style={styles.container}>
        <PaperProvider>
        <AppManager />
        </PaperProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  statusBarBackground: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
