import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert, Dimensions, Image, ImageBackground, Share, StatusBar, StyleSheet, TouchableHighlight, TouchableOpacity, View } from "react-native";
import HomeItem from "./components/HomeItem";
import Swiper from 'react-native-swiper';
import assets from "../../assets";
import { HomeContext } from "../../API/Context";
import { Size } from "../../constants";
import { SpaceBetweenRow } from "../../components/Wrapper";
import LeftBell from "./components/LeftBell";
import RightBell from "./components/RightBell";
import Video from 'react-native-video';
import sound from 'react-native-sound';
import MusicModal from "./components/MusicModal";
import SpotifyMusic from "./components/SpotifyMusic";
import RBSheet from "react-native-raw-bottom-sheet";
import WebView from 'react-native-webview'
import Tooltip from 'react-native-walkthrough-tooltip';
import MText from "../../components/Text";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

sound.setCategory('Playback');

interface HomeScreenProps {
    navigation?: any;
    homeData?: Array<object> | undefined;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const { homeData } = useContext(HomeContext);
    const videoRef = useRef(null);
    const sheetRef = useRef(null);

    const [playSound, setPlaySound] = useState(false);
    const [first, setFirst] = useState(false);
    const [first2, setFirst2] = useState("");
    const [allSongs, setAllSongs] = useState([])
    const [isFlowerShown, setIsFlowerShown] = useState(false);
    const [musicModal, setMusicModal] = useState(false);
    const [dietyId, setDietyId] = useState("")

    const [musicLoading, setMusicLoading] = useState(false)

    const handlePress = async () => {
        setPlaySound(true);
        setFirst(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setPlaySound(false);
        }, 0);
    }, [playSound])

    const [tab, setTab] = useState("Bhajan")

    useEffect(() => {
        setMusicLoading(true);
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://bharat-app-gi5w5.ondigitalocean.app/api/songs/getallsong?deityId=" + dietyId + "&songType=" + tab, requestOptions)
            .then(response => response.json())
            .then(result => {
                setMusicLoading(false)
                setAllSongs(result?.data)
            })
            .catch(error => console.log('error', error));
    }, [dietyId, tab])

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: 'Share in Whatsapp, Instagram',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) { } else { }
            } else if (result.action === Share.dismissedAction) { }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    // const [tooltip1, setTooltip1] = useState(true)
    // const [tooltip2, setTooltip2] = useState(false)
    // const [tooltip3, setTooltip3] = useState(false)
    // const [tooltip4, setTooltip4] = useState(false)
    // const [tooltip5, setTooltip5] = useState(false)

    return (
        <ImageBackground source={assets.home_bg} style={styles.container} resizeMode="stretch">
            <StatusBar hidden />
            <Swiper horizontal={false} activeDot={<View style={styles.dotStyle} />}>
                {homeData?.map((item: any, index: number, array: any) => {
                    return (
                        <>
                            <HomeItem
                                item={item}
                                key={index}
                                isFlowerShown={isFlowerShown}
                                setDietyId={setDietyId}
                            />
                        </>
                    );
                })}
            </Swiper>
            {/* <View style={styles.itemContainer}>
            </View> */}

            <Image resizeMode="stretch"
                source={assets.home_bg} style={styles.container}
            />

            <SpaceBetweenRow style={styles.tabsContainer}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.bottomTab}
                    onPress={() => {
                        console.log("\n\n Clickeddddddd")
                        setIsFlowerShown(!isFlowerShown)
                    }}
                />
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.bottomTab}
                    onPress={async () => {
                        handlePress()
                    }}
                />
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.bottomTab}
                    onPress={onShare}
                />
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.bottomTab}
                    onPress={() => {
                        setMusicModal(true)
                        // sheetRef.current.open()
                    }}
                />
            </SpaceBetweenRow>

            <SpaceBetweenRow style={styles.bellContainer}>
                <LeftBell />
                <RightBell />
            </SpaceBetweenRow>

            {first && <Video
                source={assets.ShankhSound}
                style={{}}
                paused={playSound}
                shouldPlay={videoRef.current}
                pauseOnPress={playSound}
                ref={videoRef}
            />}

            <MusicModal
                musicModal={musicModal}
                setMusicModal={setMusicModal}
                allSongs={allSongs}
                loading={musicLoading}
                callback={(item: any, ctab: string) => {
                    setTab(ctab)
                    console.log("\n\n audioUrl: ", item?.audioUrl)
                    if (first2?.length !== 0 && first2 !== undefined && first2 !== null) {
                        setFirst2("");
                        return;
                    }
                    setFirst2(item?.audioUrl);
                }}
            />

            {/* <CustomToolTip tooltip={tooltip4} right={30} bottom={Size.wHeight / 2.32} width={Size.wWidth / 4}
                text="Tap here to play bells" showArrow={12} last={true}
                callback={(val) => {
                    if (val === "next") {
                        setTooltip4(false)
                        setTooltip5(true)
                    }
                }}
            />

            <CustomToolTip tooltip={tooltip1} left={36} bottom={36} width={Size.wWidth / 5}
                text="Tap here to shower flowers" showArrow={12}
                callback={(val) => {
                    if (val === "next") {
                        setTooltip1(false)
                        setTooltip2(true)
                    }
                }}
            />

            <CustomToolTip tooltip={tooltip2} left={36} bottom={36} width={Size.wWidth / 1.7}
                text="Tap here to play shankh sound" showArrow={12}
                callback={(val) => {
                    if (val === "next") {
                        setTooltip2(false)
                        setTooltip3(true)
                    }
                }}
            />

            <CustomToolTip tooltip={tooltip3} right={36} bottom={36} width={Size.wWidth / 4}
                text="Tap here to play music" showArrow={12}
                callback={(val) => {
                    if (val === "next") {
                        setTooltip3(false)
                        setTooltip4(true)
                    }
                }}
            /> */}

            {/* <RBSheet
                ref={sheetRef}
                height={420}
                openDuration={500}
                // dragFromTopOnly
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
                minClosingHeight={70}
            >
                <WebView
                    // style={{ flex: 1 }}
                    source={{ uri: 'https://open.spotify.com/track/10Hks1iBOnKIIhouOI4rrk' }}
                />
            </RBSheet> */}

            {/* <BottomSheet
                ref={sheetRef}
                snapPoints={[450, 300, 0]}
                borderRadius={10}
                renderContent={() => {
                    return (
                        <WebView
                            style={{ flex: 1 }}
                            source={{ uri: 'https://open.spotify.com/track/10Hks1iBOnKIIhouOI4rrk' }}
                        />
                    )
                }}
            /> */}


            {/* <SpotifyMusic
                musicModal={spotifyMusicModal}
                setMusicModal={setSpotifyMusicModal}
                allSongs={allSongs}
                loading={musicLoading}
                callback={(item: any, ctab: string) => {
                    setTab(ctab)
                    console.log("\n\n audioUrl: ", item?.audioUrl)
                    if (first2?.length !== 0 && first2 !== undefined && first2 !== null) {
                        setFirst2("");
                        return;
                    }
                    setFirst2(item?.audioUrl);
                }}
            /> */}

            {first2?.length !== 0 && first2 !== undefined && first2 !== null && <Video
                source={{ uri: first2 }}
                style={{}}
                paused={playSound}
                shouldPlay={videoRef.current}
                pauseOnPress={playSound}
                ref={videoRef}
            />}
        </ImageBackground>
    );
};

