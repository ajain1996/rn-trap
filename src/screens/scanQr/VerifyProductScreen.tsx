import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../../assets/images'
import MText from '../../components/Text'
import { Size } from '../../constants'
import { Button } from 'react-native-paper'
import { SpaceBetweenRow } from '../../components/Wrapper'
import Auth from '../../constants/Auth'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../redux/reducer/user'


export default function VerifyProductScreen({ navigation }: any) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        Auth.logout().then(() => {
            dispatch(removeUser([]));
        });
    };

    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <SpaceBetweenRow style={styles.header}>
                <MText style={styles.heading}>Trap App</MText>
                <TouchableOpacity onPress={handleLogout}>
                    <Image
                        source={images.logout}
                        style={{ width: 28, height: 28 }}
                    />
                </TouchableOpacity>
            </SpaceBetweenRow>
            <View style={styles.qrBorder}>
                <Button labelStyle={styles.VerifyProduct}>Verify Product</Button>
                <Image
                    source={images.verify_product} resizeMode="contain"
                    style={{ width: Size.wWidth / 1.1, height: Size.wWidth / 1.15 }}
                />
            </View>

            <Button labelStyle={styles.TaptoScan} onPress={() => {
                navigation?.navigate("NFCScannerScreen")
            }}>
                Tap to Scan
            </Button>
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
    qrBorder: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        alignItems: "center",
        // paddingBottom: 16,
        marginVertical: 20
    },
    VerifyProduct: {
        fontSize: 17,
        fontWeight: "700",
        color: "#fff",
        marginTop: 20,
        // marginBottom: -20
    },
    TaptoScan: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
        marginTop: 10,
        alignSelf: "center"
    }
})