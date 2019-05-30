import React from 'react'

import { TouchableOpacity, TouchableWithoutFeedback, SafeAreaView, StatusBar, KeyboardAvoidingView, Keyboard, Alert, Modal, FlatList, Animated, StyleSheet, Text, View } from 'react-native';

import {
    Container,
    Item,
    Input,
    Icon
} from 'native-base'

// Load the app logo
const logo = require('../images/logo.png')

//Load the countryCode Flag library
import data from '../countryCode'
console.log('data', data)

//Default render of country flag
const defaultFlag = data.filter(obj => obj.name === 'United States')[0].flag

//Step 5 build out Sign Up Screen 
export default class SignUpScreen extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
        authCode: '',
        fadeIn: new Animated.Value(0), //Inital Value for opacity: 0
        fadeOut: new Animated.Value(1), //Initial value for opacity: 1
        isHidden: false,
        flag: defaultFlag,
        modalVisible: false,
    }

    onChangeText(key, value) {
        this.setState({ [key]: value })
    }

    componentDidMount() {
        this.fadeIn()
    }

    fadeIn() {
        Animated.timing(
            this.state.fadeIn,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
        this.setState({ isHidden: true })
    }

    fadeOut() {
        Animated.timing(
            this.state.fadeOut,
            {
                toValue: 0,
                duration: 700,
                userNativeDriver: true
            }
        ).start()
        this.setState({ isHidden: false })
    }

    //Functions for Phone Input
    showModal() {
        this.setState({ modalVisibile: true })
        console.log('Shown')
    }

    hideModal() {
        this.setState({ modalVisible: false })
        //Refocus on phone Input after modal is closed
        this.refs.FourthInput._root.focus()
        console.log('Hidden')
    }

    async getCountry(country) {
        //Get the country flag and phone code from users selection
        const countryData = await data
        try {
            const countryCode = await countryData.filter(
                obj => obj.name === country
            )[0].dial_code
            const countryFlag = await countryData.filter(
                obj => obj.name === country
            )[0].flag
            // Set data from user choice of country
            this.setState({ phoneNumber: countryCode, flag: countryFlag })
            await this.hideModal()
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        let { fadeOut, fadeIn, isHidden, flag } = this.state
        const countryData = data
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar />
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior='padding'
                    enabled>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.container}>
                            <View style={styles.logoContainer}>
                                {
                                    isHidden ?
                                        <Animated.Image
                                            source={logo}
                                            style={{ opacity: fadeIn, width: 110.46, height: 117 }}
                                        />
                                        :
                                        <Animated.Image
                                            source={logo}
                                            style={{ opacity: fadeOut, width: 110.46, height: 117 }}
                                        />
                                }
                            </View>
                            <Container style={styles.infoContainer}>
                                <View style={styles.container}>
                                    {/* username section  */}
                                    <Item rounded style={styles.itemStyle}>
                                        <Icon
                                            active
                                            name='person'
                                            style={styles.iconStyle}
                                        />
                                        <Input
                                            style={styles.input}
                                            placeholder='Username'
                                            placeholderTextColor='#adb4bc'
                                            keyboardType={'email-address'}
                                            returnKeyType='next'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            onSubmitEditing={(event) => { this.refs.SecondInput._root.focus() }}
                                            onChangeText={value => this.onChangeText('username', value)}
                                            onFocus={() => this.fadeOut()}
                                            onEndEditing={() => this.fadeIn()}
                                        />
                                    </Item>
                                    {/*  password section  */}
                                    <Item rounded style={styles.itemStyle}>
                                        <Icon
                                            active
                                            name='lock'
                                            style={styles.iconStyle}
                                        />
                                        <Input
                                            style={styles.input}
                                            placeholder='Password'
                                            placeholderTextColor='#adb4bc'
                                            returnKeyType='next'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            secureTextEntry={true}
                                            // ref={c => this.SecondInput = c}
                                            ref='SecondInput'
                                            onSubmitEditing={(event) => { this.refs.ThirdInput._root.focus() }}
                                            onChangeText={value => this.onChangeText('password', value)}
                                        />
                                    </Item>
                                    {/* email section */}
                                    <Item rounded style={styles.itemStyle}>
                                        <Icon
                                            active
                                            name='mail'
                                            style={styles.iconStyle}
                                        />
                                        <Input
                                            style={styles.input}
                                            placeholder='Email'
                                            placeholderTextColor='#adb4bc'
                                            keyboardType={'email-address'}
                                            returnKeyType='next'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            secureTextEntry={false}
                                            ref='ThirdInput'
                                            onSubmitEditing={(event) => { this.refs.FourthInput._root.focus() }}
                                            onChangeText={value => this.onChangeText('email', value)}
                                        />
                                    </Item>
                                    {/* phone section  */}
                                    <Item rounded style={styles.itemStyle}>
                                        <Icon
                                            active
                                            name='call'
                                            style={styles.iconStyle}
                                        />
                                        {/* country flag */}
                                        <View><Text>{flag}</Text></View>
                                        {/* open modal */}
                                        <Icon
                                            active
                                            name='md-arrow-dropdown'
                                            style={[styles.iconStyle, { marginLeft: 0 }]}
                                            onPress={() => this.showModal()}
                                        />
                                        <Input
                                            style={styles.input}
                                            placeholder='+44766554433'
                                            placeholderTextColor='#adb4bc'
                                            keyboardType={'phone-pad'}
                                            returnKeyType='done'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            secureTextEntry={false}
                                            ref='FourthInput'
                                            value={this.state.phoneNumber}
                                            onChangeText={(val) => this.onChangeText('phoneNumber', val)}
                                        />
                                        <Modal
                                            animationType="slide" //fade
                                            transparent={false}
                                            visible={this.state.modalVisible}>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flex: 7, marginTop: 80 }}>
                                                    <FlatList
                                                        data={countryData}
                                                        keyExtractor={(item, index) => index.toString()}
                                                        renderItem={
                                                            ({ item }) =>
                                                                <TouchableWithoutFeedback onPress={() => this.getCountry(item.name)}>
                                                                    <View style={styles.countryStyle}>
                                                                        <Text style={styles.textStyle}>
                                                                            {item.flag} {item.name} ({item.dial_code})
                                                                        </Text>
                                                                    </View>
                                                                </TouchableWithoutFeedback>
                                                        }
                                                    />
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => this.hideModal()}
                                                    style={styles.closeButtonStyle}>
                                                    <Text style={styles.textStyle}>
                                                        Close
                                                </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </Modal>
                                    </Item>
                                    {/* End of phone input */}
                                    <TouchableOpacity
                                        style={styles.buttonStyle}>
                                        <Text style={styles.buttonText}>
                                            Sign Up
                    </Text>
                                    </TouchableOpacity>
                                    {/* code confirmation section  */}
                                    <Item rounded style={styles.itemStyle}>
                                        <Icon
                                            active
                                            name='md-apps'
                                            style={styles.iconStyle}
                                        />
                                        <Input
                                            style={styles.input}
                                            placeholder='Confirmation code'
                                            placeholderTextColor='#adb4bc'
                                            keyboardType={'numeric'}
                                            returnKeyType='done'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            secureTextEntry={false}
                                            onChangeText={value => this.onChangeText('authCode', value)}
                                        />
                                    </Item>
                                    <TouchableOpacity
                                        style={styles.buttonStyle}>
                                        <Text style={styles.buttonText}>
                                            Confirm Sign Up
                    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.buttonStyle}>
                                        <Text style={styles.buttonText}>
                                            Resend code
                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </Container>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aa73b7',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    input: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#5a52a5',
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 370,
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#aa73b7',
    },
    itemStyle: {
        marginBottom: 10,
    },
    iconStyle: {
        color: '#5a52a5',
        fontSize: 28,
        marginLeft: 15
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#667292',
        padding: 14,
        marginBottom: 10,
        borderRadius: 24,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    },
    logoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 600,
        bottom: 270,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    textStyle: {
        padding: 5,
        fontSize: 18
    },
    countryStyle: {
        flex: 1,
        backgroundColor: '#99ff',
        borderTopColor: '#211f',
        borderTopWidth: 1,
        padding: 12,
    },
    closeButtonStyle: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#211f',
        backgroundColor: '#fff3',
    }
})