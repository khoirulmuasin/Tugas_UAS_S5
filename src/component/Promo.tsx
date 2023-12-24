import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const promoData = [
    { id: '1', image: require('../image/1.png'), name: 'Promo Bag 1', price: 'Rp. 150k' },
    { id: '2', image: require('../image/3.png'), name: 'Promo Bag 2', price: 'Rp. 180k' },
    { id: '3', image: require('../image/4.png'), name: 'Promo Bag 3', price: 'Rp. 200k' },
    { id: '4', image: require('../image/1.png'), name: 'Promo Bag 4', price: 'Rp. 160k' },
    { id: '5', image: require('../image/4.png'), name: 'Promo Bag 5', price: 'Rp. 190k' },
];

const PromoItem = ({ item }) => (
    <TouchableOpacity style={styles.promoItemContainer}>
        <Image source={item.image} style={styles.promoItemImage} />
        <View style={styles.promoItemDetails}>
            <Text style={styles.promoItemName}>{item.name}</Text>
            <Text style={styles.promoItemPrice}>{item.price}</Text>
        </View>
    </TouchableOpacity>
);

const Promo = () => {
    const navigation = useNavigation();

    const goToProductPage = () => {
        navigation.navigate('Produk');
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Promo"
                    placeholderTextColor="#888"
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.promoList}>
                    {promoData.map((item) => (
                        <PromoItem key={item.id} item={item} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E272E',
        paddingHorizontal: 10,
    },
    searchContainer: {
        backgroundColor: '#FAD390',
        borderRadius: 7,
        elevation: 2,
        marginTop: 35,
        marginHorizontal: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        color: '#FAD390',
        marginLeft: 10,
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    promoList: {
        width: '100%',
        marginTop: 10,
    },
    promoItemContainer: {
        backgroundColor: '#FF9F1A',
        borderRadius: 10,
        marginVertical: 5,
        width: '48%',
    },
    promoItemImage: {
        width: '100%',
        height: 200, // Adjust the height as needed
        borderRadius: 10,
    },
    promoItemDetails: {
        padding: 10,
    },
    promoItemName: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
    },
    promoItemPrice: {
        fontSize: 14,
        color: '#000000',
    },
});

export default Promo;
