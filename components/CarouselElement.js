
import { StyleSheet, Text,Image, View, useWindowDimensions, TouchableWithoutFeedbackBase, Button } from 'react-native';
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
              <View style={styles.husetHeader}>
                 <Text style={styles.text}>{text}</Text>
              </View>
              <View style={styles.lightBox}  >
                <Text style={styles.lightBoxText}  onPress={onPress} >Se mer</Text>
              </View> 
        
            
            
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
            <Text style={styles.meetingInfo}>{props.info[0]} </Text>
            <Text style={styles.meetingInfo}>{props.info[1]} </Text>
            <Text style={styles.meetingInfo}>{props.info[2]} </Text>
            <Text style={styles.meetingText}>{props.info[3]} </Text>
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
                <Text style={styles.meetingText}>{props.info} </Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

   
    imageBox: {
        width: 220,
        height: 220,
        borderRadius: 10,
        marginRight: 15
   
   
    },
    lightBox:{
        height: 40,
        width: 220, 
        backgroundColor: ['rgba(242,240,240,0.8)', 'transparent'],
        position: 'absolute',
        top: 180,
        textAlign:'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10


    },
    lightBoxText:{
        fontSize: 18, 
        marginTop: 5,
        color: 'black',
        fontWeight: '500', 
        textAlign:'center'
    },

   

    text: {
        bottom: 180, 
        fontSize: 22, 
        textAlign: 'center', 
        color: 'rgba(242,240,240, 1)',
        fontWeight: 'bold'
        
    },

    husetHeader: {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), transparent)', 
        position: 'absolute', 
        width: 220,
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
        height: 400,
        width: 400,
        textAlign: 'center',
        marginRight: 30


    },

    infoText:{
        display:'flex'
    },

    meetingBox:{
        display: 'flex',
        flexDirection: 'column',
        marginRight: 100
        
    },

    meetingImageBox: {
        width: 220,
        height: 220,
        borderRadius: 10,
        zIndex: 1
        
   
   
    }, 
    header:{
        fontSize: 20,
        marginBottom: 30,
        color: '#7E7E7E', 
        textAlign: 'center',
        marginRight: 35
    }, 

    homeBox:{
        display: 'flex',
        flexDirection: 'column',
    },

    imgShadow:{
        width: 220,
        height: 220,
        borderRadius: 10,
        zIndex: 0,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10, 
        marginLeft: 70
    },

    homeImgShadow:{
        width: 220,
        height: 220,
        borderRadius: 10,
        zIndex: 0,
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 10, 
        marginRight: 50,

    },

    meetingText:{

        
        height: 200,
        width: 350,
        marginRight: 100,
        marginTop: 50,
        marginLeft: 15
    
    
    }
   
   })