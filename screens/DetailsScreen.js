import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, Linking, ScrollView, Button} from 'react-native';


const DetailsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View  style={styles.container2} >

      <Pressable style={[styles.button, {backgroundColor: 'black',},]}
         onPress={() => navigation.navigate('Home')}>
           <Text style={[styles.text, {fontSize: 16,},]}>Go to Home</Text>
        </Pressable>

        <View style={styles.container3}>
          <Image style= {{alignSelf: 'center', height: '100%', width: '100%', borderRadius: 50}} source={require('../assets/783df7a6-6ab6-455d-a339-4e2a2d78fb19.jpg')}/>
        </View>
        <View style={styles.container3}>
          <Image style= {{alignSelf: 'center', height: '100%', width: '100%', borderRadius: 50}} source={require('../assets/af0d6e07-2eef-4986-953c-72b59d397ccb.jpg')}/>
        </View>
        <View style={styles.container3}>
          <Image style= {{alignSelf: 'center', height: '100%', width: '100%', borderRadius: 50}} source={require('../assets/cb7e4c07-dad3-4bf8-acda-1eefbc155a2e.jpg')}/>
        </View>

       
      </View>
        <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // padding: 7,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  container2: {
    flex: 1,
    backgroundColor: 'purple',
    borderRadius: 50,
    paddingTop: 100,
    paddingLeft: 50,
    paddingRight: 50,

    // alignItems: 'center',
    // justifyContent: 'center',
 
  },

  container3: {
    // flex: 1,
    backgroundColor: 'black',
    borderRadius: 50,
    marginTop: 10,
    height: 300,

  },

  text: {
    color: 'white',
    fontSize: 30,
    // fontFamily: 'SF Pro',
  }, 

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
});


export default DetailsScreen;