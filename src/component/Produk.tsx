import React, { useRef } from 'react';
import { ScrollView, View, Image, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
    { id: '1', image: require('../image/1.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
    { id: '2', image: require('../image/3.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
    { id: '3', image: require('../image/4.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
    { id: '4', image: require('../image/1.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
    { id: '4', image: require('../image/3.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
    { id: '4', image: require('../image/4.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
    { id: '4', image: require('../image/1.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
    { id: '4', image: require('../image/3.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
    { id: '4', image: require('../image/1.png'), name: 'Tas Bagus', price: 'Rp. 200k' },
];

const Item = ({ item, isLeft }) => (
    <View style={{
        backgroundColor: '#FF9F1A',
        width: 175,
        height: 209,
        borderRadius: 6,
        margin: 5,
        marginTop: 27,
        marginLeft: isLeft ? 19 : 5,
        marginRight: isLeft ? 5 : 19,
    }}>
        <Image style={{
            width: 105,
            height: 100,
            marginLeft: 25,
            marginTop: 40,
        }} source={item.image} />
        <View style={{
            backgroundColor: '#FAD390',
            width: 163,
            height: 33,
            borderRadius: 6,
            marginLeft: 5,
            marginTop: 25,
        }}>
            <Text style={{
                fontSize: 12,
                color: '#000000',
                fontWeight: 'bold',
                marginLeft: 6,
            }}>{item.name}</Text>
            <Text style={{
                fontSize: 10,
                color: '#000000',
                marginLeft: 6,
            }}>{item.price}</Text>
        </View>
    </View>
);

const Akun = () => {
    const scrollViewRef = useRef(null);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Cari"
                    placeholderTextColor="#888"
                />
                <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
            </View>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {data.map((item, index) => (
                        <Item key={item.id} item={item} isLeft={index % 2 === 0} />
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
    },
    searchContainer: {
        backgroundColor: '#FAD390',
        paddingHorizontal: 10,
        borderRadius: 7,
        elevation: 2,
        marginTop: 35,
        marginHorizontal: 19,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        color: '#FAD390',  // Warna teks input
    },
    searchIcon: {
        marginRight: 10,
    },
    scrollViewContent: {
        marginLeft: 5,
        marginRight: 5,
    },
});

export default Akun;