import { Carousel} from "./Carousel";
import { StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import { sectionData } from "../Data";
import { Footer } from './Footer';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { SectionNav } from "../App";










// meeting and enhet setup

export default function Section({carouselData, mainHeader, headerImg, press, backClick}){

   

  

    return(


        
        <View >
            <View style={styles.imageDiv}>
                    <Image 
                style={styles.frontImage}
                source={headerImg}
                />
                <View style={styles.arrowContainer}>
                        <AntDesign name="leftcircle" size={24} color="white" onPress={backClick}/>
                        <AntDesign name="rightcircle" size={24} color="white"  onPress={press}/>
                </View>
                <Text style={styles.header}>{mainHeader}</Text>
                <Text style ={styles.subHeader}> Arbeidsoppgaver</Text>

           </View>
           
           <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
               <View style={styles.ScrollContainer}>
                    <View style={styles.container}>
                        <Carousel carouselData={carouselData}  />
                    </View>
                </View>
            </ScrollView>     
        </View>
       
    )
}





const styles = StyleSheet.create({

imageDiv:{
        position:'absolute',
        zIndex: 1
    },

frontImage:{
    width: 412,
    height: 200,
    opacity: 1
},
header:{
    fontSize: 35,
    position: 'absolute',
    fontWeight: 'bold',
    top: 80,
    color: 'white',
    width: 400, 
    textAlign: 'center'
    


},

subHeader:{
    position: 'absolute',
    top: 130,
    left: 125,
    fontSize: 18,
    fontStyle:'italic', 
    color: 'white'
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
    width: 350, 
    top: 165,
    opacity: 0.8,
    marginLeft: 18
    

},

ScrollContainer:{
 height: 600, 
 marginTop: 200,
 overflow: 'hidden'
}





})


/*source={props.carouselImage} text={props.text} info={props.info}

<Carousel  key={`CarouselOne-${id}`}  img={image} info={info} header={header}/>


props.mainHeader
*/