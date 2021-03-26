import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Link } from "react-router-native";

function Login(props) {
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
                </View>
                    <View style={styles.forgot}>
                        <Link to={'#'}>
                            <Text>Forgot your password ?</Text>
                        </Link>
                    </View>     
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
    forgot: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 15,

    }
})

export default Login;