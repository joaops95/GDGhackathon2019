
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import ImagePicker from 'react-native-image-picker';
class UsersScreen extends Component{

  render(){
    let index = 0
    const item = this.props.navigation.getParam('item')
    if (item != null ) {
      eventView = 
      <View style = {styles.listItem}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>Location: {item.location}</Text>
      </View>;
    } else {
      eventView = <View style = {styles.listItem}><Text>No Events Registered yet</Text></View>
    }

    return(
      <View>
      <View style = {styles.header}>
      <Text>My Events</Text>
      </View>
      {eventView}
      <View style={styles.button}>
      <TouchableOpacity
      style = {{backgroundColor: '#4285F4', height: 50, width: 200, borderRadius:10, paddingTop:10}}
      onPress={()=>this.props.navigation.navigate('Home')}
      >
      <Text style = {{color:'#fff',textAlign:'center'}}>
      Report an Issue
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
    },
  header:{
    alignItems:'center',
    fontSize:100,
  }
})


export default UsersScreen;
