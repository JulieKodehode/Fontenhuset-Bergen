import { StyleSheet, Text,Image, View, ScrollView, InteractionManager, Modal, Pressable, TouchableOpacity, TextInput} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import Svg from 'react-native-svg';
import { SvgUri } from 'react-native-svg';

export function Footer(){

const [modalVisible, setModalVisible] = useState(false);

const [modalBox, setModalBox] = useState(false)

const [profile, setProfile] = useState(false)

const [inputValue, setInputValue] = useState("")

function SwitchBox(){
   setModalVisible(false)
   setProfile(true)
}

const handleChange = input => {
    setInputValue(input.target.value);

    console.log(inputValue)

}

function Bestillt(){

    if(inputValue === ""){
       console.log("ingen navn er skrevet")
    } else{
    setProfile(false)
    setModalBox(true)}

  
    
    

}

function CloseBox(){
    setModalVisible(false)
    setModalBox(false)
    setProfile(false)
 }

const navigation = useNavigation()

return(

// Må kanskje kobles til useEffect for å lade svar når bestilling er godkjent på andre siden

<View style={styles.footer}>
    
            <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                <View style={styles.bestillBox}>
                    <AntDesign name="close" size={24} color="black" onPress={CloseBox} style={styles.closeIcon}/>
                    <View >
                        <Text style={styles.bestillText}> Dagens lunsj er:</Text>
                        <Text style={styles.bestillText}> kjøttkaker</Text>
                    </View>
                    <Pressable style={styles.closeButton} onPress={SwitchBox} >
                        <Text> Bestill lunsj</Text>
                    </Pressable>
                </View>

            </Modal>



         
            <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={false}
                    visible={profile}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setProfile(!setProfile);
                    }}
                >
                <View style={styles.bestillBox}>
                    <AntDesign name="close" size={24} color="black" onPress={CloseBox} style={styles.closeIcon}/>
                    

                    <TextInput  
                    type = "submit" 
                    style={styles.input}
                    placeholder="Ditt navn"
                    onChange={handleChange}
                    value ={inputValue}
                    
                    
                    />

                   <TextInput   
                    style={styles.input}
                    placeholder="Ditt tl.nr"
                    type = "number" 
                    onChange={handleChange}
                    value ={inputValue}
                    
                    />

                     
                    <Pressable style={styles.closeButton} onPress={Bestillt} >
                        <Text> Bestill lunsj</Text>
                    </Pressable>
                </View>

            </Modal>   




            <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={false}
                    visible={modalBox}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalBox(!modalBox);
                    }}
                >
                <View style={styles.bestillBox}>
                    <View >
                        <Text style={styles.bestillText}>Takk{inputValue}Lunsj er bestillt</Text>
                    </View>
                    <Pressable style={styles.closeButton} onPress={() => setModalBox(!modalBox)} >
                        <Text> Lukk</Text>
                    </Pressable>
                </View>

            </Modal>
    

    <View style={styles.iconBox} >
        
            <MaterialCommunityIcons name="food-outline" size={32} style={styles.icons} onPress={() => setModalVisible(true)}   />
            <Text style={styles.iconText}>Bestill lunsj</Text>
        </View>
        <View style={styles.iconBox} >
        <Ionicons name="clipboard-outline" size={32} style={styles.icons}  />
        <Text style={styles.iconText}>Meny</Text>
        </View>
        <View style={styles.iconBox} >
            <MaterialCommunityIcons name="email-outline" size={32} style={styles.icons} onPress={() => navigation.navigate('Kontakt')}  />
            <Text  style={styles.iconText}>Kontaktinfo</Text>
        </View>
        <View style={styles.iconBox}  >
            <TouchableOpacity onPress={() => navigation.navigate('Fontenehus')} >
               <Image source={require('../assets/FontenehusetLogo.png')}  style={styles.icons} resizeMode='contain'  />
             </TouchableOpacity>
            <Text style={styles.iconText}>Fontenehus</Text>
        </View>
    </View>)

}


const styles = StyleSheet.create({

    footer:{
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        width: 400,
        justifyContent: 'space-evenly',
        borderTopWidth:1,
        borderTopColor: '#ADADAD'
        /*shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5*/


     },

     iconBox:{
         display: 'flex',
         alignItems:'center',
         fontSize: 9,
         textAlign: 'center',
         marginRight: 5,
         marginTop: 4

     },

     icons: {
       
        color:"#F4B09A",
        marginTop: 2,
        marginBottom: 4,
        width: 30,
        height: 35, 

     }, 
     iconText:{
         color: '#7B7B7B',
         marginBottom: 10, 
         width: 55,
         fontSize: 9,
         textAlign:'center'
         
     },

     bestillText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center'
     },

     bestillBox:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center', 
        marginTop: 150,
        width: 300,
        height: 300,
        backgroundColor: 'white',
        marginLeft: 40,
        borderRadius: 10
        
     },

     closeButton:{
        width: 150,
        height: 39,
        borderColor: "#F4B09A",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
     }, 

     modal:{
        display: 'flex',
        justifyContent:'center',
        height: 400,
        width: 400
     },

     closeIcon:{
        marginLeft: 250,
        marginBottom: 150
     },

     input: {
        width: 150,
        height: 39,
        borderWidth: 1,
        borderColor: '#7B7B7B',
        padding: 10, 
        marginTop: 15
        

     }



})



/*<Image style={styles.icons} size={38} source={require('../assets/Fork&Knife.svg')}/>

<Ionicons name="person-outline" size={32}  style={styles.icons} onPress={() => navigation.navigate('Profile')} />

 <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                <View style={styles.bestillBox}>
                    <View >
                        <Text style={styles.bestillText}> Bestill lunsj</Text>
                    </View>
                    <Pressable style={styles.closeButton} onPress={CloseBox} >
                        <Text> Close</Text>
                    </Pressable>
                </View>

            </Modal> */ 