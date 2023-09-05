import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import images from '../../assets/images'
import MText from '../../components/Text'
import { Size } from '../../constants'
import { Button } from 'react-native-paper'
import { Row, SpaceBetweenRow } from '../../components/Wrapper'
import ImageButton from '../../components/ImageButton'
import Svg from '../../assets/svg'
import { Styles } from '../../styles'
import InputBox from '../../components/InputBox'

export default function SubscribeScreen({ navigation }: any) {
    const [inputVal, setInputVal] = useState("");

    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <SpaceBetweenRow style={styles.header}>
                <MText style={styles.heading}>Trap App</MText>
                <ImageButton
                    SvgIcon={<Svg.SolarHistoryIcon />}
                    style={{ width: 58, height: 42, marginLeft: 20 }}
                />
            </SpaceBetweenRow>
            <MText /><MText />
            <Button labelStyle={styles.VerifyProduct}>Subscribe to Backpackboyz</Button>
            <MText />
            <ImageBackground borderRadius={12}
                source={images.RedFrame2} resizeMode="stretch"
                style={{ width: Size.wWidth / 1.2, height: 200 }}
            >
                <View>
                    <MText style={styles.authenticInfo}>Enter Email</MText>
                    <InputBox
                        placeholder='Subscribe'
                        placeholderTextColor='#fff'
                        inputImage={images.backBtnBg}
                        inputContainer={styles.inputContainer}
                        inputStyle={{ height: 44, color: "#fff", fontSize: 12 }}
                        onChangeText={(val) => { setInputVal(val) }}
                    />
                </View>
                <MText />

                <TouchableOpacity style={Styles.aliSelfCenter} onPress={() => {
                    navigation?.navigate("SubscribeScreen")
                }}>
                    <ImageBackground
                        source={images.backBtnBg} resizeMode='contain'
                        style={{ width: Size.wWidth / 2, height: 40, ...Styles.centered }}
                    >
                        <MText style={styles.backText}>Subscribe</MText>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    header: {
        width: Size.wWidth,
        height: 56,
        paddingHorizontal: 20,
        marginTop: 10
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
        marginBottom: 8
    },
    authentic: {
        width: Size.wWidth / 1.3,
        height: Size.wWidth / 1.3,
        alignSelf: "center",
        marginLeft: 32,
        marginTop: 16,
        marginBottom: -20
    },
    authenticText: {
        fontSize: 22,
        fontWeight: "400",
        color: "#fff",
        textAlign: "center"
    },
    authenticInfo: {
        fontSize: 12,
        fontWeight: "500",
        color: "#ccc",
        marginTop: 32,
        marginLeft: 24,
        marginBottom: -4
    },
    VerifyProduct: {
        fontSize: 17,
        fontWeight: "700",
        color: "#fff",
        marginTop: 40,
        // marginBottom: -20
    },
    TaptoScan: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
        marginTop: 10,
        alignSelf: "center",
        marginBottom: 26
    },
    backText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff",
        marginLeft: 8
    },
    inputContainer: {
        width: Size.wWidth / 1.4,
        alignSelf: "center",
        height: 44,
    },
})