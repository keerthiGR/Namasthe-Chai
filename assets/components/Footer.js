import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default  function Footer() {
  return (
    <View style={styles.footer}>
      
      <Image 
            source={require('../img/lessthan.png')}
            style={[styles.image,styles.less]}
      />
      <Image 
            source={require('../img/greaterthan.png')}
            style={styles.image}
      />
      <Image 
            source={require('../img/share.png')}
            style={styles.image}
      />
      <Image 
            source={require('../img/book.png')}
            style={styles.image}
      />
      <Image 
            source={require('../img/copy.png')}
            style={styles.image}
      />
    </View>
  )
}
 const styles=StyleSheet.create({
        footer : {
            padding : 20,
            width:'100%',
            backgroundColor: 'white',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around'
        },
        image : {
            flex:1,
            resizeMode:'contain',
            width : 30,
            height:30

        },
        less : {
            width:20,
            height:30,
        }
 });