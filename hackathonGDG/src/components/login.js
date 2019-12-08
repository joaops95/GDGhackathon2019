
import React, { Component } from 'react';
import { Card } from 'react-native-elements'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import Input from '../utils/forms/input';

class LoginScreen extends Component {

    state = {
        type: 'Login',
        action: 'Login',
        actionMode: 'Register',
        hasErrors: false,
        form: {
            email: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    confirmPass: 'password'
                }
            }
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={require('../img/community.jpeg')} style={{ width: "100%", resizeMode: 'cover', minHeight: 180 }} />
                {/* <Image source={require('../img/community.jpeg')} style={{height: 250, resizeMode: 'stretch'}}/>
                 */}
                <Card containerStyle={{ padding: 12 }} wrapperStyle={{ height: '75%', justifyContent: 'space-around', }}>
                    <Text style={{margin:15, justifyContent: 'center', alignContent: 'center', textAlign:'center'}}>My Amazing App</Text>
                    <View>
                        <View style={{ marginBottom: 10, marginTop: 70 }}>
                            <Input
                                placeholder="Email"
                                placeholderTextColor="#cecece"
                                type={this.state.form.email.type}
                                value={this.state.form.email.value}
                                autoCapitalize={"none"}
                                keyboardType={"email-address"}
                                onChangeText={value => this.updateInput("email", value)}
                            //overrideStyle={{}}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Input
                                placeholder="Password"
                                placeholderTextColor="#cecece"
                                type={this.state.form.password.type}
                                value={this.state.form.password.value}
                                onChangeText={value => this.updateInput("password", value)}
                                //overrideStyle={{}}
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View style={styles.button}>

                        <TouchableOpacity
                            style={{ backgroundColor: '#4285F4', height: 50, width: 200, borderRadius: 10, paddingTop: 10, margin: 10 }}
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <Text style={{ color: '#fff', textAlign: 'center' }}>
                                {this.state.action}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ backgroundColor: '#4285F4', height: 50, width: 200, borderRadius: 10, paddingTop: 10, margin: 10 }}
                            onPress={() => this.props.navigation.navigate('Home')}
                        >
                            <Text style={{ color: '#fff', textAlign: 'center' }}>
                                {this.state.actionMode}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>

        )
    }
}



const styles = StyleSheet.create({
    errorContainer: {
        marginBottom: 10,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#f44336'
    },
    errorLabel: {
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    button: {
        flexDirection: 'column',
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
        marginTop: 150,
    }
})


export default LoginScreen;
