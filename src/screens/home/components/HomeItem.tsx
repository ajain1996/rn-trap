import React, { useEffect, useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
} from "react-native";
import Swiper from "react-native-swiper";
import { Size } from "../../../constants";
import assets from "../../../assets";
import FastImage from "react-native-fast-image";
import SpotifyMusic from "./SpotifyMusic";

interface HomeItemProps {
    item: any;
    isFlowerShown: boolean;
    setDietyId: Function;
}

const HomeItem = ({ item, isFlowerShown, setDietyId }: HomeItemProps) => {
    const [diety, setDiety] = useState([])
    console.log("\n\n item?._id", item?._id)

    useEffect(() => {
        setDietyId(item?._id)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://bharat-app-gi5w5.ondigitalocean.app/api/deity/getdeity/" + item?._id, requestOptions)
            .then(response => response.json())
            .then(result => {
                setDiety(result?.data)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <View style={styles.container}>
            <Swiper horizontal={true} activeDot={<View style={styles.dotStyle} />} loop={true}>
                {[1, 2, 3, 4, 5].map((it2: any, indx) => {
                    return (
                        <View style={{ alignItems: "center", justifyContent: "center" }} key={indx}>
                            <ImageBackground
                                source={{ uri: item?.image }}
                                resizeMode="stretch"
                                style={{ width: Size.wWidth, height: Size.wHeight, alignSelf: "center", marginTop: 0 }}
                            />
                        </View>
                    );
                })}
            </Swiper>

            {isFlowerShown && <FastImage resizeMode="stretch"
                source={assets.flower_gif} style={styles.flower_gif}
            />}
        </View>
    );
};

export default React.memo(HomeItem);

const styles = StyleSheet.create({
    dotStyle: {
        width: 0, height: 0
    },
    container: {
        width: Size.wWidth,
        height: Size.wHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    flower_gif: {
        width: Size.wWidth / 1.18,
        height: Size.wHeight,
        position: "absolute",
        top: Size.wWidth / 4,
    },
});


{/* <Animated.View style={{
    transform: [{ rotate: rotate ? spin : "0deg" }],
    width: rotate ? 300 : 130,
    height: rotate ? 300 : 110,
    position: rotate ? "absolute" : "relative"
}}>
    <TouchableOpacity onPress={() => { setRotate(!rotate) }}>
        <Image
            style={{ width: 130, height: 110, marginTop: 8, transform: [{ rotate: "0deg" }], }}
            source={assets.thaali}
        />
    </TouchableOpacity>
</Animated.View> */}
{/* <Image
    source={assets.thaali}
    resizeMode="contain"
    style={{ width: 130, height: 110, marginTop: 8 }}
/> */}