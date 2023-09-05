import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import MText from '../../components/Text'
import images from '../../assets/images'
import Svg from '../../assets/svg';
import { useSelector } from 'react-redux';

export default function IntroScreen({ navigation }: any) {
    const { login } = useSelector((state: any) => state.User);

    setTimeout(() => {
        if (!login) {
            navigation?.replace("Auth")
        } else {
            navigation?.replace("AppStack")
        }
    }, 900);

    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <View style={styles.logo} />
            <MText style={styles.heading}>Trap App</MText>

            <MText style={styles.Subheading}>Native NFC Scanner</MText>

            <Svg.StartIcon />

            <MText style={styles.Copyright}>Copyright@2023Trap</MText>
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
        fontSize: 36,
        fontWeight: "700",
        color: "#fff",
        textAlign: "center",
        marginBottom: 8
    },
    Subheading: {
        fontSize: 48,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        marginBottom: "16%",
        marginTop: "6%"
    },
    Copyright: {
        fontSize: 16,
        fontWeight: "400",
        color: "#ccc",
        textAlign: "center",
        position: "absolute",
        bottom: 20,
    }
})