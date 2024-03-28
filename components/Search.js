import { Text, TextInput, View, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Search = ({ searchHandler }) => {
    const [q, setQ] = useState("");

    const textHandler = (text) => {
        setQ(text);
    };

    return (
        <View style={styles.Wrapper}>
            <TextInput style={styles.InputWrapper} placeholder='Enter your city...' placeholderTextColor='black' onChangeText={textHandler} />
            <EvilIcons onPress={() => searchHandler(q)} name="search" size={40} color="blue" />
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    Wrapper: {
        width: Dimensions.get('screen').width - 40,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    InputWrapper: {
        width: '90%',
        borderColor: 'blue',
        borderWidth: 3,
        padding: 5,
    }
});
