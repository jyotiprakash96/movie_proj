import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DateField = ({ dateValue, setDateFunc, label, ...rest }) => {

    const [showDateModal, setShowDateModal] = useState(false);
    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateValue;
        setShowDateModal(false);
        setDateFunc(currentDate);
    };
    const getFormattedDate = (date) => {
        if (date) {
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var year = date.getFullYear();
            return day + "/" + month + "/" + year;
        } else {
            const temp_date = new Date();
            var month = temp_date.getMonth() + 1;
            var day = temp_date.getDate();
            var year = temp_date.getFullYear();
            return day + "/" + month + "/" + year;
        }
    }

    return (
        <>
            <TouchableOpacity onPress={() => setShowDateModal(true)} style={{ borderWidth: 0.8, height: 58, marginTop: 18, justifyContent: "center", borderColor: "#fff", borderRadius: 4 }}>
                <View style={{ paddingLeft: 4, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "#fff", paddingHorizontal: 10, fontSize: 16, opacity: 0.7 }}>{dateValue ? getFormattedDate(dateValue) : label}</Text>
                    <Icon type="FontAwesome5" name="calendar-alt" style={{ color: "#898989", fontSize: 18, paddingHorizontal: 20 }} />
                </View>
            </TouchableOpacity>
            {
                showDateModal && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={dateValue ? dateValue : new Date()}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onDateChange}
                        {...rest}
                    />
                )
            }
        </>
    )
}