import React, { Component } from 'react';
import Togles from "./Togles";
import Img from "./Img";
import Block from "./Block";
import Paragraf from "./Paragraf";
import Formes from "./Formes";
import './App.css';



const Obj = {
    smalltitle: 'Tiger of Sweden',
    title: 'LEONARD COAT',
    text: 'lorem10uhcguguhfcnuaouhbfuerfgubhfcbuhhddgdggdgdgdhdhhdhdhd',
    price: 300
  };

class App extends Component {
  render() {
    return (
      <div className="App">
        <Img src={"https://marytrufel.ru/uploads/dress/2818/photo/9198/x912_20_Meicy.jpg"}/>
        <Block item={Obj}/>
        <Togles >
          <Paragraf text = {<Formes/>}/>
        </Togles> 

      </div>
    );
  }
}

export default App;
