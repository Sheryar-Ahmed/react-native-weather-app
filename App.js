import { Dimensions, StyleSheet, Text, View, ImageBackground } from 'react-native'; // Import ImageBackground
import Search from './components/Search';
import Weather from './components/weather/Weather';
import { useState } from 'react';
const bg_default = require('./assets/default_bg.jpg');

export default function App() {
  const [q, setQ] = useState("");
  const [bg, setBG] = useState(bg_default); // Initialize bg state with null
  const searchHandler = (text) => {
    setQ(text);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bg}
        style={styles.container}
        resizeMode='cover'
      >
        <Text style={styles.header}>Feel Weather</Text>
        <Search searchHandler={searchHandler} />
        <Weather q={q} setBG={setBG} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
    color: '#fff', // Set text color to white
    marginBottom: 20, // Add margin bottom for spacing
  },
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Add padding for inner content
  },
});
