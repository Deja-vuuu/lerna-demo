import './App.css';
import { LuckyWheel } from 'react-luck-draw'

import React from 'react';
class App extends React.Component{

  render(){
    return(
      <LuckyWheel width="300px" height="300px"></LuckyWheel>
    )
  }
}
export default App;