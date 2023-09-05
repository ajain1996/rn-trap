import { View, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import MText from '../../components/Text'
import InputBox from '../../components/InputBox'
import { Size } from '../../constants';
import Button from '../../components/Button';
import { ImageBackground } from 'react-native';
import Row from '../../components/Row';
import { useDispatch } from 'react-redux';
import CustomLoader, { CustomPanel } from '../../components/CustomLoader';
import images from '../../assets/images';
import ImageButton from '../../components/ImageButton';
import Svg from '../../assets/svg';

import { handleLogin } from './helper/helper';

export default function LoginScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    function handleSubmit() {
        handleLogin(email, password, dispatch, setLoading, navigation)
    }

    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <StatusBar backgroundColor='#000' barStyle="light-content" />
            <MText style={styles.welcometo}>Welcome to</MText>
            <View style={styles.logo} />
            <MText style={styles.heading}>Trap App</MText>
            <MText style={styles.label}>Touch, Connect, Discover with Trap App</MText>

            <InputBox
                value={email}
                keyboardType="default"
                onChangeText={(val) => {
                    setEmail(val)
                }}
                autoCapitalize="none"
                inputContainer={styles.inputContainer}
                inputStyle={{ color: "#fff" }}
                placeholder='Enter username or email address'
                placeholderTextColor="#8D8D8D"
            />

            <View>
                <InputBox
                    value={password}
                    keyboardType="default"
                    onChangeText={(val) => {
                        setPassword(val)
                    }}
                    autoCapitalize="none"
                    secureTextEntry
                    inputContainer={styles.inputContainer}
                    inputStyle={{ color: "#fff" }}
                    placeholder='Enter password'
                    placeholderTextColor="#8D8D8D"
                />
                <View style={{ position: "absolute", right: 16, top: 25 }}>
                    <Svg.LockIcon />
                </View>
            </View>

            <ImageButton
                title="Login"
                textStyle={styles.buttonText}
                style={styles.button}
                onPress={handleSubmit}
            />

            <Row style={styles.alreadyAUserLayout}>
                <MText style={styles.alreadyAUser}>Do not have an account? </MText>
                <Button
                    title="Sign Up"
                    textStyle={styles.alreadyLogin}
                    background='transparent'
                    style={{ height: 20 }}
                    onPress={() => { navigation.navigate("RegisterScreen") }}
                />
            </Row>
            <CustomPanel loading={loading} />
            <CustomLoader loading={loading} />
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
        marginBottom: "24%"
    },
    inputContainer: {
        width: Size.wWidth / 1.1,
        fontSize: 14,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff"
    },
    button: {
        width: Size.wWidth / 1.1,
        marginTop: "8%",
    },
    buttons: {
        height: 50,
        width: Size.wWidth,
        position: "absolute",
        bottom: -20
    },
    alreadyAUser: {
        fontSize: 14,
        fontWeight: "300",
        color: "#ccc"
    },
    alreadyLogin: {
        fontSize: 14,
        fontWeight: "500",
        color: "#fff",
        marginLeft: 4,
    },
    alreadyAUserLayout: {
        paddingLeft: 4,
        marginTop: 20,
        justifyContent: "flex-start",
        width: Size.wWidth / 1.1
    }
})