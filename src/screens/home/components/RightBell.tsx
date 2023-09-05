import React, { useEffect, useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import assets from '../../../assets';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';

export default function RightBell() {
    const videoRef = useRef(null);
    const [rotate, setRotate] = useState(false)
    const [first, setFirst] = useState(false);
    const [playSound, setPlaySound] = useState(false);

    const handlePress = async () => {
        setPlaySound(true);
        setFirst(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setPlaySound(false);
        }, 0);
    }, [playSound])

    return (
        <>
            {first && <Video
                source={assets.BellSound}
                style={{}}
                paused={playSound}
                shouldPlay={videoRef.current}
                pauseOnPress={playSound}
                ref={videoRef}
            />}
            <TouchableOpacity onPress={() => { setRotate(!rotate); handlePress() }}
                activeOpacity={1}
            >
                {!rotate ? <FastImage
                    source={assets.ring} resizeMode="contain"
                    style={{ width: 44, height: 130, marginTop: -2, marginRight: 8 }}
                /> : <FastImage
                    source={assets.ring_gif}
                    style={{ width: 82, height: 110, marginRight: -14, marginTop: 8 }}
                />}
            </TouchableOpacity>
        </>
    )
}