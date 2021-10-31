import React, { Component } from "react";

// Importation de la navigation
import { NavigationContainer } from '@react-navigation/native';

import ListStack from "./Navigations/Stack/TaskStack";

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <NavigationContainer>
                  
          <ListStack /> 
      
      </NavigationContainer>
    )
  }
}

export default App;