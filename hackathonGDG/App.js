
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from './src/components/home';
import UsersScreen from './src/components/users';
import LoginScreen from './src/components/login'
import DetailScreen from './src/components/detail'
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const HomeStack = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions:({navigation}) =>({
      title:`Home`,
      headerBackTitle:'Home'
    }),
  },
  Detail:{
    screen: DetailScreen,
    navigationOptions:({navigation}) =>({
      title:`Detail`
    }),
  }

},{
  initialRouteName: 'Home',
  headerMode: 'none',
  defaultNavigationOptions:{
    headerShown: false,
  },
  mode:'card',
  headerMode:false
})
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home:{
      screen: HomeStack,
        title:`Home`,
        headerBackTitle:'Home',
        headerMode: 'none',
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
            </View>
          ),
          }
    },
    Users:{
      screen: UsersScreen,
        title:`My Profile`,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
            </View>
          ),
          }
    },

  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  }
)


const MainStack = createStackNavigator({
  TabNavigator:{
    screen: TabNavigator
  },
  Login:{
    screen: LoginScreen,
    navigationOptions:({navigation}) =>({
      title:`Login`
    }),
  }

},{
  initialRouteName: 'Login',
  defaultNavigationOptions:{
    headerStyle:{
        backgroundColor:'#4285F4'
    },
    headerTintColor:'white',
    headerTitleStyle:{
        fontWeight:'bold',
        color:'white',
        flex: 1,
        textAlign:'center'
    }
  },
  mode:'card',
  headerMode:false
})

export default createAppContainer(MainStack);