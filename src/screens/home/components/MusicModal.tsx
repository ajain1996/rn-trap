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
import Button from '../../../components/Button'

interface MusicModalProps {
    musicModal: boolean;
    setMusicModal: Function;
    allSongs: any;
    loading: boolean;
    callback: (item: any, tab: string) => void;
}

export default function MusicModal({ musicModal, setMusicModal, allSongs, loading, callback }: MusicModalProps) {
    const [cIndex, setCIndex] = useState(-1)
    const [paused, setPaused] = useState(false)
    const [tab, setTab] = useState("Bhajan")

    return (
        <SimpleModal
            visible={musicModal}
            setVisible={setMusicModal}
            dismiss
            closeOnSubmit
            onIndicatorPress={() => { }}
            style={{ height: 420, paddingHorizontal: 16 }}
            children={
                loading
                    ? <View>
                        <ActivityIndicator />
                    </View>
                    : <>
                        <TouchableOpacity style={styles.modalBadge} onPress={() => { setMusicModal(false) }} />
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {/* <Row> */}
                            {
                                ["Bhajan", "Satsang", "Aarti", "Chalisa", "Famous"].map((item, indx) => {
                                    return (
                                        <Button
                                            key={indx}
                                            title={item}
                                            background={item === tab ? Colors.primary : "#eee"}
                                            style={{ paddingHorizontal: 14, height: 35, borderRadius: 6, marginRight: 8 }}
                                            textStyle={{ fontSize: 13, color: item === tab ? "#fff" : "#000" }}
                                            onPress={() => { setTab(item) }}
                                        />
                                    );
                                })
                            }
                            {/* </Row> */}
                        </ScrollView>
                        <ScrollView>
                            <View>
                                {allSongs?.map((item: any, indx: number) => {
                                    return (
                                        <View key={indx}>
                                            <TouchableHighlight underlayColor={"#eee"}
                                                style={{ width: Size.wWidth / 1.18, backgroundColor: cIndex === indx ? "#eee" : "#fff", paddingRight: 6 }}
                                                onPress={() => { callback(item, tab); setCIndex(indx); setPaused(!paused) }}
                                            >
                                                <SpaceBetweenRow>
                                                    <Row style={{ paddingVertical: 6 }}>
                                                        <Image
                                                            source={assets.home_item_img}
                                                            resizeMode="contain"
                                                            style={{ width: 36, height: 42, borderRadius: 8, borderWidth: 5, borderColor: "#eee" }}
                                                        />
                                                        <View style={Styles.horizontalMargin}>
                                                            <MText style={styles.SongTitle}>{item?.name}</MText>
                                                            <ScrollView horizontal>
                                                                <MText style={styles.SongSubTitle}>
                                                                    {item?.duration.slice(0, item?.duration?.length - 1)}
                                                                </MText>
                                                                {/* <Row>
                                                            {item?.artist?.map((res: any, indx2: number) => {
                                                                return (
                                                                    <MText style={styles.SongSubTitle} key={indx2}>{'   '} -- {res}</MText>
                                                                )
                                                            })}
                                                        </Row> */}
                                                            </ScrollView>
                                                        </View>
                                                    </Row>

                                                    {paused
                                                        ? <PauseButton style={{ width: 26, height: 26 }} />
                                                        : <PlayButton style={{ width: 26, height: 26 }} />}
                                                </SpaceBetweenRow>
                                            </TouchableHighlight>
                                        </View>
                                    )
                                })}
                            </View>
                        </ScrollView>
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