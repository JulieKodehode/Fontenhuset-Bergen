
import { StyleSheet, Text,Image, View, useWindowDimensions, TouchableWithoutFeedbackBase, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { meetingData } from '../Data';
import Meeting from './Meeting';

import { homeData } from '../Data';







export function CarouselHomeElement({img, text, CarouselKey, onPress}){

    
   

    return(
       
        
        
        <View key={CarouselKey} style={styles.homeBox} >
             <View style ={styles.homeImgShadow}>
              <Image style={styles.imageBox} source= {img}/>
             </View>

              <LinearGradient style={styles.husetHeader} colors={['rgba(0,0,0,0.6)', 'transparent']}>
                 <Text style={styles.text}>{text}</Text>
              </LinearGradient >
              <LinearGradient style={styles.lightBox} colors={['transparent', '(rgba(242,240,240,0.5)']} >
                <Text style={styles.lightBoxText}  onPress={onPress} >Se mer</Text>
              </LinearGradient> 
        
            
            
        </View>
        
        
    )
}



export function CarouselMeetingElement(props){
    return(

    <View key={props.CarouselKey} style={styles.meetingBox} >
        <Text style={styles.header}>{props.title}</Text>
        <View style={styles.imgShadow}>
          <Image style={styles.meetingImageBox} source= {props.img}/>
        </View>
        <View style={styles.infoBox}>
            <Text style={styles.meetingInfo}>{props.dag} </Text>
            <Text style={styles.meetingInfo}>{props.tid} </Text>
            <Text style={styles.meetingInfo}>{props.infoHeader} </Text>
            <Text style={styles.meetingInfo}>{props.infoText} </Text>
        </View>
    </View>
        
        
        
    )
}



// carousel element for the meeting and enhet carousel
export  const CarouselSectionElement= (props)=>{
    return (
        <View key={props.CarouselKey} style={styles.meetingBox} >
            <Text style={styles.header}>{props.title}</Text>
            <View style={styles.imgShadow}>
              <Image style={styles.meetingImageBox} source= {props.img}/>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.enhetInfo}>{props.info} </Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

   
    imageBox: {
        width: 300,
        height: 240,
        borderRadius: 10,
        marginRight: 0
   
   
    },
    lightBox:{
        height: 50,
        width: 300, 
        position: 'absolute',
        top: 190,
        textAlign:'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10


    },
    lightBoxText:{
        fontSize: 17, 
        marginTop: 12,
        color: 'white', 
        textAlign:'center',
        fontWeight: 'bold'
    },

   

    text: {
        marginTop: 10,
        fontSize: 20, 
        textAlign: 'center', 
        color: 'rgba(242,240,240, 1)',
        fontStyle: 'italic',
        marginLeft: 5
        
    },

    husetHeader: {
        backgroundColor: 'linear-gradient(rgba(0,0,0,0.8), transparent)', 
        position: 'absolute', 
        width: 300,
        height: 40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    infoBox:{

        
        height: 200,
        width: 300,
        marginRight: 40,
        marginTop: 50
    
    
    },

    meetingInfo:{
        width: 200,
        marginLeft: 80,
        marginTop: 10


    },

    enhetInfo:{
        width: 200,
        marginLeft: 65,
        marginTop: 10

    },

    infoText:{
        display:'flex'
    },

    meetingBox:{
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        marginLeft: 10
        
    },

    meetingImageBox: {
        width: 170,
        height: 170,
        borderRadius: 10,
        zIndex: 1
        
   
   
    }, 
    header:{
        fontSize: 20,
        marginBottom: 30,
        color: '#7E7E7E', 
        textAlign: 'center',
        marginRight: 90
    }, 

    homeBox:{
        width: 330,
        marginLeft: 30
    },

    imgShadow:{
        width: 180,
        height: 180,
        borderRadius: 10,
        zIndex: 0,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10, 
        marginLeft: 70
    },

    homeImgShadow:{
        width: 170,
        height: 170,
        borderRadius: 10,
        zIndex: 0,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 10, 
        marginRight: 0
        

    },

    meetingText:{

        
        height: 200,
        width: 350,
        marginRight: 100,
        marginTop: 50
    
    
    },

   
   })