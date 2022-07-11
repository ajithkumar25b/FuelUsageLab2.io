import React, { useEffect, useEffect, useState} from 'react';
import {View, StyleSheet, NativeModules, Text, Button, Alert} from 'react-native';

const DeviceDetails = ({navigation}) => {

    const {ReactOneCustomMethod} = NativeModules;
    const [deviceId, setDeviceId] = useState()
    const [deviceType, setDeviceType] = useState()
    const [deviceName, setDeviceName] = useState()
    const [deviceModel, setDeviceModel] = useState()
    const [deviceVersion, setDeviceVersion] = useState()
    const [deviceLocale, setDeviceLocale] = useState()
    const [deviceBNumber, setBuildNumber] = useState()
    const [deviceBundleId, setDeviceBundleId] = useState()
   
    useEffect(() => {
        readDeviceData();
      }, []);

    const readDeviceData = () => {

        //set device id
        ReactOneCustomMethod.getPhoneID()
        .then((res: string) => {
          setDeviceId(res);
          console.log(res);
        })
        .catch((err: any) => {
          console.error(err);
        });

        //set Device Type
        ReactOneCustomMethod.getDeviceType()
        .then((res: string) => {
          setDeviceType(res);
          console.log(res);
        })
        .catch((err: any) => {
          console.error(err);
        });

        //set Device Name
        ReactOneCustomMethod.getPhoneName()
        .then((res: string) => {
          setDeviceName(res);
          console.log(res);
        })
        .catch((err: any) => {
          console.error(err);
        });

        //set Device model
        ReactOneCustomMethod.getPhoneModel()
         .then((res: string) => {
           setDeviceModel(res);
           console.log(res);
         })
         .catch((err: any) => {
           console.error(err);
         });
         //set Device version
         ReactOneCustomMethod.getPhoneVersion()
         .then((res: string) => {
           setDeviceVersion(res);
           console.log(res);
         })
         .catch((err: any) => {
           console.error(err);
         });

          //set Device locale
        ReactOneCustomMethod.getPhoneLocale()
        .then((res: string) => {
          setDeviceLocale(res);
          console.log(res);
        })
        .catch((err: any) => {
          console.error(err);
        });

         //set Device built number
         ReactOneCustomMethod.getPhoneBuilt()
         .then((res: string) => {
           setBuildNumber(res);
           console.log(res);
         })
         .catch((err: any) => {
           console.error(err);
         });

          //set Device bundle id
        ReactOneCustomMethod.getPhoneBundleId()
        .then((res: string) => {
          setDeviceBundleId(res);
          console.log(res);
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
    
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Unique Device ID : {deviceId}</Text>
            <Text style={styles.label}>Device Type / Manufacturer : {deviceType}</Text>
            <Text style={styles.label}>Device Name : {deviceName}</Text>
            <Text style={styles.label}>Device Model : {deviceModel}</Text>
            <Text style={styles.label}>System Version : {deviceVersion}</Text>
            <Text style={styles.label}>Device Locale Language : {deviceLocale}</Text>
            <Text style={styles.label}>Build Number : {deviceBNumber}</Text>
            <Text style={styles.label}>Bundle ID : {deviceBundleId}</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button} >
                    <Button title={'Exit'} style={styles.buttonitem} onPress={ () => navigation.goBack()} />
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
    label : {
        marginBottom : 3,
    },
    button : {
        width : '80%'
    }
});

export default DeviceDetails;