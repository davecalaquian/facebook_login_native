import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

class FacebookLogin extends Component {
    constructor(){
        super();

        this.handleLogin = this.handleLogin.bind(this);
    }
    async handleLogin(){
        const APP_ID = '678398929176766';
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            axios({
                method: 'post',
                url: 'http://192.168.8.135:4000/api/v1/auth/facebook',
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Authorization': `Bearer ${token}`,
                }
            })
            .then((res) => {
                const token = res.headers['x-auth-token'];
                console.log(res.data);
                console.log(token);
            })
            .catch((err) => console.log(err));
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.handleLogin}>
                    <Text style={styles.buttonStyle}>Login with Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    buttonStyle:{
        backgroundColor: '#3b5998',
        padding: 20,
        color: '#fff'
    }
}
export default FacebookLogin;