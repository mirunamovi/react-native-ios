import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, Linking, ScrollView, Button} from 'react-native';


const openURL = (url) => {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
}
const HomeScreen = ({ navigation }) => {
  return (
    // <ScrollView>
      <View style={styles.container}>
      <View  style={styles.container2} >
        <Text style={[styles.text, {paddingBottom: 10,},]}>Hello World!</Text>

        <Text style={[styles.text, {paddingBottom: 20, fontSize: 23,},]}>This is my first React Native App.</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <Pressable onPress={()=>{openURL('https://www.linkedin.com/in/miruna-movileanu-6b818a235/')}} style={[styles.button, {backgroundColor: '#0A66C2', paddingBottom: 10},]}> 
            {/* <View class='fab fa-linkedin'></View> */}

            <Text style={[styles.text, {fontSize: 16,},]}>LinkedIn</Text>
          </Pressable>
          <Pressable onPress={()=>{openURL('https://github.com/mirunamovi')}} style={[styles.button, {backgroundColor: 'black',},]}>
            <Text style={[styles.text, {fontSize: 16,},]}>Github</Text>
          </Pressable>
        </View>

        <Pressable style={[styles.button, {backgroundColor: 'black',},]}
         onPress={() => navigation.navigate('Details')}>
           <Text style={[styles.text, {fontSize: 16,},]}>Details</Text>
        </Pressable>
      </View>
        <StatusBar style="auto" />
    </View>
    // </ScrollView>
      
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
  },
});



export default HomeScreen;