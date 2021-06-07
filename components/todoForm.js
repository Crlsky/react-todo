import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

export default function Form( {addItem, navigation }) {
    Moment.locale('pl');
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    
    const showPicker = () => {
        setShow(true);
    };

    const changeHandler = (val) => {
        setText(val);
    }
 
    return(
        <View>
            <View>
                <Text 
                    style={styles.datePicker} 
                    onPress={showPicker}
                >Date: {Moment(date).format('D.M.Y')}</Text>
                <TextInput 
                    style={styles.datePicker}
                    multiline={true}
                    placeholder='New todo'
                    onChangeText={changeHandler}
                />
                <Button 
                    title='Add' 
                    onPress={()=>addItem(text, Moment(date).format('D.M.Y'))}
                />
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                display="default"
                onChange={onChange}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    datePicker: {
        backgroundColor: 'cadetblue',
        padding: 10,
        overflow: 'scroll',
    }
})