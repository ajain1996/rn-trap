import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import MText from '../../components/Text'
import images from '../../assets/images'
import { useSelector } from 'react-redux';

export default function SplashScreen({ navigation }: any) {
    const { login } = useSelector((state: any) => state.User);

    setTimeout(() => {
        if (!login) {
            navigation?.replace("IntroScreen")
        } else {
            navigation?.replace("AppStack")
        }
    }, 900);

    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <View style={styles.logo} />
            <MText style={styles.heading}>Trap App</MText>
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
    logo: {
        height: 60,
        width: 60,
        borderRadius: 20,
        backgroundColor: "#f7f8f9",
        marginBottom: 16
    },
    heading: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        marginBottom: 8
    },
})