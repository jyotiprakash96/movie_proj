import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const BackHeader = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon type="AntDesign" name="left" style={{ color: "#fff", fontSize: 26, paddingBottom: 10 }} />
        </TouchableOpacity>
    )
}
export default BackHeader;