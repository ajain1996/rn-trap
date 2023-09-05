import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../assets/images'
import MText from '../../components/Text'
import { Size } from '../../constants'
import { Button } from 'react-native-paper'
import { Row, SpaceBetweenRow } from '../../components/Wrapper'
import ImageButton from '../../components/ImageButton'
import Svg from '../../assets/svg'
import { Styles } from '../../styles'

export default function AuthenticScanScreen({ navigation }: any) {
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
            <ImageBackground
                source={images.RedFrame2} resizeMode="stretch"
                style={{ width: Size.wWidth / 1.2, height: Size.wHeight / 1.44 }}
            >
                <Image
                    source={images.authentic} resizeMode="contain"
                    style={styles.authentic}
                />

                <MText style={styles.authenticText}>AUTHENTIC</MText>
                <MText style={styles.authenticInfo}>Your Product is verified as authentic</MText>

                <MText />
                <MText style={styles.authenticInfo}>Product Name: Backpackboyz D9</MText>
                <MText style={styles.authenticInfo}>Time: 00:00 am</MText>
                <MText style={styles.authenticInfo}>Date: dd/mm/yy</MText>

                <Button labelStyle={styles.TaptoScan} onPress={() => {
                    navigation?.navigate("ScanHistoryScreen")
                }}>
                    SACNNING.....
                </Button>

                <TouchableOpacity style={Styles.aliSelfCenter} onPress={() => {
                    navigation?.navigate("FailedScanScreen")
                }}>
                    <ImageBackground
                        source={images.backBtnBg} resizeMode='contain'
                        style={{ width: Size.wWidth / 2, height: 40, ...Styles.centered }}
                    >
                        <Row>
                            <Svg.BackIcon />
                            <MText style={styles.backText}>Back To Home</MText>
                        </Row>
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
        color: "#fff",
        marginTop: 8,
        textAlign: "center"
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
        alignSelf: "center"
    },
    backText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff",
        marginLeft: 8
    }
})