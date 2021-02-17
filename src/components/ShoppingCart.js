import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'
function ShoppingCart(props) {
    const navigation = useNavigation();

    return (
        <View style={{ height: 50, backgroundColor: 'green', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={{ justifyContent: 'center', }} onPress={() => { navigation.goBack(); }}>
                <Ionicons name="arrow-back-sharp" size={28} color="white" />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', }}>
                <Text style={{ fontSize: 24, color: 'white', marginLeft: 135 }}>{props.header}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 100 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <FontAwesome5 name="shopping-cart" size={28} color="white" />
                </TouchableOpacity>
                <View style={{ backgroundColor: 'yellow', opacity: .75, width: 20, height: 20, borderRadius: 20, justifyContent: 'center', alignContent: 'center', zIndex: 2000 }}>
                    <Text style={{ color: 'red', position: 'absolute', fontSize: 22, fontWeight: 'bold', padding: 3.5, }}>{props.cartItems.length}</Text>
                </View>
            </View>
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
export default connect(mapStateToProps)(ShoppingCart);