
import React, { Component } from 'react'
import { Button, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'
import Headers from './Headers';
import { Header } from 'react-native-elements';
import { Divider } from 'react-native-paper';

import { AntDesign, FontAwesome, Octicons } from '@expo/vector-icons';
function Home() {

  
  const [incr, setIncr] = React.useState([]);
  const renderButtons = () => {
    return incr.map((item, index) =>

      <Headers />

    )

  }

  return (

    <View style={{
      marginTop: 40, flex: 1, flexDirection: 'column', alignItems: 'stretch',
    }}>

      <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>

        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
         
          <Text style={{ textAlign: 'center', fontWeight: '500', color: "red", fontSize: 25, }}>Home</Text></View>
        
        <View style={{ justifyContent: 'flex-end' }}>

          <TouchableOpacity onPress={() => setIncr([...incr, "Unique Index of new Button"])} title="home screen">
            <View ><Octicons name="plus" size={30} color="red" /></View>
      
            </TouchableOpacity>

        </View>
      </View>
      <View style={{ height: 1, backgroundColor: 'black' }} />

      {renderButtons()}

    </View>






  )
}


export default Home
