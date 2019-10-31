import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
//import {Card} from './components/card/card.component';
import { CardList } from './components/card-list/card-list.component';
import {Label} from './components/label/label.component'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component{

constructor(props){
  super(props)

  this.state = {
    monsters: [],
    searchField :''
  }

  //especificamos que va a obtener el context del constructor
  // this.handlerChange = this.handlerChange.bind(this)


}
  
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => {
    console.log(users); 
    this.setState({monsters:users})})
 }

 //when we use as arrow fucntion we dont need to bind the function
 handlerChange = e =>{
   this.setState({searchField: e.target.value},
    () =>{console.log(this.state);})
 }

  render(){

    const {monsters,searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) )

    return(
      <div className="App">
        <div className="App-header">
          <h1>Monsters Rolodex</h1>
          <SearchBox
          placeholder ='Search Monsters'
          handlerChange = {this.handlerChange}
          />
          <CardList monsters={filteredMonsters}></CardList>
         </div>
      </div>
    )
  }
}

export default App;
