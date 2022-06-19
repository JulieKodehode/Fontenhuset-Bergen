import { StyleSheet, Text,Image, View, FlatList, ScrollView } from 'react-native';
import { CarouselHomeElement, CarouselSectionElement, CarouselMeetingElement } from './CarouselElement';
import { sectionData, homeData } from '../Data';
import { useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';



//Flatlist that scrolls through the elements


export function CarouselHome({carouselData}){

   const navigation = useNavigation()

   return(
    <ScrollView style={styles.ScrollView} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} bounces={false}>
    <View style={styles.homeContainer}>
       
      
      <View key={`ViewThree-${carouselData.id}`} style= {styles.homeContainer}>
              <CarouselHomeElement onPress={() => navigation.push('Enheter')} img={carouselData[0].image} title={carouselData[0].header} CarouselKey={`carousel-${carouselData.id}`} text={carouselData[0].text} />
              <CarouselHomeElement onPress={() => navigation.push('Enheter')} img={carouselData[1].image} title={carouselData[1].header} CarouselKey={`carousel-${carouselData.id}`} text={carouselData[1].text} />
              <CarouselHomeElement onPress={() => navigation.push('Meeting')} img={carouselData[2].image} title={carouselData[2].header} CarouselKey={`carousel-${carouselData.id}`} text={carouselData[2].text} />
              <CarouselHomeElement onPress={() => navigation.push('Enheter')} img={carouselData[3].image} title={carouselData[3].header} CarouselKey={`carousel-${carouselData.id}`} text={carouselData[3].text} />
      </View>
              
    </View>       
    </ScrollView>
   )
}

export function CarouselMeeting({carouselData}){

    

    return(

         <ScrollView style={styles.ScrollView} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} bounces={false}>
            <View style={styles.container}>
                
                {carouselData.map((carousel) => {
                return(
                <View  key={`ViewTwo-${carousel.id}`}>
                    <CarouselMeetingElement   img={carousel.image} title={carousel.header} CarouselKey={`carousel-${carousel.id}`} info={carousel.info}/>
                </View>  ) 
            
                })}      
            </View>
        </ScrollView>
    

    )


}



// carousel for the meeting and enhet section
export function Carousel({carouselData}){

    

    return(

         <ScrollView style={styles.ScrollView} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
             
            {carouselData.map((carousel) => {
            return(
            <View  key={`ViewTwo-${carousel.id}`}>
                <CarouselSectionElement img={carousel.image} title={carousel.header} CarouselKey={`carousel-${carousel.id}`} info={carousel.info}/>
            </View>  ) 
           
            })}      
        </View>
        </ScrollView>
    

    )


}




const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 80,
        justifyContent: 'space-evenly', 
        
        
    },

    ScrollView: {
        marginHorizontal: 20,
        
    }, 

    homeContainer:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 35,
        justifyContent: 'space-between'

    }




    
})


            /*<CarouselMeetingElement  image = {require('../assets/vasking.jpg')} text ={'vasking'}/>
            <CarouselMeetingElement  image = {require('../assets/Regnskap.png')} text={'dokumenter'}/>
            <CarouselMeetingElement  image = {require('../assets/Regnskap.png')} text={'resepsjon'}/>
            
            <CarouselHomeElement image ={require('../assets/møte.jpg')} text={'Møter'}/>
            <CarouselHomeElement image ={require('../assets/cafe.jpg')} text={'Cafe koppen'}/>
            <CarouselHomeElement image ={require('../assets/fritid.jpg')} text={'Fritid'}/>

            <CarouselSectionElement  source ={props.source} text ={props.text} info={props.info}/>

            keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}


            <FlatList
                data={sectionData}
                renderItem ={({item}) =>
            

            <CarouselSectionElement id={item.Meeting.id} img={item.Meeting.image} info={item.Meeting.info} header={item.Meeting.header}/>


            <CarouselSectionElement key={`Carousel-${id}`} img={image} info={info} header={header}/>

            <CarouselSectionElement img={props.img} info={props.info} header={props.header}  key={props.key}  />


            key={`View-${id}`}


            const [data, setData] = useState(sectionData)

    useEffect(async()=>{
      fetch('Data/sectionData')
      .then(sectionData =>{
          console.log(sectionData)
      }) 
    }, [])

    })}
            */