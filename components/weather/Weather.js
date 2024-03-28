import { Text, View, StyleSheet, Dimensions } from 'react-native'

const Weather = () => {
    return (
        <View style={styles.Wrapper}>
            <View style={styles.Temp}>
                <Text style={styles.CountryText}>Pakistan,</Text>
                <Text style={styles.CityText}>Lahore</Text>
                <Text style={styles.CentiText}>22° C</Text>
            </View>
            <View style={styles.humid}>
                <Text>humidity: 22</Text>
                <Text>Wind: 232</Text>
            </View>

        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    Wrapper: {
        width: Dimensions.get('screen').width,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    Temp: {
        width: Dimensions.get('screen').width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    CountryText: {
        fontSize: 44,
    },
    CityText: {
        fontSize: 35,
    },
    CentiText: {
        fontSize: 50,
    },
    humid: {
        width: Dimensions.get('screen').width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
