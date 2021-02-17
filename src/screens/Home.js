import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ShoppingCart from '../components/ShoppingCart';
function Home({navigation}) {
    return (
      <View style={{flex: 1}}>
        <ShoppingCart header={"Shopping"}/>
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('BooksScreen')} style={{borderWidth:3, borderColor: 'green', width:'80%', height:40, alignItems: 'center', borderRadius:30, marginBottom:10}}>
          <Text style={{fontSize: 25, color: 'green', fontWeight: 'bold'}}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('ElectronicsScreen')} style={{ backgroundColor: 'green', width:'80%', height:40, alignItems: 'center', borderRadius:30}}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>Electronics</Text>
        </TouchableOpacity>
        </View>       
      </View>
    );
  }

export default Home;