import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Button, Pressable} from 'react-native'
import {React, useState, useEffect} from 'react'

const CountScreen = ({ navigation }) => {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('The count is:', count);

  }, [count])
  
  return (
    <View style={styles.container}>
      <View  style={styles.container2} >
      <Pressable style={[styles.button, {backgroundColor: 'black',},]}
         onPress={() => navigation.navigate('Home')}>
           <Text style={[styles.text, {fontSize: 16,},]}>Go to Home</Text>
        </Pressable>
      <Text style={{marginTop: 10, fontSize: 70}}>Count:{count}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <Pressable onPress={() => setCount(count - 1)} style={[styles.button, {backgroundColor: '#0A66C2', paddingBottom: 10},]}> 
            <Text style={[styles.text, {fontSize: 16,},]}>Decrement</Text>
          </Pressable>
          <Pressable onPress={() => setCount(count + 1)} style={[styles.button, {backgroundColor: '#0A66C2',},]}>
            <Text style={[styles.text, {fontSize: 16,},]}>Increment</Text>
          </Pressable>
        </View>
      <StatusBar style="auto" />
     </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    
    },
    container2: {
      flex: 1,
      backgroundColor: 'purple',
      borderRadius: 50,
      paddingTop: 100,
      paddingLeft: 50,
      paddingRight: 50,
  
   
    },
  
    container3: {
      backgroundColor: 'black',
      borderRadius: 50,
      marginTop: 10,
      height: 300,
  
    },
  
    text: {
      color: 'white',
      fontSize: 30,
    }, 
  
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      marginBottom: 10
    },
  });

export default CountScreen;
