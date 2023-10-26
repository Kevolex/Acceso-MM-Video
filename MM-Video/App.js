import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VideoPLayer from './components/VideoPLayer';

export default function App() {
  return (
    <div className="App">
      <VideoPLayer></VideoPLayer>
      <a>a</a>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
