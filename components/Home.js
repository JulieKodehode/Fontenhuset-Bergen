import { StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import {CarouselHome} from './Carousel';

import { LinearGradient } from 'expo-linear-gradient';
import { Footer } from './Footer';




export default function Home(props){
    return(
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
         
         
            <Footer/>
        
            
          
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
      maxWidth: 412
    },
    tinyLogo: {
      width: 50,
      height: 50,
      position:'absolute',
      top: 15,


    },
    TextBox: {
      width: 100,
      height: 58,
      border:'solid',
      textAlign: 'center',
      paddingTop: 5,
      color: 'white', 
      position: 'absolute',
      top: 200,
      left: 160,
      fontWeight: 'bold'
      

    },

    header:{
        fontSize: 40,
        position: 'absolute',
        fontWeight: 'bold',
        top: 80,
        left: 85, 
        color: 'white'

    
    },
    headerTwo:{
        fontSize: 40,
        position: 'absolute',
        fontWeight: 'bold',
        top: 130,
        left: 150, 
        color: 'white'

    
    },
    frontImage:{
        width: 412,
        height: 270,
        opacity: 0.6 
    },
    dagenIdag:{
        width: 100,
        height: 30,
        borderColor: 'white',
        borderRadius: 20,
        border: 'solid',
        color: 'white', 
        position: 'absolute',
        left: 300,
        top: 30,
        fontSize: 16,
        textAlign:'center',
        

    },

    BodyHeader:{
        fontSize: 25,
        textAlign:'center',
        fontWeight: 'bold',
        marginTop: 60,
        color:"#A8A8A8",
        textDecorationLine:'underline'
    }
    

  });


  //backgroundColor: 'rgba(0, 41, 70, 0.5)'
  