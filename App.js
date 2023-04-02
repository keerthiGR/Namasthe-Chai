import React from 'react';
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native';
import Footer from './assets/components/Footer';



import Home from './assets/components/Home';
import Items from './assets/components/Items';



export default function App() {
  return (
    <ScrollView>
          <View style={styles.main}>
                <Home/>
                <Items/>
                <Footer/>
          </View>
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
   main: {
     backgroundColor:'rgb(219, 214, 214)'
   }
});
