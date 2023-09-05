import React from 'react'

import {
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
    View,
    ActivityIndicator,
    ImageStyle,
    ImageBackground
} from 'react-native'

import { Icon } from './Icon';

import MText from './Text';

import { Row } from './Wrapper';
import { Colors, Styles } from '../styles';
import { Size } from '../constants';
import { h, w } from '../utils';
import images from '../assets/images';

type IconPosition = 'right' | 'left';
type mode = 'text' | 'outlined' | 'contained' | 'elevated'
interface ImageButtonProps {
    style?: StyleProp<ViewStyle>;
    title?: string | null;
    image?: string;
    onPress?: () => void;
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    iconColor?: string;
    iconType?: Function;
    iconPosition?: IconPosition;
    textStyle?: TextStyle;
    SvgIcon?: any;
    mode?: mode;
    color?: string;
    loaderColor?: string;
    loaderSize?: number;
    iconSize?: number;
    iconStyle?: ImageStyle;
}

const ImageButton = ({
    style,
    title,
    onPress,
    loading,
    disabled,
    icon,
    iconColor,
    iconType,
    iconPosition,
    textStyle,
    SvgIcon,
    mode,
    color,
    loaderColor,
    iconSize,
    iconStyle,
}: ImageButtonProps) => {
    const isIconAvailable = !!icon && !!iconType;

    let rowStyle = {}
    if (iconPosition) {
        rowStyle = { flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row' }
    }

    const paddingHorizontal = isIconAvailable ? Size.xs : 0;

    const titleColor = mode === 'outlined' || mode === 'text' ? Colors.primary : Colors.white;

    return (
        <ImageBackground
            source={images.imageButton} borderRadius={8} resizeMode="stretch"
            style={[styles.buttonContainer, Styles.centered, style]}
        >
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={0.7}
                onPress={onPress}
                style={[{ width: "100%", height: 52, ...Styles.centered }]}
            >
                {loading ? (
                    <ActivityIndicator size="small" color={loaderColor} />
                ) : (
                    <Row style={rowStyle}>
                        {isIconAvailable && (
                            <Icon
                                type={iconType}
                                name={icon}
                                color={iconColor}
                                size={iconSize}
                                style={iconStyle}
                            />
                        )}
                        {SvgIcon && SvgIcon}
                        {title && <MText
                            style={[
                                styles.text,
                                { paddingHorizontal },
                                textStyle ? textStyle : {},
                            ]}
                            color={color ? color : titleColor || Colors.white}>
                            {title}
                        </MText>}
                    </Row>
                )}
            </TouchableOpacity>
        </ImageBackground>
    )
};

ImageButton.defaultProps = {
    loaderColor: Colors.white,
    iconColor: Colors.white,
}

const styles = StyleSheet.create({
    container: {
        ...Styles.centered,
        height: h(5.8), //50
        backgroundColor: Colors.primary,
        borderRadius: Size.s12,
    },
    text: {
        fontSize: Size.m,
        bottom: 1,
        textTransform: 'capitalize'
    },
    buttonContainer: {
        width: Size.wWidth / 1.1,
        height: 54,
        borderRadius: 8,
    }
});

export default ImageButton;
