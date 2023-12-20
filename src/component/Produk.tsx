import { Image, Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


export class App extends Component {
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#1E272E' }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 5,
                    paddingEnd: 1,
                }}>
                    <Icon name="menu-outline" size={50} color="#FAD390" />
                    <Icon name="notifications-outline" size={50} color="#FAD390" />
                </View>
                <Text style={{
                    color: '#FAD390',
                    padding: 5,
                    paddingTop: 2,
                    fontSize: 20,
                }}>HI, Bosss</Text>
                <View style={{
                    backgroundColor: '#FAD390',
                    width: 382,
                    height: 102,
                    borderRadius: 6,
                    marginLeft: 5,
                    marginTop: 27,
                    flexDirection: 'row',
                }}>
                    <Image style={{
                        width: 143, height: 103,
                    }}
                        source={require('../image/5.png')} />
                    <View>
                        <Text style={{
                            fontSize: 15,
                            color: '#000000',
                            fontWeight: 'bold',
                            marginLeft: 80,
                            marginTop: 19,
                        }}>Selamat Mencoba</Text>
                        <Text style={{
                            fontSize: 15,
                            color: '#000000',
                            fontWeight: 'bold',
                            marginLeft: 80,
                        }}>Produc Kami</Text>
                        <Text style={{
                            fontSize: 17,
                            color: '#000000',
                            fontWeight: 'bold',
                            marginLeft: 80,
                        }}>Diskon 80%</Text>
                    </View>
                </View>
                <Text style={{
                    color: '#FAD390',
                    fontSize: 20,
                    marginLeft: 5,
                    marginTop: 25,
                }}>Categories</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 24,
                    marginEnd: 19,
                    marginLeft: 19,
                }}>
                    <Text style={{ color: '#FAD390', fontSize: 15, fontWeight: 'bold' }}>Harga 40k</Text>
                    <Text style={{ color: '#FAD390', fontSize: 15, }}>Harga 50k</Text>
                    <Text style={{ color: '#FAD390', fontSize: 15, }}>Harga 60k</Text>
                    <Text style={{ color: '#FAD390', fontSize: 15, }}>Harga 70k</Text>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    marginLeft: 19,
                    marginEnd: 19,
                }}>
                    <View style={{
                        backgroundColor: '#FF9F1A',
                        width: 175,
                        height: 209,
                        borderRadius: 6,
                        marginLeft: 5,
                        marginTop: 27,
                    }}>
                        <Image style={{
                            width: 105,
                            height: 100,
                            marginLeft: 25,
                            marginTop: 40,
                        }} source={require('../image/5.png')} />
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
                            }}>Tas Bagus</Text>
                            <Text style={{
                                fontSize: 10,
                                color: '#000000',
                                marginLeft: 6,
                            }}>Rp. 200k</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#FF9F1A',
                        width: 175,
                        height: 209,
                        borderRadius: 6,
                        marginLeft: 5,
                        marginTop: 27,
                    }}>
                        <Image style={{
                            width: 105,
                            height: 100,
                            marginLeft: 25,
                            marginTop: 40,
                        }} source={require('../image/5.png')} />
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
                            }}>Tas Bagus</Text>
                            <Text style={{
                                fontSize: 10,
                                color: '#000000',
                                marginLeft: 6,
                            }}>Rp. 200k</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    marginLeft: 19,
                    marginEnd: 19,
                }}>
                    <View style={{
                        backgroundColor: '#FF9F1A',
                        width: 175,
                        height: 209,
                        borderRadius: 6,
                        marginLeft: 5,
                        marginTop: 27,
                    }}>
                        <Image style={{
                            width: 105,
                            height: 100,
                            marginLeft: 25,
                            marginTop: 40,
                        }} source={require('../image/5.png')} />
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
                            }}>Tas Bagus</Text>
                            <Text style={{
                                fontSize: 10,
                                color: '#000000',
                                marginLeft: 6,
                            }}>Rp. 200k</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#FF9F1A',
                        width: 175,
                        height: 209,
                        borderRadius: 6,
                        marginLeft: 5,
                        marginTop: 27,
                    }}>
                        <Image style={{
                            width: 105,
                            height: 100,
                            marginLeft: 25,
                            marginTop: 40,
                        }} source={require('../image/5.png')} />
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
                            }}>Tas Bagus</Text>
                            <Text style={{
                                fontSize: 10,
                                color: '#000000',
                                marginLeft: 6,
                            }}>Rp. 200k</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

export default App