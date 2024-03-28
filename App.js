import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';

export default function App() {
  const searchHandler = (text) => {
    console.log("text", text);
  };

  return (
    <View style={styles.container}>
      <Text>Weather</Text>
      <Search searchHandler={searchHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
