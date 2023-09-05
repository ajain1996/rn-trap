import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import images from '../../assets/images'
import { Row, SpaceBetweenRow } from '../../components/Wrapper'
import MText from '../../components/Text'
import ImageButton from '../../components/ImageButton'
import Svg from '../../assets/svg'
import svg from '../../assets/svg'
import { Size } from '../../constants'
import { Styles } from '../../styles'
import { Button } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'

export default function ScanHistoryScreen({ navigation }: any) {
    const [scanHistory, setScanHistory] = useState([
        {
            image: images.s1,
            name: "Qura cockie",
            info: "Calcium & Candey",
            icon: svg.CheckCircleIcon,
        },
        {
            image: images.s2,
            name: "Qura cockie",
            info: "Calcium & Candey",
            icon: svg.CheckCircleIcon,
        },
        {
            image: images.s3,
            name: "Qura cockie",
            info: "Calcium & Candey",
            icon: svg.CheckCircleIcon,
        },
        {
            image: images.s4,
            name: "Qura cockie",
            info: "Calcium & Candey",
            icon: svg.CheckCircleIcon,
        },
        {
            image: images.s5,
            name: "Qura cockie",
            info: "Calcium & Candey",
            icon: svg.CheckCircleIcon,
        },
        {
            image: images.s6,
            name: "Qura cockie",
            info: "Calcium & Candey",
            icon: svg.CheckCircleIcon,
        },
    ]);

    return (
        <ImageBackground source={images.bg} style={styles.container}>
            <SpaceBetweenRow style={styles.header}>
                <MText style={styles.heading}>Trap App</MText>
                <ImageButton
                    SvgIcon={<Svg.SolarHistoryIcon />}
                    style={{ width: 58, height: 42, marginLeft: 20 }}
                />
            </SpaceBetweenRow>

            <ScrollView showsVerticalScrollIndicator={false}>
                <MText style={styles.ScanHistory}>Scan History</MText>
                <MText style={styles.scanTime}>15 August -2023</MText>

                {scanHistory?.map((item, indx) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation?.navigate("TimeOutScanScreen") }}>
                            <ImageBackground resizeMode="stretch"
                                source={images.Frame}
                                style={styles.itemContainer}
                            >
                                <SpaceBetweenRow key={indx} >
                                    <Row>
                                        <Image
                                            source={item?.image} resizeMode="contain"
                                            style={{ width: 63, height: 63, borderRadius: 10 }}
                                        />
                                        <View style={Styles.horizontalMarginM}>
                                            <MText style={styles.itemName}>{item?.name}</MText>
                                            <MText style={styles.itemInfo}>{item?.info}</MText>
                                        </View>
                                    </Row>
                                    <View style={styles.itemIcon}>
                                        <item.icon />
                                    </View>
                                </SpaceBetweenRow>
                            </ImageBackground>
                        </TouchableOpacity>
                    );
                })}
                <MText />

                <MText style={styles.scanTime}>15 August -2023</MText>

                {scanHistory?.map((item, indx) => {
                    return (
                        <ImageBackground resizeMode="stretch"
                            source={images.Frame}
                            style={styles.itemContainer}
                        >
                            <SpaceBetweenRow key={indx} >
                                <Row>
                                    <Image
                                        source={item?.image} resizeMode="contain"
                                        style={{ width: 63, height: 63, borderRadius: 10 }}
                                    />
                                    <View style={Styles.horizontalMarginM}>
                                        <MText style={styles.itemName}>{item?.name}</MText>
                                        <MText style={styles.itemInfo}>{item?.info}</MText>
                                    </View>
                                </Row>
                                <View style={styles.itemIcon}>
                                    <item.icon />
                                </View>
                            </SpaceBetweenRow>
                        </ImageBackground>
                    );
                })}
            </ScrollView>
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
    itemName: {
        fontSize: 15,
        fontWeight: "500",
        lineHeight: 22,
        color: "#F7F8F9",
        // marginBottom: 16
    },
    itemInfo: {
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 22,
        color: "#F7F8F9",
        marginTop: 2
    },
    itemIcon: {
        width: 30, height: 30,
        borderRadius: 100,
        ...Styles.centered,
        borderWidth: 0.4,
        borderColor: "#777",
    },
    heading: {
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 8
    },
    itemContainer: {
        width: Size.wWidth / 1.1,
        padding: 10,
        borderRadius: 8,
        marginTop: 12,
    },
    ScanHistory: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
        marginTop: "10%",
        alignSelf: "flex-start",
        marginLeft: 4
    },
    scanTime: {
        fontSize: 13,
        fontWeight: "500",
        color: "#fff",
        alignSelf: "flex-start",
        marginLeft: 4,
        marginVertical: 6
    }
})