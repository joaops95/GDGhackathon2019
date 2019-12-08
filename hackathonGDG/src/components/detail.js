
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';



class Detail extends Component{
   
  render(){
    const item = this.props.navigation.getParam('item')
    return(
    <View>
    <View style = {styles.listItem}>
    <Text style = {styles.title}>{item.title}</Text>
    <Text>{item.description}</Text>
    <Text>Location: {item.location}</Text>
    </View>
    <View style = {styles.button}>
    <TouchableOpacity
    style = {{backgroundColor: '#4285F4', height: 50, width: 200, borderRadius:10, paddingTop:10}}
    onPress={()=>this.props.navigation.navigate('Users', {item:item})}
    >
    <Text style = {{color:'#fff',textAlign:'center'}}>
    Register for this event
    </Text>
    </TouchableOpacity>
    </View>
    </View>
    )
  }
}

styles = StyleSheet.create({
  listItem:{
      backgroundColor:'#cecece',
      padding:20,
      width:'100%',
      marginTop:5
  },
  button:{
    alignItems: "center",
    marginBottom:10,
    marginTop:10,
    }
})
export default Detail;
