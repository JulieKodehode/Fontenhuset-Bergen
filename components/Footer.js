import { StyleSheet, Text,Image, View, ScrollView, InteractionManager} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export function Footer(){

const navigation = useNavigation()

return(

<View style={styles.footer}>
    <View style={styles.iconBox} >
        
        <MaterialCommunityIcons name="food-outline" size={32} style={styles.icons}   />
        <Text style={styles.iconText}>Bestill lunsj</Text>
    </View>
    <View style={styles.iconBox} >
      <Ionicons name="clipboard-outline" size={32} style={styles.icons}  />
      <Text style={styles.iconText}>Meny</Text>
    </View>
    <View style={styles.iconBox} >
         <MaterialCommunityIcons name="email-outline" size={32} style={styles.icons} onPress={() => navigation.navigate('Kontakt')}   />
         <Text  style={styles.iconText}>Kontaktinfo</Text>
    </View>
    <View style={styles.iconBox}  >
         <Ionicons name="person-outline" size={32}  style={styles.icons} onPress={() => navigation.navigate('Profile')} />
         <Text style={styles.iconText}>Meg</Text>
    </View>
</View>)

}


const styles = StyleSheet.create({

    footer:{
        display: 'flex',
        flexDirection: 'row',
        height: 65,
        width: 400,
        justifyContent: 'space-evenly',
        borderTopWidth:1,
        borderTopColor: '#ADADAD'
        /*shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5*/


     },

     iconBox:{
         display: 'flex',
         alignItems:'center',
         fontSize: 9,
         textAlign: 'center',
         marginRight: 10,
         marginTop: 3

     },

     icons: {
       
        color:"#FE9191",
        marginTop: 5,
        marginBottom: 7,
        width: 32,
        height: 32, 

     }, 
     iconText:{
         color: '#7B7B7B',
         marginBottom: 2, 
         width: 55,
         fontSize: 9,
         textAlign:'center'
         
     }

})



/*<Image style={styles.icons} size={38} source={require('../assets/Fork&Knife.svg')}/>*/