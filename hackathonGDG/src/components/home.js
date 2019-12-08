
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Detail from './detail'
const DATA = require('../../mocks/problems.json')
function Item({ item, funcToCall }) {
  return (
    <View style = {styles.listItem}>
      <TouchableOpacity
        onPress = {funcToCall}
      >
      <Text style = {styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>Location: {item.location}</Text>
      </TouchableOpacity>
    </View>
  );
}
class HomeScreen extends Component{

  render(){
    return(
      <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} funcToCall = {()=>this.props.navigation.navigate('Detail', {item:item})} />}
        keyExtractor={(item, index) => index.toString()}
      />
      </View>
    )
  }
}

styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  }, 
   listItem:{
    backgroundColor:'#cecece',
    padding:20,
    width:'100%',
    marginTop:5
},
})

export default HomeScreen;
