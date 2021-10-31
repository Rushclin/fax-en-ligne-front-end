import React from "react";
import { Text } from "react-native";

// Importation de la navigation
import { NavigationContainer } from '@react-navigation/native';

import ListStack from "./Navigations/Stack/TaskStack";

const App = () => {
  return(
    <NavigationContainer>
                
        <ListStack /> 
    
    </NavigationContainer>
  )
}

export default App;