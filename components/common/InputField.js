import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

export const InputField = ({ style, label, onChange, value, ...rest }) => {
    return (
        <View style={{ marginTop: 12 }}>
            <TextInput
                label={label}
                mode='outlined'
                underlineColorAndroid="transparent"
                defaultValue={value}
                onChangeText={onChange}
                {...rest}
                theme={{
                    colors: {
                        background: '#151515',
                        text: '#FFFFFF',
                        placeholder: '#C4C4C4',
                        primary: '#3A7AB0'
                    }
                }}
            />
        </View>

    )
}