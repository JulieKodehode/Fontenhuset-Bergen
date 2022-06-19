import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import Home from './components/Home';
import Meeting from './components/Meeting';
import Section from './components/Section'
import { homeData, sectionData, meetingData } from './Data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



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
      return(

      <View>
       
        <View key={`View-${sectionData[0].id}`}>
          <Section key={ `Section-${sectionData[0].id}`} carouselData={sectionData[0].carouselle} headerImg={sectionData[0].img} mainHeader={sectionData[0].title}  />
          <Section key={ `Section-${sectionData[1].id}`} carouselData={sectionData[1].carouselle} headerImg={sectionData[1].img} mainHeader={sectionData[1].title}  />
        </View>
        
       </View>
)}

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
      
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MapHome} />
        <Stack.Screen name="Meeting" component={MapMeeting} />
        <Stack.Screen name="Enheter" component={MapSection} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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