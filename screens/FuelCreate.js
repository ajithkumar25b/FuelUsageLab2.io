import React, { useContext, useState} from 'react';
import {View, StyleSheet, TextInput, Text, Button, Alert} from 'react-native';
import { set } from 'react-native-reanimated';
import {AppContext} from '../context/AppContext';

const FuelCreate = ({navigation, route}) => {
    const {fuelList, saveFuelList} = useContext(AppContext);
    const [fuelType, setFuelType] = useState();
    const [fuelAmount, setAmount] = useState();
   
    const fuelTypeChanged = (value) => {
        setFuelType(value)
    }
    const amountInputHandler = (value) => {
        setAmount(value)
    }

    const addItemHandler = () => {
        let newFuel = {
            id : fuelType + " " + fuelAmount,
            title : fuelType,
            amount : fuelAmount,
        };
        saveFuelList([...fuelList, newFuel]);
        //saveFuelToAysnc()
        Alert.alert(
            'Fuel !!!', 
            'Your expense on fuel is added',
            [ { text: 'Okay' }]);
        navigation.goBack();
    }

    const deleteItemFromList = () => {
        let currentExpenseList = expenseList.filter((item) => item.id !== route.params?.id)
        saveExpenseList(currentExpenseList)
        Alert.alert(
            'Expense !!!', 
            'Your expense has been deleted from expense list',
            [ { text: 'Okay' }]);
        navigation.goBack();
    } 

    return (
        <View style={styles.inputContainer}>
            <View><Text style={styles.label}>Fuel Type</Text></View>
            <TextInput placeholder="Fuel Type" style={styles.input} onChangeText={fuelTypeChanged} value={fuelType} />
            <View><Text style={styles.label}>Amount</Text></View>
            <TextInput placeholder="Enter litres / Charge Unit here" style={styles.input} onChangeText={amountInputHandler} value={fuelAmount} />
            <View style={styles.buttonContainer}>
                <View style={styles.button} >
                    <Button title={'Save'} style={styles.buttonitem} onPress={addItemHandler} />
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: '10%'
    },
    input: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    inputArea: {
        width: '100%',
        height: '30%',
        borderColor: 'black',
        borderWidth: 1,
        textAlignVertical: 'top',
        padding: 10,
        marginBottom: 10
    },
    sendItem : {
        padding : 10,
    },
    sendItemImg : {
        backgroundColor: '#859a9b',
        borderRadius: 20,
        width: 30,
        height: 30,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    sendContainer :{
        height: '8%',
        flexDirection : "row-reverse",
    },
    buttonContainer: {
        width: '100%',
    },
    button: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttonitem : {
        backgroundColor: 'black'
    },
    image: {
        width: 200,
        height: 200
    },
    label : {
        marginBottom : 3,
    }
});

export default FuelCreate;