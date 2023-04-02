import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';

export default function Items() {
    const[data,setItems]=useState([
        {
            id : 1,
            backgroundColor:'violet',
            offer : '3-in-1-Premixes',
            title : 'Kadak Chai',
            pack : 'pack of 13',
            gram : '350 g',
            price : '4000',
            finalprice: '3690',
            rate : 4.5
        },
        {
            id : 2,
            backgroundColor:'lightgreen',
            offer : '3-in-1-Premixes',
            title : 'Kasturi Chai',
            pack : 'pack of 18',
            gram : '450 g',
            price : '6000',
            finalprice: '5000',
            rate : 4.0
        },
        {
            id : 3,
            backgroundColor:'pink',
            offer : '3-in-1-Premixes',
            title : 'Manglore Chai',
            pack : 'pack of 13',
            gram : '350 g',
            price : '6000',
            finalprice: '3690',
            rate : 4.8
        },
        {
            id : 4,
            backgroundColor:'lightskyblue',
            offer : 'Herbal Teas',
            title : 'Banglore chai',
            pack : 'pack of 25',
            gram : '400 g',
            price : '8000',
            finalprice: '6000',
            rate : 5
        },
        {
            id : 5,
            backgroundColor:'violet',
            offer : '3-in-1-Premixes',
            title : 'Kadak Chai',
            pack : 'pack of 13',
            gram : '350 g',
            price : '4000',
            finalprice: '3690',
            rate : 4.5
        },
        {
            id : 6,
            backgroundColor:'lightgreen',
            offer : '3-in-1-Premixes',
            title : 'Kasturi Chai',
            pack : 'pack of 18',
            gram : '450 g',
            price : '6000',
            finalprice: '5000',
            rate : 4.0
        },
        {
            id : 7,
            backgroundColor:'pink',
            offer : '3-in-1-Premixes',
            title : 'Manglore Chai',
            pack : 'pack of 13',
            gram : '350 g',
            price : '6000',
            finalprice: '3690',
            rate : 4.8
        },
        {
            id : 8,
            backgroundColor:'lightskyblue',
            offer : 'Herbal Teas',
            title : 'Banglore chai',
            pack : 'pack of 25',
            gram : '400 g',
            price : '8000',
            finalprice: '6000',
            rate : 5
        },
        
        
    ]);
  return (
   
          <View style={styles.main}>
            {data.map((items)=>{
                return(
                   <View key={items.id}>
                        <View style={{  
                            backgroundColor:`${items.backgroundColor}`,
                            width:180,
                            borderTopLeftRadius:40,
                            borderTopRightRadius:40,
                            borderBottomRightRadius:5,
                            borderBottomLeftRadius:5,
                        
                            marginTop:20,
                            marginBottom:20
                         }}>
                            
                        <View style={{alignItems:'center'}} >
                             <View style={{
                                backgroundColor:`${items.backgroundColor}`,
                                top:-24,
                                width:80,
                                height:50,
                                borderRadius:140,
                              }}>

                             </View>
                        </View>
                        
                        <View style={styles.lab} >
                             <Image source={require('../img/lab.png')} 
                                   style={{resizeMode:'stretch',
                                           height:30,
                                           width:60,
                                           top:-16,
                                         }}/>
                             <Image source={require('../img/heart.png')}
                                  style={{resizeMode:'contain',
                                          height:24,
                                          width:24,
                                          top:-11,
                                          right:16
                                        }}/>
                        </View>
                        <View style={{alignItems:'center',
                                      top:-22,
                                      zIndex:1}} >
                           <Image source={require('../img/calm.png')} 
                                style={{width:100,
                                        height:110,
                                        resizeMode:'contain',
                                        position:'relative'
                                      }}
                            />
                        </View>
                        
                        <View style={{backgroundColor:'white',
                                    marginTop:-50,
                                    paddingTop:23,
                                    paddingLeft:10,
                                    paddingRight:10,
                                    borderBottomRightRadius:3,
                                    borderBottomLeftRadius:3}} >
                            <Text style={{color:'rgb(222, 110, 13)',
                                        fontSize:18,}}>
                                        {items.offer}
                            </Text>

                            <Text style={{fontSize:20,
                                            fontWeight:'bold'
                                        }}>
                                        {items.title}
                            </Text>

                            <View style={{display:'flex',
                                         flexDirection:'row',
                                         marginTop:1
                                        }}>
                                <Text style={{color:'rgb(94, 85, 85)',
                                                fontSize:18,
                                            }}>
                                            {items.pack} 
                                </Text>

                                <Text style={{borderWidth:1,
                                                height:28,
                                                width:0,
                                                marginLeft:6,
                                                marginRight:4,
                                                borderColor:'rgb(94, 85, 85)'
                                            }}>

                                </Text>
                                <Text style={{color:'rgb(94, 85, 85)',
                                                fontSize:18,
                                            }}> 
                                            {items.gram}
                                </Text>
                            </View>

                            <Text style={{height:0,borderWidth:1}}></Text>

                            <View style={{display:'flex',
                                        flexDirection:'row',
                                        marginBottom:15,
                                        justifyContent:'space-around'}}>

                                <Text style={{textDecorationLine:'line-through',
                                                marginTop:0,
                                                fontSize:17
                                            }}>
                                            {'\u20B9'}{items.price}
                                </Text>

                                <Text style={{fontSize:18,fontWeight:'bold'}}>{'\u20B9'}{items.finalprice}</Text>

                                <Text style={{borderWidth:1,
                                                height:25,
                                                marginLeft:1,
                                                borderColor:'rgb(94, 85, 85)'
                                            }}>

                                </Text>

                                <Text style={{fontSize:18}}>
                                    <Image source={require('../img/star.png')} style={{resizeMode:'contain',
                                                                                        height:15,
                                                                                        width:15
                                                                                      }}/> 
                                                                                      {items.rate}
                                </Text>
                            </View>

                            <View style={{alignItems:'center',bottom:-15} }>
                                <Text style={[styles.button,styles.shadow]}>
                                    Add to Cart
                                </Text>
                            </View>

                        </View>
                    </View>
                 </View>
                )
            })}
           
         
          </View>
   
      
  );
}

const styles = StyleSheet.create({
   main: {

       display:'flex',
       flexDirection:'row',
       flexWrap:'wrap',
       justifyContent:'center',
       width:'100%',
       gap:10
   },
   
   button: {
        backgroundColor:'rgb(222, 110, 13)',
        padding:6,
        width:100,
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:15,
        borderRadius:20,
        marginTop:-14,
   },
   shadow:{
       
        shadowColor:'white',
        elevation:25
   },
   lab:{
       
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    
   },
   
    
});