import { View, Image, Animated, Easing } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import assets from '../../../assets';
import FastImage from 'react-native-fast-image';

export default function Bell({ imgStyle }: any) {
    let spinValue = new Animated.Value(0);

    // First set up animation 
    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
        inputRange: [0, 0.25, 0.75, 1],
        outputRange: ['0deg', '60deg', "0deg", "-60deg"]
    })
    const [rotate, setRotate] = useState(false)

    return (
        <TouchableOpacity onPress={() => { setRotate(!rotate); }}
            style={{ marginHorizontal: !rotate ? 8 : 0 }}
        >
            {!rotate ? <FastImage
                source={assets.ring} resizeMode="contain"
                style={{ width: 32, height: 120, marginTop: -8 }}
            /> : <FastImage
                source={assets.ring_gif}
                style={imgStyle}
            />}
        </TouchableOpacity>
    )
}