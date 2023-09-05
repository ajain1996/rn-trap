import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType, ViewStyle, ImageStyle } from 'react-native'
import React from 'react'

interface HomeIconProps {
    icon: ImageSourcePropType;
    text: string;
    iconStyle?: ImageStyle;
    onPress?: () => void;
    isBg?: boolean
}

export default function HomeIcon({ icon, text, iconStyle, isBg, onPress }: HomeIconProps) {
    if (!isBg) {
        return (
            <View style={{ marginVertical: 10 }}>
                <TouchableOpacity style={styles.iconBtn2} onPress={onPress}>
                    <Image
                        source={icon} resizeMode="contain"
                        style={[styles.icon, iconStyle]}
                    />
                </TouchableOpacity>
                <Text style={styles.iconText2}>{text}</Text>
            </View>
        )
    } else {
        return (
            <View style={{ marginVertical: 10 }}>
                <TouchableOpacity style={styles.iconBtn} onPress={onPress}>
                    <Image
                        source={icon} resizeMode="contain"
                        style={[styles.icon, iconStyle]}
                    />
                </TouchableOpacity>
                <Text style={styles.iconText}>{text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 20
    },
    iconBtn: {
        width: 44, height: 44,
        backgroundColor: "#00000090",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.8,
        borderColor: "#fff"
    },
    iconBtn2: {
        width: 44, height: 44,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 26, height: 26
    },
    iconText: {
        fontSize: 12,
        color: "#fff",
        marginTop: 4,
        textAlign: "center"
    },
    iconText2: {
        fontSize: 12,
        color: "#fff",
        textAlign: "center"
    },
    icon2: {
        width: 20, height: 20
    },
    icon3: {
        width: 20, height: 20,
        tintColor: "#fff"
    },
    music_bg: {
        width: 50, height: 50,
        borderRadius: 100,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    music: {
        width: 20, height: 20,
        position: "absolute",
    }
});