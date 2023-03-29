import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Recipe from './src/Recipe';

export default function App() {
  return (
    <View style={styles.container}>
      <Recipe />
      <StatusBar style="auto" />
    </View>
  );
};
