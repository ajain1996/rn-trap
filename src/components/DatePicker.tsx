import React, { useState } from "react";

import { useTheme } from "@react-navigation/native";
import moment from 'moment';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

import { Icon, Icons } from "./Icon";
import MText from "./Text";
import { Size } from "../constants";
import { w } from "../utils";
import { Colors, Styles } from "../styles";
import Svg from "../assets/svg";
import images from "../assets/images";


export default function DatePicker(props: any) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [initialDate, setInitialDate] = useState(props.initialDate)

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        setInitialDate(moment(date).format("YYYY-MM-DD"))
        props.onDateSelected(moment(date).format("YYYY-MM-DD"));
        hideDatePicker();
    };

    const theme = useTheme();

    return (
        <>
            <ImageBackground
                source={images.imageButton} borderRadius={6} resizeMode="stretch"
                style={styles.container}
            >
                <TouchableOpacity activeOpacity={0.5} onPress={showDatePicker} style={styles.inputContainer}>
                    <MText style={initialDate != '' ? props.clear ? styles.input : styles.inputBlack : styles.input}>
                        {initialDate ? initialDate : props.placeholderText}
                    </MText>
                    {props.mode === "date"
                        ? <Svg.ClarityDateIcon />
                        : <Svg.ClarityDateIcon />}
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={isDatePickerVisible}
                    mode={props.mode}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={props?.minimumDate ? props.minimumDate : null}
                    maximumDate={props?.maximumDate ? props.maximumDate : null}
                // maximumDate={moment().subtract(18, "years").toDate()}
                />
            </ImageBackground>
            {/* {props?.error?.length !== 0 && <MText style={styles.errorMsg}>{props.error} !</MText>} */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Size.s,
        marginBottom: Size.xs,
    },
    containerBig: {
        fontSize: Size.s14,
    },
    inputContainer: {
        width: Size.wWidth / 1.1,
        height: 56,
        paddingHorizontal: Size.m,
        borderRadius: Size.s12,
        ...Styles.row_space,
    },
    input: {
        color: Colors.subText,
    },
    inputBlack: {
        color: "#8D8D8D",
    },
    errorMsg: {
        fontSize: Size.s14,
        color: Colors.red,
        marginTop: 1
    },
});