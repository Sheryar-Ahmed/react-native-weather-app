import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { getWeatherCity } from './_request';

const Weather = ({ q }) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (q !== '') {
            const asyncFunction = async () => {
                setLoading(true);
                try {
                    const result = await getWeatherCity(q);
                    setData(result.data);
                } catch (err) {
                    console.error(err);
                }
                setLoading(false);
            };

            asyncFunction().catch((err) => {
                console.error(err);
                setLoading(false);
            });
        }
    }, [q]);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : data ? (
                <View style={styles.wrapper}>
                    <View style={styles.temp}>
                        <Text style={styles.countryText}>
                            {data?.location?.country},{data?.location?.region},
                        </Text>
                        <Text style={styles.cityText}>{data?.location?.name}</Text>
                        <Text style={styles.centiText}>{data?.current?.temp_c}° C</Text>
                    </View>
                    <View style={styles.humid}>
                        <Text>humidity: {data?.current?.humidity}</Text>
                        <Text>Wind_KPH: {data?.current?.wind_kph}</Text>
                        <Text>Wind_MPH: {data?.current?.wind_mph}</Text>
                        <Text>Cloud: {data?.current?.cloud}</Text>
                    </View>
                </View>
            ) : (
                <Text style={styles.prompt}>Please type something to get weather information</Text>
            )}
        </View>
    );
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    wrapper: {
        width: Dimensions.get('screen').width,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    temp: {
        width: Dimensions.get('screen').width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    countryText: {
        textAlign: 'center',
        width: Dimensions.get('screen').width - 10,
        fontSize: 40,
    },
    cityText: {
        textAlign: 'center',
        fontSize: 35,
    },
    centiText: {
        fontSize: 50,
    },
    humid: {
        width: Dimensions.get('screen').width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    prompt: {
        color: 'green',
        width: Dimensions.get('screen').width-50,
        fontSize: 16,
        textAlign: 'center',
    },
});