interface CustomToolTipProps {
    tooltip: boolean;
    callback: (val: string) => void;
    text: string;
    top?: number;
    last?: number;
    bottom?: number;
    left?: number;
    right?: number;
    showArrow: number;
    width?: number;
}

function CustomToolTip({ tooltip, callback, text, top, right, last, left, bottom, showArrow, width }: CustomToolTipProps) {
    return (
        <View style={{ marginBottom: bottom, position: "absolute", top: top, bottom: bottom, right: right, left: left, width: width, backgroundColor: "#eee", height: 0 }}>
            <Tooltip
                isVisible={tooltip}
                // placement={top ? "top" : `bottom`}
                arrowSize={{ width: showArrow, height: showArrow }}
                content={
                    <View style={{ width: 250 }}>
                        <MText>{text}</MText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {last ? <></> : <TouchableHighlight underlayColor={'#dcdcdc'}
                                onPress={() => { callback("skip") }} style={{
                                    marginTop: 16, paddingHorizontal: 6, paddingVertical: 3
                                }}
                            >
                                <MText style={{ fontSize: 12 }}>Skip</MText>
                            </TouchableHighlight>}

                            <TouchableHighlight underlayColor={'#dcdcdc'}
                                onPress={() => { callback("next") }} style={{
                                    marginTop: 16, paddingHorizontal: 6, paddingVertical: 3
                                }}
                            >
                                {last ? <MText style={{ fontSize: 12 }}>Close</MText> : <MText style={{ fontSize: 12 }}>Next</MText>}
                            </TouchableHighlight>
                        </View>
                    </View>
                }
                onClose={() => { }}
            >
                <MText style={{ color: 'transparent' }}>.</MText>
            </Tooltip>
        </View>
    );
};


export default React.memo(HomeScreen);

const styles = StyleSheet.create({
    // container2: {
    //     position: "absolute",
    //     top: 0
    // },
    // arch: {
    //     width: windowWidth,
    //     height: 230,
    //     position: "absolute",
    //     top: 0
    // },
    // leftpillar: {
    //     width: 40,
    //     height: Size.wHeight / 1.6,
    //     position: "absolute",
    //     bottom: 68
    // },
    // rightpillar: {
    //     width: 40,
    //     height: Size.wHeight / 1.6,
    //     position: "absolute",
    //     bottom: 68,
    //     right: 0
    // },
    carousel: {
        justifyContent: "center",
        alignItems: "center",
    },
    dotStyle: {
        width: 0, height: 0
    },
    container: {
        height: windowHeight - 0,
        width: windowWidth,
        position: "absolute",
        top: 0
    },
    itemContainer: {
        position: "absolute",
        bottom: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        width: Size.wWidth,
        padding: 20,
    },
    bellContainer: {
        width: "100%", paddingHorizontal: 50, position: "absolute", top: Size.w100
    },

    tabsContainer: {
        width: Size.wWidth - 100,
        height: 40,
        marginHorizontal: 50,
        paddingBottom: 30,
        position: "absolute",
        bottom: 0,
        zIndex: 1
    },
    bottomTab: {
        width: Size.wWidth / 5.5,
        height: 68,
        marginLeft: -6,
        marginTop: -15
    },
});