import { Carousel} from "./Carousel";
import { StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import { sectionData } from "../Data";
import { Footer } from './Footer';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { SectionNav } from "../App";
import { useState } from "react";









// meeting and enhet setup

export default function Section({carouselData, mainHeader, headerImg}){

    const [section, setSection] = useState()

    const clickHandler= ()=> {

        setSection()
    }

  

    return(

        <View >
            <Image 
           style={styles.frontImage}
           source={headerImg}
           />
           <View style={styles.arrowContainer}>
                <AntDesign name="leftcircle" size={24} color="white" />
                <AntDesign name="rightcircle" size={24} color="white"  onPress={clickHandler}/>
           </View>
           <Text style={styles.header}>{mainHeader}</Text>
           
          
                    <View style={styles.container}>
                        <Carousel carouselData={carouselData}  />
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
},

arrowContainer:{
    display: 'flex',
    flexDirection: 'row',
    position: "absolute",
    justifyContent: 'space-between',
    width: 400, 
    top: 220,
    opacity: 0.8
    

}





})


/*source={props.carouselImage} text={props.text} info={props.info}

<Carousel  key={`CarouselOne-${id}`}  img={image} info={info} header={header}/>


props.mainHeader
*/