import { StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import {CarouselHome} from './Carousel';

import { LinearGradient } from 'expo-linear-gradient';
import { Footer } from './Footer';




export default function Home(props){
    return(

      <ScrollView>
        <View style={styles.container}>
         
        
        
         
           <Image 
               style={styles.tinyLogo}
               source={require('../assets/Logo.svg')}
           />
           <Image 
           style={styles.frontImage}
           source={props.headerImg}/>
            
            <Text style={styles.header}>Fontenehuset</Text>
            <Text style={styles.headerTwo}>Bergen</Text>
            <Text style={styles.TextBox}>Få en oppmuntring</Text>
            <Text style={styles.dagenIdag}>Hva skjer?</Text>
        
            
        
            <Text style={styles.BodyHeader}>Om Huset</Text>


            <CarouselHome  carouselData={props.carouselData}  />
       
          </View>
          </ScrollView>

    )
}



const styles = StyleSheet.create({
    container: {
      maxWidth: 412,
      Height: 300,
      
    },
    tinyLogo: {
      width: 50,
      height: 50,
      position:'absolute',
      top: 15,


    },
    TextBox: {
      width: 100,
      height: 45,
      borderStyle:'solid',
      textAlign: 'center',
      paddingTop: 5,
      color: 'white', 
      position: 'absolute',
      top: 150,
      left: 135,
      fontWeight: 'bold',
      borderWidth: 1, 
      borderColor: 'white'
      

    },

    header:{
        fontSize: 30,
        position: 'absolute',
        fontWeight: 'bold',
        top: 60,
        left: 85, 
        color: 'white'

    
    },
    headerTwo:{
        fontSize: 30,
        position: 'absolute',
        fontWeight: 'bold',
        top: 100,
        left: 135, 
        color: 'white'

    
    },
    frontImage:{
        width: 412,
        height: 210,
        opacity: 0.6 
    },
    dagenIdag:{
        width: 100,
        height: 30,
        borderColor: 'white',
        borderRadius: 15,
        borderStyle: 'solid',
        color: 'white', 
        position: 'absolute',
        left: 270,
        top: 25,
        fontSize: 16,
        textAlign:'center',
        borderWidth: 2, 
        borderColor: 'white',
        paddingTop: 3
        

    },

    BodyHeader:{
        fontSize: 25,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
        color:"#A8A8A8",
        textDecorationLine:'underline'
    }
    

  });


  //backgroundColor: 'rgba(0, 41, 70, 0.5)'
  