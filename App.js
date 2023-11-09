import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, SafeAreaView, Image, Linking} from 'react-native';

const openURL = (url) => {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
}

export default function App() {
  return (
    <View style={styles.container}>
      <View  style={styles.container2} >
        <Text style={[styles.text, {paddingBottom: 10,},]}>Hello World!</Text>

        <Text style={[styles.text, {paddingBottom: 20, fontSize: 23,},]}>This is my first React Native App.</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable onPress={()=>{openURL('https://www.linkedin.com/in/miruna-movileanu-6b818a235/')}} style={[styles.button, {backgroundColor: '#0A66C2', paddingBottom: 10},]}> 
            {/* <View class='fab fa-linkedin'></View> */}

            <Text style={[styles.text, {fontSize: 16,},]}>LinkedIn</Text>
          </Pressable>
          <Pressable onPress={()=>{openURL('https://github.com/mirunamovi')}} style={[styles.button, {backgroundColor: 'black',},]}>
            <Text style={[styles.text, {fontSize: 16,},]}>Github</Text>
          </Pressable>
        </View>
        <View style={styles.container3}>
          <Image style= {{alignSelf: 'center', height: '100%', width: '100%', borderRadius: 50}} source={require('./assets/icon.png')}/>
        </View>
      
      </View>
      {/* <View style={{flex: 2, backgroundColor: 'darkorange', borderRadius: 100}} />
      <View style={{flex: 3, backgroundColor: 'green', borderRadius: 100}} /> */}
      {/* <Text style={styles.text}>Hello World!</Text>
      <Text style={styles.text}>Hello World!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

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
