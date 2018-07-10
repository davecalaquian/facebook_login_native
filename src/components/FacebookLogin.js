import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                url: 'https://thawing-forest-31945.herokuapp.com/api/v1/auth/facebook',
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
                <Icon.Button 
                    name="facebook" 
                    backgroundColor="#3b5998" 
                    padding={15}
                    onPress={this.handleLogin}>
                    Login with Facebook
                </Icon.Button>
            </View>
        );
    }
}

export default FacebookLogin;