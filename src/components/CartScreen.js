import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux'
import Products from '../screens/Products';
function CartScreen(props) {
    const navigation = useNavigation();

    return (
        <View>
            <View style={{backgroundColor: 'green', height:40, flexDirection:'row', alignItems: 'center', justifyContent: 'flex-start'}}>
            <TouchableOpacity style={{ justifyContent: 'center', }} onPress={() => { navigation.goBack(); }}>
                <Ionicons name="arrow-back-sharp" size={28} color="white" />
            </TouchableOpacity>
                <Text style={{color: 'white', fontSize:23, fontWeight: 'bold', marginLeft:140}}>Cart</Text>
            </View>
           {props.cartItems.length > 0 ? 
           <Products products={props.cartItems} onPress={props.removeItem}/> 
         
        : <Text style={{color: 'black', fontSize: 18, marginLeft:110}}>No items in your Cart</Text>}
          <TouchableOpacity onPress={()=>alert('Ordered Successfully Placed')} style={{ backgroundColor: 'green', width:'80%', height:40, alignItems: 'center', borderRadius:30, marginLeft:40, marginTop:25}}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Order Now</Text>
        </TouchableOpacity> 
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({type: 'REMOVE_FROM_CART', payload:product})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartScreen);