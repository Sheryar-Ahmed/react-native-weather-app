import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import Weather from './components/weather/Weather';
import { useState } from 'react';

export default function App() {
  const [q, setQ] = useState("");
  const searchHandler = (text) => {
    setQ(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feel Weather</Text>
      <Search searchHandler={searchHandler} />
      <Weather q={q} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
