import React, { useState } from 'react'

import { useTheme } from '@react-navigation/native';
import { DefaultTFuncReturn } from 'i18next';
import { StyleSheet, Text, TextStyle, View } from 'react-native'
import { ReturnKeyTypeOptions } from 'react-native';
import { KeyboardType } from 'react-native';
import { ViewStyle } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { TextInput } from 'react-native-paper'

import MText from './Text';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { w } from '../utils';

type autoCapitalize = 'none' | 'sentences' | 'words' | 'characters' | undefined;
interface InputProp {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string | DefaultTFuncReturn;
  onBlur?: (value: any) => void;
  inputRef?: React.Ref<any>;
  inputContainer?: ViewStyle;
  inputStyle?: TextStyle;
  keyboardType?: KeyboardType;
  onPress?: (value: any) => void;
  error?: string | DefaultTFuncReturn;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number | undefined;
  editable?: boolean;
  autoCapitalize?: autoCapitalize;
  textContentType?: string;
}

const PaperInput = ({
  inputRef,
  value,
  onChangeText,
  placeholder,
  onBlur,
  inputContainer,
  inputStyle,
  keyboardType,
  onSubmitEditing,
  blurOnSubmit,
  returnKeyType,
  maxLength,
  onPress,
  error,
  editable,
  autoCapitalize,
  textContentType,
}: InputProp) => {
  const theme = useTheme();
  const [focused, setFocused] = useState<boolean>(false)

  const borderColor = error ? Colors.red : focused ? Colors.primary : Colors.gray4;
  const color = focused ? theme.colors.text : theme.colors.subText;
  const inputTheme = {
    roundness: Size.s12,
    colors: {
      primary: Colors.primary,
      text: inputStyle?.color ? inputStyle.color : theme.colors.text,
    },
  }

  return (
    <View style={[styles.inputContainer, inputContainer]}>
      <TextInput
        ref={inputRef}
        mode='outlined'
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        label={placeholder}
        theme={inputTheme}
        textColor={color}
        style={[styles.input, {
          backgroundColor: theme.colors.background,
          // color,
        }, inputStyle]}
        onPressIn={onPress}
        autoCapitalize={autoCapitalize}
        defaultValue={value}
        onFocus={() => setFocused(true)}
        maxLength={maxLength}
        editable={editable}
        onBlur={(e) => {
          onBlur && onBlur(e)
          setFocused(false)
        }}
        onSubmitEditing={() => {
          onSubmitEditing && onSubmitEditing()
          setFocused(false)
        }}
        textContentType={textContentType}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyType}
        error={!!error}
        outlineStyle={{ borderColor }}
      />

      {!!error && <Animatable.View animation="fadeInRight" duration={400}>
        <MText style={Styles.error}>{error}</MText>
      </Animatable.View>}
    </View>
  )
}

export default PaperInput

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: Size.s,
    width: "100%"
  },
  input: {
    fontSize: w(3.5),
    height: w(12),
  },
  errorMsg: {
    fontSize: Size._12,
    color: Colors.red,
    marginTop: 1
  },
})