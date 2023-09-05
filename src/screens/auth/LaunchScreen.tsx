import { View, StyleSheet, StatusBar, ImageBackground } from 'react-native'
import React from 'react'
import MText from '../../components/Text'
import { Size } from '../../constants';
import { Colors } from '../../styles';
import images from '../../assets/images';
import ImageButton from '../../components/ImageButton';

export default function LaunchScreen({ navigation }: any) {
    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <StatusBar backgroundColor='#000' barStyle="light-content" />
            <MText style={styles.welcometo}>Welcome to</MText>
            <View style={styles.logo} />
            <MText style={styles.heading}>Trap App</MText>
            <MText style={styles.label}>Touch, Connect, Discover with Trap App</MText>

            <ImageButton
                title="Sign Up"
                textStyle={styles.buttonText}
                style={styles.button}
                onPress={() => { navigation?.navigate("LoginScreen") }}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    welcometo: {
        fontSize: 17,
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        marginBottom: 16
    },
    logo: {
        height: 60,
        width: 60,
        borderRadius: 20,
        backgroundColor: "#f7f8f9",
        marginBottom: 16
    },
    layout: {
        elevation: 9,
        shadowColor: "#999",
        backgroundColor: "#fff",
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        marginBottom: 8
    },
    label: {
        fontSize: 12,
        fontWeight: "600",
        color: "#fff",
    },
    inputStyle: {
        width: Size.wWidth / 1.2,
        backgroundColor: "#F6F6F6",
        borderWidth: 0,
        fontWeight: "500",
        fontSize: 14,
        marginTop: -5
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff"
    },
    button: {
        width: Size.wWidth / 1.1,
        marginTop: "26%",
    },
    buttons: {
        height: 50,
        width: Size.wWidth,
        position: "absolute",
        bottom: -20
    },
    alreadyAUser: {
        fontSize: 14,
        fontWeight: "500",
        color: "#000"
    },
    alreadyLogin: {
        fontSize: 14,
        fontWeight: "500",
        color: Colors.primary
    }
})