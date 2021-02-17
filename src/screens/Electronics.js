import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingCart from '../components/ShoppingCart';
import {electronics} from '../services/Data';
import Products from './Products';
import {connect} from 'react-redux'
function Electronics(props) {
    return (
      <View >
          <ShoppingCart header={"Electronics"}/>
       <Products products={electronics} onPress={props.addItem}/>
      </View>
    );
  }
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (product) => dispatch({type: 'ADD_TO_CART', payload:product})
    }
}
export default connect(null,mapDispatchToProps)(Electronics);