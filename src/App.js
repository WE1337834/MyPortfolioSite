import React from 'react';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import './index.css';

class App extends React.Component{
  render(){
    return(
      <>
        <Header />
        <Main />
      </>
      
    )
  }
}
export default App;
