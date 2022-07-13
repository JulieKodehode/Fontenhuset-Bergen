import MapView from 'react-native-maps';
import { StyleSheet, Text,Image, View, ScrollView, Dimensions, TextInput, Button, FlatList, SafeAreaView, StatusBar} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Kontakt(){

    const navigation = useNavigation()

    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null);



    return(
    <View style={styles.mainContainer}>
      <View >
        <MapView style={styles.map} />
      </View>

      <View style={styles.kontaktInfo}>
        <Text style={styles.kontaktHeader}> Kontaktinfo</Text>
        <MaterialIcons name="arrow-drop-down" size={30} color="black" />
      </View>

    
        <SafeAreaView style={styles.inputDiv}>
          <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
            <View>
              <Text>Ta kontakt med oss</Text>
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  placeholder="Navn"
                  value={text}
              />
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeNumber}
                  placeholder="Tlf nr"
                  value={number}
                  keyboardType='numeric'
              />
              <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  placeholder="Email"
                  value={text}
              />

              <TextInput
                  style={styles.mailText}
                  onChangeText={onChangeText}
                  value={text}
                  multiline
                  numberOfLines={4}
              />
              <View style={styles.sendBtn}>
                <Button  title='send' onPress={() => navigation.navigate('Home')} color= 'white' fontSize= '12'/>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>

     </View>
    )
}


const styles = StyleSheet.create({

    mainContainer:{
      display: 'flex',
      backgroundColor: '#fff'
    },

      map: {
        width: Dimensions.get('window').width,
        height: 200
      }, 
      kontaktInfo:{
        marginTop: 30,
        alignItems: 'center'
      },

      kontaktHeader:{
        fontSize: 18
      }, 
      input:{
        width: 250,
        height: 40, 
        borderRadius: 10, 
        borderColor: '#ADADAD',
        borderWidth: 1,
        marginTop: 20,
        paddingLeft: 10
      },
      inputDiv:{
       
        display: 'flex',
        alignItems:'center',
        height: 240,
        overflow:'hidden',
        marginTop: 20
      },
      
    ScrollView: {
        marginHorizontal: 20,
        
    },
    mailText:{
        width: 250,
        height: 250, 
        borderRadius: 10, 
        borderColor: '#ADADAD',
        borderWidth: 1,
        marginTop: 30,
        paddingLeft: 10,
       
    },

    sendBtn:{
        width: 80,
        height: 40,
        zIndex: 1,
        borderRadius: 10,
        marginTop: 50,
        marginBottom: 30,
        backgroundColor: '#FE9191'
        
    }

})
