import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import Home from './components/Home';
import Meeting from './components/Meeting';
import Section from './components/Section'
import Profile from './components/Profile';
import Kontakt from './components/Kontakt';
import Info from './components/Info';
import { Footer } from './components/Footer';
import { homeData, sectionData, meetingData } from './Data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";



export function MapHome() {
  

  return (
    <View>
       
             {homeData.map((home)=>{
                return(
         
                  <Home key={ `Home-${home.id}`} carouselData={home.carouselle} headerImg={home.img} header={home.text} />
          
        )
        })}
    </View>  
)}

export function MapSection(){

  const [section, setSection] = useState(0)

  const clickHandler= ()=> {
   

    if(section === sectionData.length-1){
     return setSection(0)
    }
   

    setSection(prevSection => prevSection+1)
 
     
  }

  const backClick= ()=>{
   
    if(section === sectionData.length-3){
      return setSection(2)
     }

    setSection(prevSection => prevSection-1)

  }


      return(

      <View>
        
        <View key={`View-${sectionData[section].id}`}>
          <Section backClick={backClick} press={clickHandler}  key={ `Section-${sectionData[section].id}`} carouselData={sectionData[section].carouselle} headerImg={sectionData[section].img} mainHeader={sectionData[section].title}  />
        </View>
         
       </View>
)



}

export function MapMeeting(){


  return(

    
    <View>
     {meetingData.map((meeting) => {
                  return (
      <View key={`ViewTwo-${meeting.id}`}>
        <Meeting key={ `Meeting-${meeting.id}`} carouselData={meeting.carouselle} headerImg={meeting.img} mainHeader={meeting.title}  />
      </View>
      
      )}) 
      
    } 
    </View>



  
)}

const Stack = createNativeStackNavigator();

export default function App(){
  


  return (
  
      <NavigationContainer styles={styles.container}>
        <Stack.Navigator   initialRouteName="Home" >
          <Stack.Screen name="Home" component={MapHome}  options={{headerShown: false}}/>
          <Stack.Screen name="Meeting" component={MapMeeting} />
          <Stack.Screen name="Enheter" component={MapSection} />
          <Stack.Screen name ="Profile" component={Profile}/>
          <Stack.Screen name ="Kontakt" component={Kontakt}/>
          <Stack.Screen name ="Info" component={Info}/>
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>

    

  );
}







const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
   
  },
});


/*header={'Hvilke møter har vi'} image={require('./assets/møte.jpg')} carouselImage={sectionData.Meeting.Meny.image} text={sectionData.Meeting.Meny.header} info={sectionData.Meeting.Meny.info}
header={'Kontor'} image={require('./assets/arbeidsenheter.jpg')} carouselImage={sectionData.ArbeidsEnheter.Kontor.Arbeidsoppgaver.resepsjon.image} text={sectionData.ArbeidsEnheter.Kontor.Arbeidsoppgaver.resepsjon.Header} info={sectionData.ArbeidsEnheter.Kontor.Arbeidsoppgaver.resepsjon.Info}

key={`View-${id}`}

<Home key={ `Home-${home.id}`} carouselData={home.carouselle} headerImg={home.img} header={home.text} />

<Stack.Screen name="Home" component={MapHome} />


export function SectionNav(){

  return(
  <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Kontor" component={MapSection[0]} />
          <Stack.Screen name="Kjøkken" component={MapSection[1]} />
          <Stack.Screen name="Media" component={MapSection[2]} />
        </Stack.Navigator>
  </NavigationContainer>
  )
  }


   {sectionData.map((section) => {
                    return (
 

    )})
*/