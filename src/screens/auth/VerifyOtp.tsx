import React, { useEffect, useState } from 'react';

// import crashlytics from '@react-native-firebase/crashlytics';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';
import MText from '../../components/Text';
import Button from '../../components/Button';
import { Styles } from '../../styles';
import Svg from '../../assets/svg';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducer/user';

const cellCount = 4;
const RESEND_OTP_TIME_LIMIT = 30;
let resendOtpTimerInterval: any;
let confirmationMethod: any;

const VerifyOtpScreen = ({ route, navigation }: any) => {
    const dispatch = useDispatch();
    const theme = useTheme()
    const mobile = route?.params?.mobile;
    confirmationMethod = route.params.confirmationMethod;
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(RESEND_OTP_TIME_LIMIT);
    const ref = useBlurOnFulfill({ value, cellCount: cellCount });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        // crashlytics().log('Otp Screen Mounted');
    }, [])

    useEffect(() => {
        startResendOtpTimer();
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);

    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= 0) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - 1);
            }
        }, 1000);
    };

    const resendOtp = async () => {
        setValue('')
        setLoading(true);
        setError('')
        confirmationMethod = null;
        setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
        startResendOtpTimer();
        setLoading(false);
    };


    const verifyOtp = async () => {
        // setLoading(true);
        if (value.length === 6) { }
        dispatch(setUser({}));
        navigation.navigate('Root');
        // setLoading(false);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.mainWrapper}>
                    <View style={{ alignItems: "center", marginBottom: 40 }}>
                        <Svg.OTPFrameIcon />
                    </View>
                    <MText style={styles.titleWrapper}>Enter OTP</MText>
                    <View style={styles.subtitleWrapper}>
                        <MText style={styles.subtitleText}>
                            An 4 digit code has been sent to +91 9995380399
                            <MText style={styles.subtitleTextBold}>
                                {mobile}
                            </MText>
                        </MText>
                    </View>
                    <View style={styles.codeFieldWrapper} >
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={(text) => setValue(text)}
                            cellCount={cellCount}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell, { color: theme.colors.text }]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
                    </View>
                    {error && <MText style={styles.errorMsg}>{error}</MText>}
                    <Button title="Submit"
                        loading={loading}
                        onPress={verifyOtp}
                        textStyle={styles.submitText}
                        style={styles.submitButton}
                        disabled={value.length < 6 || loading}
                    />
                    <View style={styles.resendWrapper}>
                        {resendButtonDisabledTime !== 0 && <MText style={styles.subtitleText}>
                            Resend Otp in {resendButtonDisabledTime} sec
                        </MText>}
                        {resendButtonDisabledTime <= 0 &&
                            <TouchableOpacity onPress={() => resendOtp()}>
                                <MText style={styles.resendButton}>
                                    Resend Otp
                                </MText>
                            </TouchableOpacity>}
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    )
}

export default VerifyOtpScreen;