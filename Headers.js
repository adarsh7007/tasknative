import React from 'react'
import { Button,Text,View,TouchableHighlight,TouchableOpacity } from 'react-native'

import { AntDesign,FontAwesome ,Octicons} from '@expo/vector-icons';
import Cells from './Cells';
function Headers() {
  
  const [incr, setIncr] = React.useState([]);
const renderButtons = () =>{
  return incr.map ((item,index)=> 
                      
    <Cells/>

                       )
                       
} 

  return (
    <View style={{ marginTop:40, flex:1,flexDirection:'column',alignItems: 'stretch',
  
     
  }}>

<View style={{flexDirection:'row',marginHorizontal:15}}>
<View style={{flex:1,}}><Text style={{textAlign:'left' ,fontWeight:'900' ,color:"red",fontSize:25,}}>Header</Text></View>
<View style={{justifyContent: 'flex-end'}}>
     <TouchableOpacity onPress={() => setIncr( [...incr , "Unique Index of new Button"] )} title="home screen"> 
     <View >
     <Octicons name="plus" size={30} color="red" />
     </View></TouchableOpacity> 
  
     </View>
     </View>
     <View style={{ height: 2, backgroundColor: 'black'}} />

 {renderButtons()}
 <View style={{ height: 1, backgroundColor: 'black'}} />

     </View>

   



    )
}

export default Headers
