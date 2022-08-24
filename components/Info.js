import { StyleSheet, Text,Image, View, ScrollView, Modal, Pressable, FlatList} from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 


export default function Info(){

    return(

        <View style={styles.mainDiv}>

               <Text style={styles.text}> Denne uken</Text>

               
                    <View style={styles.infoBox}> 
                        <ScrollView>
                               <Text style={styles.inboxText}> 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </Text>
                        </ScrollView>
                    </View>
               
             
              
               <Text style={styles.text}> Dagen idag</Text>
                
                    <View style={styles.infoBox}> 
                      <ScrollView>
                               <Text style={styles.inboxText}> 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </Text>
                      </ScrollView>
                    </View>
             
             
              

              
           

        </View>
    )
}


const styles = StyleSheet.create({

    mainDiv:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'

    },

    infoBox:{
        borderWidth: 1,
        borderColor: '#7B7B7B',
        width: 300,
        height: 180,
        borderRadius: 10, 
        marginTop: 10
    },
    text:{ 
        marginTop: 40,
        color:'black',
    },
    inboxText: {
        padding:10
    }
})
