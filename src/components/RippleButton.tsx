import React from 'react'

import {
    StyleProp,
    StyleSheet,
    TextStyle,
    ViewStyle,
    ActivityIndicator,
    ImageStyle
} from 'react-native'

import { Icon } from './Icon';

import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { Button } from 'react-native-paper';

type IconPosition = 'right' | 'left';
type mode = 'text' | 'outlined' | 'contained' | 'elevated'
interface RippleButtonProps {
    style?: StyleProp<ViewStyle>;
    title?: string | null;
    image?: string;
    onPress?: () => void;
    disabled?: boolean;
    loading?: boolean;
    icon?: any;
    btnIcon?: string;
    iconColor?: string;
    iconType?: any;
    iconPosition?: IconPosition;
    textStyle?: TextStyle;
    mode?: mode;
    color?: string;
    loaderColor?: string;
    loaderSize?: number;
    iconSize?: number;
    iconStyle?: ImageStyle;
}

const RippleButton = ({
    style,
    title,
    onPress,
    loading,
    disabled,
    btnIcon,
    icon,
    iconColor,
    iconType,
    iconPosition,
    textStyle,
    mode,
    color,
    loaderColor,
    iconSize,
    iconStyle,
}: RippleButtonProps) => {
    var isIconAvailable = false;
    if (icon && iconType) {
        isIconAvailable = true;
    } else {
        isIconAvailable = false;
    }

    let rowStyle = {}
    if (iconPosition) {
        rowStyle = { flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row' }
    }

    const titleColor = mode === 'outlined' || mode === 'text' ? Colors.primary : Colors.white;

    return (
        <Button
            disabled={disabled}
            onPress={onPress}
            style={[styles.container, style]}
            mode={mode}
            icon={btnIcon}
            labelStyle={[styles.text, textStyle]}
            textColor={color ? color : titleColor || Colors.white}
        >
            {loading ? (
                <ActivityIndicator size="small" color={loaderColor} />
            ) : (
                <>
                    {iconType && <Icon
                        type={iconType}
                        color={iconColor}
                        name={icon}
                        size={iconSize}
                        style={iconStyle}
                    />}
                    {title}
                </>
            )}
        </Button>
    )
};

RippleButton.defaultProps = {
    loaderColor: Colors.white,
    iconColor: Colors.white,
    iconSize: Size.l,
}

const styles = StyleSheet.create({
    container: {
        ...Styles.centered,
        height: 52, //50
        borderRadius: Size.s12,
        width: "100%"
    },
    text: {
        fontSize: Size.m,
        textTransform: 'capitalize',
        width: "100%",
    },
});

export default RippleButton;
