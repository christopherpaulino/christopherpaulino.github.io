import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
//import {Card} from './components/card/card.component';
import { CardList } from './components/card-list/card-list.component';
class App extends Component{

constructor(props){
  super(props)

  this.state = {
    marcas: []
  }


}
  
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => {
    console.log(users); 
    this.setState({marcas:users})})
 }


  render(){

    return(
      <div className="App">
        <CardList name='Jose'/>
        <div className="App-header">
          {
            this.state.marcas.map(element => (<h1 key={element.id}>{element.name}</h1>) )
          }
        </div>
     </div>
  
    )
  }
}

export default App;
