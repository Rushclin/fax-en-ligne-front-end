// Importation de React
import React, { Component } from 'react'

// Navigation
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

// Importation des screens
import ListFax from '../../sreens/ListeFax'

// Grace a screen, on cree les pages de notre navigation
//functions
const FaxStack = createNativeStackNavigator ();

class ListStack extends Component{
    render(){
        return(
            <>
                <FaxStack.Navigator
                initialRouteName="ListFax"
                >

                    <FaxStack.Screen 
                        name="Liste des faxs" 
                        component = { ListFax }
                    />
                
                </FaxStack.Navigator>
            </>
        )
    }
}

export default ListStack;