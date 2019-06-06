//Step 7 Build User Welcome Screen sign in, sign up, forget password

import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'

//imported Touchable Opacity creates buttons 

// import { Button } from "native-base"

// Load the app logo
const logo = require('../images/dmxlogo1.png')


export default class WelcomeScreens extends React.Component {
    //Step 8 handleRoute method inside onPress event AKA redirect route onclick
    handleRoute = async (destination) => {
        await this.props.navigation.navigate(destination)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={logo} />
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                    <Text style={styles.textStyle}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => this.props.navigation.navigate('SignIn')}
                    >
                    <Text style={styles.textStyle}>Sign in</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDF0F2',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonStyle: {
            alignItems: 'center',
            padding: 14,
            width: '90%',
            margin: 10,
            borderRadius: 10,
            borderColor: '#CCD8DA',
            borderWidth: 2,
            backgroundColor: '#ffffff'
    
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 6,
        color: '#3DBDD1',
        fontFamily: 'Heiti SC',
        textTransform: 'uppercase'
    },
    logo: {
        height: 200,
        width: 200
    }
})