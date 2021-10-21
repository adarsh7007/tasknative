import React from 'react'

import { AntDesign, Feather, FontAwesome,Octicons } from '@expo/vector-icons';
import { Button, Text, View, TouchableHighlight,TouchableOpacity } from 'react-native'

function Cells() {
    const [incr, setIncr] = React.useState(0)



    return (

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginVertical: 12 }}>
            <View><Text style={{ color: 'red', fontSize: 25, fontWeight: '900' }}>Cell</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

                <TouchableOpacity onPress={() => setIncr(incr + 1)} ><View >
                      <Octicons name="plus" size={30} color="red" /></View></TouchableOpacity>
                <View><Text style={{ color:'red', marginHorizontal: 10 }}>{incr}</Text></View>
                <TouchableOpacity onPress={() => setIncr(incr - 1)} ><View style={{ borderWidth: 1, borderRadius: 2, paddingHorizontal: 5,  borderColor: '#F9F9F9', backgroundColor: "#F9F9F9" }}>
                    
                    <Octicons name="dash" size={32} color="red" />
                    </View></TouchableOpacity>
            </View>

        </View>

    );

}

export default Cells
