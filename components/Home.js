import { StyleSheet, Text,Image, View, ScrollView, Modal, Pressable, Button, AppRegistry} from 'react-native';
import {CarouselHome} from './Carousel';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Footer } from './Footer';
import { useNavigation } from '@react-navigation/native';
import { nunito } from 'react-native-typography'
import { homeData } from '../Data';






export default function Home(props){
    
  const [modalVisible, setModalVisible] = useState(false);
   
  const navigation = useNavigation()
  // ENDRE MODAL TIL Å INNEHOLDE "OPPMUNTRING", MATH RANDOM??


  function NyOppmuntring(){
    return Math.floor(Math.random() * max);
  }
  
  return(

        

      
        <View style={styles.container}>
         
         
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
                <View style={styles.oppmuntringsBox}>
                    <AntDesign name="close" size={24} color="black" onPress={() => setModalVisible(false)} style={styles.oppmuntringClose}/>
                    
                        <Image 
                        resizeMode='contain'
                         style={styles.oppmuntringImg} 
                         source= {require('../assets/memeErna.jpg')}/>
                      <View  style={styles.oppmuntringBtn}>
                         <Button  title="Få en ny"  color= "#F4B09A"/>
                      </View>
                        
                </View>
                
            </Modal>
        
        
         
           
          
            
      
            <View style={styles.topText}>
          

                <Text style={styles.dagenIdag}
                
                onPress={() => setModalVisible(!modalVisible) }>Oppmuntring</Text>
                <Text style={styles.dagenIdag} onPress={()=> navigation.push('Info')}>Hva skjer?</Text>
            </View>

            <View style={styles.headerDiv}>
                <Text style={styles.header}>Fontenehuset</Text>
                <Text style={styles.headerTwo}>Bergen</Text>
            </View>

            <Text style={styles.BodyHeader}>Om Huset</Text>
        
            <CarouselHome  carouselData={props.carouselData}  />  
        
            


            
       
    </View>
       

    )
}



const styles = StyleSheet.create({
    container: {
      maxWidth: 412,
      height: 700,
      backgroundColor: 'white'
      
    },
    tinyLogo: {
      width: 50,
      height: 50,
      color: 'black'
      


    },
    TextBox: {
      width: 100,
      height: 45,
      borderStyle:'solid',
      textAlign: 'center',
      paddingTop: 5,
      color: 'black', 
      position: 'absolute',
      top: 150,
      left: 135,
      fontWeight: 'bold',
      borderWidth: 1, 
      borderColor: 'black'
      

    },

    headerDiv:{
         
        marginTop: 50

    },

    header:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 90

    
    },
    headerTwo:{
        fontSize: 30,
        color: 'black',
        marginLeft: 145

    
    },
    frontImage:{
        width: 412,
        height: 210
    },
    dagenIdag:{
        width: 100,
        height: 25,
        borderColor: 'black',
        borderRadius: 12,
        borderStyle: 'solid',
        fontSize: 12,
        textAlign:'center',
        borderWidth: 1, 
        borderColor: '#F4B09A',
        paddingTop: 3, 
        marginLeft: 10
        

    },

    BodyHeader:{
        fontSize: 18,
        textAlign:'center',
        fontStyle: 'italic',
        marginTop: 40,
        marginBottom: 10,
        color:"#A8A8A8",
        textDecorationLine:'underline'
    },
    bestillText: {
      fontSize: 18,
      textAlign: 'center'
   },

   bestillBox:{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center', 
      marginTop: 100,
      width: 200,
      height: 200,
      backgroundColor: 'white',
      marginLeft: 80,
      borderRadius: 10
      
   },

   oppmuntringsBox:{
    
    display: 'flex',
    justifyContent:'center',
    alignItems:'center', 
    marginTop: 280,
    width: 400,
    height: 300,
    backgroundColor: 'white',
    marginLeft: 0,
    borderRadius: 10

   },

   closeButton:{
      display: 'flex',
      height: 50,
      width: 100,
      backgroundColor: '#FDE1E1',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 10,
      marginTop: 30
   }, 

   modal:{
      display: 'flex',
      justifyContent:'center',
      height: 400,
      width: 300
   },

   closeIcon:{
      marginLeft: 135,
      marginBottom: 10
   },

   oppmuntringImg:
    {
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        marginBottom: 50,
        marginTop: 50
    },
    
    oppmuntringClose:{
        left: 340,
        bottom: 260,
        position: 'absolute',
        zIndex: 1
    },

    oppmuntringBtn:{
        width: 120,
        height: 37,
        borderBottomColor: "#F4B09A",
        borderBottomStyle: 'solid',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: 260,
        marginBottom: 20
        
    }, 

    topText:{
      display: 'flex',
      flexDirection: 'row',
      width: 300,
      marginLeft: 140, 
      marginTop: 50

    }



   
    

  });


  //backgroundColor: 'rgba(0, 41, 70, 0.5)' <CarouselHome  carouselData={props.carouselData}  />  <Text style={styles.BodyHeader}>Om Huset</Text>
  