import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { auth } from '../firebase'
import { UserDetails, UserDetailsCollectionRef } from '../models/userDetails';
import {AppContext} from '../context/AppContext';
import FuelItem from './FuelItem';

const HomeScreen = () => {
  const {fuelList, saveFuelList} = useContext(AppContext);
  const [userAllowance, setUserAllowance] = useState(400);
  const navigation = useNavigation();

 
  useEffect(() => {
    //readData();
  }, []);

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value !== null) {
        setInput(value);
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => alert(error.message));
  }

  const showFuelDetails = (id) => {
    
  }

  const removeFromList = (id) => {
    let currentFuelList = fuelList?.filter((item) => item?.id !== id)
    saveFuelList(currentFuelList)
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainbar}> 
        <TouchableOpacity onPress={handleSignOut} style={styles.createList} >
            <Text>Sign out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createList} onPress={ () => navigation.navigate('DeviceDetails') } >
            <Text>Show Device</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => navigation.navigate('FuelCreate') } style={styles.createList} >
            <Text>Create List</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textUserAllowance}>User Allowance Remaining : {userAllowance}</Text>
      <FlatList
                data={fuelList}
                renderItem={
                    itemData => (
                        <FuelItem
                            id = {itemData.item.id}
                            title =  {itemData.item.title}
                            amount = {itemData.item.amount}
                            onShowData={showFuelDetails}
                            onDelete = {removeFromList}
                        />
                    )
                }
            />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainbar : {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 5,
  }
  ,
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  createList : {
    width : '29%',
    height : 50,
    backgroundColor: '#0782F9',
    padding: '4%',
    margin: '1%',
    borderRadius: 10,
  },
  textUserAllowance : {
    fontSize:20,
    fontStyle: 'italic',
    marginBottom: 5,
  }
})
