import { CarouselMeeting} from "./Carousel";
import { StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import { sectionData } from "../Data";
import { Footer } from './Footer';



export default function Meeting(props){

    
    

    return(

        <View >
            <Image 
           style={styles.frontImage}
           source={props.headerImg}
           />
           <Text style={styles.header}>{props.mainHeader}</Text>
           
          
                    <View style={styles.container}>
                        <CarouselMeeting carouselData={props.carouselData}  />
                    </View>
            <Footer/>      
        </View>
    )
}


const styles = StyleSheet.create({

frontImage:{
    width: 412,
    height: 270,
    opacity: 0.6
},
header:{
    fontSize: 35,
    position: 'absolute',
    fontWeight: 'bold',
    top: 80,
    left: 10, 
    color: 'white',
    width: 400, 
    textAlign: 'center'
    


},
container:{
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 412
}




})