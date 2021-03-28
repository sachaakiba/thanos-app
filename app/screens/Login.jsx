import React from 'react';
import {Image, StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function Login(props) {
    title = 'Login'
    titleBottom = "Register"

    onPress = () => {
        Alert.alert('Login Button')
    }
    return (
        <View style={styles.background}>
            <Image
                source={require('../../Assets/top-right.png')}
            />
            <View style={styles.centerScreen}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        Welcome !
            </Text>
                    <Text style={styles.subtitle}>
                        Login with your username and password.
            </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.row}>
                        <TextInput
                            placeholder="Email"
                            label="email"
                            style={styles.input}
                        />
                        <Image
                            source={require('../../Assets/mail.png')}
                            />
                    </View>
                    <View style={styles.row}>
                        <TextInput
                            placeholder="Password"
                            label="password"
                            style={styles.input}
                        />
                        <Image
                            source={require('../../Assets/eye.png')}
                            />
                    </View>
                          <TouchableOpacity onPress={onPress} style={styles.button}>
                            <Text style={styles.appButtonText}>{title}</Text>
                        </TouchableOpacity>                    
                </View>
                <View style={styles.bottomView}>
                    <Text>
                        Don't have an account ?
                    </Text>
                    <TouchableOpacity onPress={() => Alert.alert("hello")}>
                            <Text style={styles.bottomButton}>{titleBottom}</Text>
                    </TouchableOpacity>  
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    centerScreen: {
        width: 326,
        height: 384,
        display: 'flex',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100

    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 326,
        height: 55,
        marginTop: 15,
        borderColor: '#0389A4',
        borderWidth: 0.5,
        padding: 12
    },
    title: {
        color: "#0389A4",
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: "Montserrat",
        paddingBottom: 10,
    },
    subtitle: {
        color: "#000000",
        fontSize: 14,
        fontFamily: "Montserrat-Regular"
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 60,
    },
    input: {
        fontFamily: "Montserrat-Regular"
    },
    button: {
        width: 229,
        height: 59,
        borderRadius: 30,
        marginTop: 50,
        backgroundColor: "#0389A4",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    },
    appButtonText: {
        color: '#FFFFFF',
        //fontFamily: "Montserrat-Medium",
        fontSize: 22,

    },
    bottomView: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 200
    },
    bottomButton: {
        fontWeight: "bold",
        marginLeft: 10
    }
})

export default Login;