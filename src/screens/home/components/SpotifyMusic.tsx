import { View, Text, ScrollView, Image, TouchableHighlight, ActivityIndicator } from 'react-native'
import React, { useRef, useState } from 'react'
import SimpleModal from '../../../components/SimpleModal'
import { TouchableOpacity } from 'react-native'
import Row from '../../../components/Row'
import assets from '../../../assets'
import MText from '../../../components/Text'
import { StyleSheet } from 'react-native'
import { Colors, Styles } from '../../../styles'
import { SpaceBetweenRow } from '../../../components/Wrapper'
import PlayButton from '../../reels/components/PlayButton'
import PauseButton from '../../reels/components/PauseButton'
import { Size } from '../../../constants'
import WebView from 'react-native-webview'

interface SpotifyMusicProps {
    musicModal?: boolean;
    setMusicModal: Function;
    allSongs?: any;
    loading?: boolean;
    callback?: (item: any, tab: string) => void;
}

export default function SpotifyMusic({ musicModal, setMusicModal, allSongs, loading, callback }: SpotifyMusicProps) {
    const [cIndex, setCIndex] = useState(-1)
    const [paused, setPaused] = useState(false)
    const [tab, setTab] = useState("Bhajan")
    const [modalHeight, setModalHeight] = useState(450)

    return (
        <SimpleModal
            visible={musicModal}
            setVisible={setMusicModal}
            dismiss
            showIndicator
            onIndicatorPress={() => { setModalHeight(modalHeight === 50 ? 450 : 50) }}
            // onSwipeCancel={() => { setModalHeight(50) }}
            closeOnSubmit
            // swipeDirection="down"
            style={{ height: modalHeight, paddingHorizontal: 0 }}
            children={
                loading
                    ? <View>
                        <ActivityIndicator />
                    </View>
                    : <>
                        <WebView
                            style={{ flex: 1 }}
                            source={{ uri: 'https://open.spotify.com/track/10Hks1iBOnKIIhouOI4rrk' }}
                        />
                    </>
            }
        />
    )
}

const styles = StyleSheet.create({
    SongTitle: {
        fontSize: 12,
        fontWeight: "700",
        color: "#000",
    },
    SongSubTitle: {
        fontSize: 10,
        fontWeight: "400",
        color: "#000",
    },
    modalBadge: {
        width: 80, height: 4, backgroundColor: "#dcdcdc", alignSelf: "center",
        marginTop: 6,
        marginBottom: 12
    },
});