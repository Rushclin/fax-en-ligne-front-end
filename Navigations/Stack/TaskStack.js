// Importation de React
import React from 'react'

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
                <TaskRootStack.Navigator
                initialRouteName="ListFax"
                >

                    <TaskRootStack.Screen 
                        name="Liste des faxs" 
                        component = { ListFax }
                    />
                
                </TaskRootStack.Navigator>
            </>
        )
    }
}

export default ListStack;