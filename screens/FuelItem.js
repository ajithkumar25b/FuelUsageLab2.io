import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';

const FuelItem = (props) => {
    return (
        <View style= {styles.listItemContainer}>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onShowData.bind(this, props.id)}>
                <View >
                    <Text style={styles.item}>Fuel Type : {props.title}</Text>
                    <Text style={styles.item}>Fuel Used : {props.amount}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.second}>
                <Text>Price : ${props.amount}</Text>
                <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
                    <Text >Remove</Text> 
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer : {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        display : 'flex',
        width: '85%',
        alignSelf : 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom : 5,
    },

    second : {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'space-evenly',
    },
    item: {
        width : 250,
        padding: 10,
    },
})

export default FuelItem;