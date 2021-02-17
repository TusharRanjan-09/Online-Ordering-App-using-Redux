import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

function Products(props) {
    return (
        <ScrollView >
            {props.products.map((item, index) => {
                return (
                    <View key={index}>
                         <View style={{flexDirection: 'row', alignItems: 'center', padding: 10,borderBottomWidth:.5}}>
                        <Image source={{ uri: item.uri }} style={{ width: 100, height: 100 }} />
                        <TouchableOpacity onPress={() => props.onPress(item)}>
                            <View style={{marginHorizontal:10, width: '82%' }}>
                                <Text style={{color: 'black', fontSize:18}}>{item.name}</Text>
                                <Text style={{color: 'red', fontSize:18}}>{item.price}</Text>
                                <Text style={{color: 'grey', fontSize:16}}>{item.note}</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    );
}
export default Products;