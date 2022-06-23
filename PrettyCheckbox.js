import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View } from 'react-native';

const PrettyCheckbox = (props) => {
    let color = '#999';
    let backgroundColor = 'white';

    if (props.selected) {
        color = props.selectedColor ? props.selectedColor : "#36ADB7";
        backgroundColor = props.selectedColor ? props.selectedColor : "#36ADB7";
    }

    return <View style={[{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: color,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor
        }, props.style]}>
            {
                props.selected ?
                    <FontAwesomeIcon
                        icon={faCheck}
                        color={'white'}
                    />
                    : null
            }
        </View>;
};

export default PrettyCheckbox;