import { StyleSheet, Text,Image, View, ScrollView} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


export function Footer(){

return(

<View style={styles.footer}>
    <View style={styles.iconBox} >
        <Image style={styles.icons} size={32} source={require('../assets/Fork&Knife.svg')}/>
        <Text style={styles.iconText}>Bestill lunsj</Text>
    </View>
    <View style={styles.iconBox} >
      <Ionicons name="clipboard-outline" size={32} style={styles.icons}  />
      <Text style={styles.iconText}>Meny</Text>
    </View>
    <View style={styles.iconBox} >
         <MaterialCommunityIcons name="email-outline" size={32} style={styles.icons}  />
         <Text style={styles.iconText}>Kontaktinfo</Text>
    </View>
    <View style={styles.iconBox} >
         <Ionicons name="person-outline" size={32} style={styles.icons} />
         <Text style={styles.iconText}>Meg</Text>
    </View>
</View>)

}


const styles = StyleSheet.create({

    footer:{
        display: 'flex',
        flexDirection: 'row',
        height: 70,
        width: 410,
        marginTop: 170,
        justifyContent: 'space-around',
        borderTopWidth:1,
        borderTopColor: '#ADADAD',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5


     },

     iconBox:{
         display: 'flex',
         fontSize: 9,
         justifyContent:'space-around',
         textAlign:'center'

     },

     icons: {
       
        color:"#FE9191",
        marginTop: 10,
        marginBottom: 7,
        marginLeft: 20,
        marginRight: 20,
        width: 25,
        height: 25, 

     }, 
     iconText:{
         color: '#7B7B7B',
         marginBottom: 2, 
         marginLeft: 4
         
     }

})