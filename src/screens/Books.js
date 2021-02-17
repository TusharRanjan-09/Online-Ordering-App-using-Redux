import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import ShoppingCart from '../components/ShoppingCart';
import {books} from '../services/Data';
import Products from './Products';
import {connect} from 'react-redux';
function Books(props) {
    return (
      <View >
        <ShoppingCart header={"Books"}/>
        <Products products={books}  onPress={props.addItem}/>
        <Text>Books Screen</Text>
      </View>
    );
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (product) => dispatch({type: 'ADD_TO_CART', payload:product})
    }
}
export default  connect(null,mapDispatchToProps)(Books);