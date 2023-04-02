
import { useState } from 'react';
import { StyleSheet, Text, View ,Image, TextInput} from 'react-native';

export default function Home() {
  const [search,setSearch]=useState('false');
  const [home,setNav]=useState('true');
  function searches(){
      setSearch(search==='false' ? 'true' : 'false');
  }
  function open(){
      setNav('false');
  }
  function close(){
      setNav('true');
  }
  return (
    <View>
      {home==='true'?
        <View>
        <View style={styles.back}>
          
          <View style={styles.container}>
      
              <View>
                    <Text onPress={open} style={{height:60,marginTop:4}}><Image  source={require('../img/menu.jpg')} style={styles.menu}></Image></Text>
              </View>
          
              <View>
                  <Image source={require('../img/logo.png')} style={styles.logo}/>
              </View>

              <View style={styles.list}>
                  <View style={styles.nav}>
                      <Text onPress={searches} style={{marginRight:74}}><Image source={require('../img/search.gif')} style={styles.search}/></Text>
                  </View >

                  <View style={styles.nav}>
                        <Image source={require('../img/cart.jpg')} style={styles.cart}/>
                  </View>

                  <View style={styles.nav}>
                        <Image source={require('../img/user.jpg')} style={styles.user}/>
                  </View>

              </View>  
          </View> 
          
          {  search==='true'&&
          <View style={{alignItems:'center'}}>
               <TextInput style={{
                  width:'90%',
                  backgroundColor:'white',
                  marginTop:0,
                  marginBottom:20,
                  padding:8,
                  borderRadius:7,
                  color:'rgb(222, 110, 13)',
                  fontSize:17,
               }} placeholder=' Search' 
                 placeholderTextColor={'rgb(222, 110, 13)'}
               ></TextInput></View> }

          <View style={styles.image}>
            <Image source={require('../img/home.png')} style={{resizeMode:'stretch',width:230,height:160,marginLeft:-20}}/>
          </View>

         <View>

            <View style={styles.content}>
                <Text style={{textAlign:'center',color:'white',fontSize:23,fontWeight:'bold'}}>Namaste to Traditional Chai,</Text>
                <Text style={{textAlign:'center',color:'white',fontSize:23,fontWeight:'bold',marginTop:-10}}>Created for your Modern Life.</Text>
                <Text style={{textAlign:'center',color:'white',marginTop:10}}>Lorem ipsum dolor sit banni hogi   iri amet consectetur adipisicing elit. Saepe odit veniam rem, at incidunt eligendi adipisci suscipit libero provident! Voluptatem dolorum aspernatur quam exercitationem architecto pariatur, officiis ducimus sed ex.</Text>
            </View>
            
          </View>

      </View>

      <View style={styles.premium}>
          <Text style={{color:'white'}}>PremiumChai</Text>
          <Image source={require('../img/premium.png')} style={{flex:3,width:90,height:23}}/>
          <Text style={{color:'white'}}>PremiumChai</Text>
          <Image source={require('../img/premium.png')} style={{flex:3,width:95,height:23}}/>
          <Text style={{color:'white'}}>PremiumChai</Text>
          <Image source={require('../img/premium.png')} style={{flex:3,width:95,height:23}}/>
      </View>
      
      <View style={styles.box}>
          <View style={{
            alignItems:'center',
            padding:10,
            backgroundColor:'#f6a78d',
            width:'25%',
            
          }}>
              <Image source={require('../img/tea.png')} style={{height:27,width:26}}/>
              <Text style={{color:'white',marginTop:3}}>3-IN-1 </Text>
              <Text style={{color:'white',marginTop:-4}}> Premix</Text>
        </View>

        <View style={{
            alignItems:'center',
            padding:10,
            backgroundColor:'rgba(79, 142, 79, 0.504)',
            width:'25%',
            
          }} >
              <Image source={require('../img/cofee.png')} style={{height:27,width:26}}/>
              <Text style={{color:'white'}}>Hearbal</Text>
              <Text style={{color:'white',marginTop:-4}} >Teas</Text>

          </View>

          <View style={{
            alignItems:'center',
            padding:10,
            backgroundColor:'#9470dbde',
            width:'25%',
            
          }}>
              <Image source={require('../img/sweet.png')} style={{height:30,width:30}}/>
              <Text style={{color:'white'}}>Snacks &</Text>
              <Text style={{color:'white',marginTop:-4}}>Sweets</Text>
          </View>
          
          <View style={{
            alignItems:'center',
            padding:10,
            backgroundColor:'rgb(241, 126, 164)',
            width:'25%',
            
          }}>
              <Image source={require('../img/leaf.png')} style={{height:30,width:30}}/>
              <Text style={{color:'white'}}>Tea</Text>
              <Text style={{color:'white',marginTop:-4}}>Leaves</Text>
          </View>
      </View>

      <View style={styles.packet}>
          <Image  source={require('../img/packets.jpg')} style={{width:'92%',height:200,borderRadius:10}}/>
      </View>

      </View>:

      <View style={{
                    backgroundColor:'rgb(222, 110, 13)',
                    marginBottom:20,
            }}>

           <View style={styles.home2}>
               <Text></Text>
               <Image source={require('../img/logo.png')} style={{
                marginLeft:50,
                width:100,
                height:65,
                
               }}/>
                 <Text onPress={close} style={{marginRight:33,
                               marginTop:11,
                               
                    }}><Image source={require('../img/close.png')} style={{
                    width:25,
                    height:18,
                    marginRight:10,
                    marginTop:15
               }}/></Text>
           </View>
           <View style={{alignItems:'center'}}>
               <TextInput style={{
                  width:'90%',
                  backgroundColor:'white',
                  marginTop:20,
                  marginBottom:20,
                  padding:8,
                  borderRadius:7,
                  color:'rgb(222, 110, 13)',
                  fontSize:17,
               }} placeholder=' Search' 
                 placeholderTextColor={'rgb(222, 110, 13)'}
               ></TextInput>
              <View style={styles.body}>
                  <View >
                      <Image source={require('../img/home2.png')} style={{
                          resizeMode:'stretch',
                          width:170,
                          height:400,
                          marginLeft:0,
                          marginTop:90
                      }}/>
                  </View>
                  <View style={{
                        marginTop:20,
                        marginLeft:30,
                        alignItems:'flex-end',
                        
                  }}> 
                    <View style={{
                          display:'flex',
                          flexDirection:'row'
                     }}>
                        <Text style={styles.font}>Whishlist</Text>
                       <Image source={require('../img/wheart.png')} style={{
                          width:20,
                          height:20,
                          margin:3,
                          marginLeft:9
                          }}/>
                    </View>
                       
                       <Text style={styles.line}></Text>
                       <Text style={styles.font}>Shop</Text>
                       <Text style={styles.font2}>3-in-One Premix</Text>
                       <Text style={styles.font2}>Herbal Teas</Text>
                       <Text style={styles.font2}>Snacks & Sweets</Text>
                       <Text style={styles.font2}>Tea Leaves</Text>
                       <Text style={styles.line}></Text>
                       <Text style={styles.font}>Store Locator</Text>
                       <Text style={[styles.font,styles.mar]}>Contact Us</Text>
                       <Text style={[styles.font,styles.mar]}>Franchise</Text>
                       <View style={{
                           
                           display:'flex',
                           flexDirection:'row',
                           marginTop:80,
                           marginBottom:105
                       }}>
                            <Image source={require('../img/insta.png')} style={{
                                width:40,
                                height:40,
                              
                                
                            }}/>
                             <Image source={require('../img/facebook.png')} style={{
                                width:40,
                                height:40,
                                
                                marginLeft:18
                            }}/>
                            
                       </View>
                  </View>
              </View>
           </View>
      </View>
  }     
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  back:{
    backgroundColor: 'rgb(222, 110, 13)',
  },
  container: {
    margin:3,
    display: 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  list:{
    display: 'flex',
    flexDirection : 'row',
    marginTop:18,
  },
  nav:{
    marginLeft:2
  },
  menu:{
    marginTop:18,
    resizeMode:'cover',
    width:50,
    height:40,
  },
  search:{
    marginTop:8,
    marginLeft:0,
    resizeMode:'contain',
    width:20,
    height:30,
  },
  cart:{
    marginTop:8,
    marginLeft:-60,
    resizeMode:'contain',
    width:20,
    height:30,
  },
  user:{
    marginTop:8,
    marginLeft:-30,
    resizeMode:'contain',
    width:20,
    height:30,
  },
  logo:{
    marginLeft:57,
    width:90,
    height:90,
  },
  image:{
    width:'100%',
    marginTop:3,
    alignItems:'center',
    
  },
  content:{
    marginLeft:25,
    marginRight:25,
    marginTop:1,
    marginBottom:5,
    alignItems:'center'
  },
  premium:{
    padding:8,
    backgroundColor:'rgb(255, 179, 0)',
    display:'flex',
    flexDirection:'row',
    width:'100%'
  },
  box:{
    display:'flex',
    flexDirection:'row'
  },
  packet:{
    marginTop:15,
    marginBottom:15,
    alignItems:'center',
    width:'100%'
  },
  home2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
    
  },
  body : {
    display: 'flex',
    flexDirection: 'row',
    
  },
  font : {
     color:'white',
     fontWeight:'bold',
     fontSize:16,
     letterSpacing:0.5
  },
  line:{
    marginTop:18,
    marginBottom:18,
    backgroundColor:'white',
    width:130,
    height:1
  },
  font2:{
    color:'rgb(234, 223, 223)',
    marginTop:18,
    letterSpacing:0.5
  },
  mar :{
      marginTop:18
  }
});
