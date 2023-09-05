import React from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native'
import { Overlay } from 'react-native-elements';
import { Colors } from '../components/Colors';

import { windowWidth } from '../utils/utils';

export default function CustomOverlay({ text, visible, callback }) {
    return (
        <View style={[styles.overlay, {  }]}>
            <Overlay isVisible={visible} onBackdropPress={callback} infoStyle={{
                marginTop: 90,
            }}>
                <Text style={styles.welcome}> {text} </Text>
            </Overlay>
        </View>
    )
}

var styles = StyleSheet.create({
    overlay: {
        // flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.7,
        paddingHorizontal: 12,
        paddingVertical: 6
        // width: 100
    },
    welcome: {
        fontSize: 15,
        color: Colors.BLACK
    }
});
