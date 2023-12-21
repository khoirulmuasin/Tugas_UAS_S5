import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const goToProductPage = () => {
        navigation.navigate('Produk');
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../image/3.png')} style={styles.image} />
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={goToProductPage}
            >
                <Text style={styles.buttonText}>BELANJA SEKARANG</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E272E',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    buttonContainer: {
        height: 50,
        width: 200,
        backgroundColor: '#FAD390',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 50,
    },
    buttonText: {
        color: '#1E272E',
        fontWeight: 'bold',
    },
});

export default Home;