import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
   //constructor används för att skapa ett local state för App (this.state)
   constructor() {
      //måste användas före this används för att det ska fungera
      super()
      //skapar ett objekt state för App, vilket sparar nuvarande robots och searchfield
      this.state = { 
         robots: [],
         searchfield: ''
      }
   }

   //is invoked immediately after the component is inserted into the DOM tree
   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
   }

   //own function, use this syntax for own functions!
   onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
   }

   //renders teh app itself
   render() {
   const {robots, searchfield} = this.state;
   //saves in filteredRobots which robots to display in CardList   
   const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
   })
   if (!robots.length){
      return <h1>Loading</h1>
   } else {
      return(
         <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            {/* sends variable searchChange with value of this.state.searchfield to Searchbox.js */}
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
               {/* sends array robots with values from filteredRobots to CardList.js */}
               <CardList robots={filteredRobots}/>
            </Scroll>
         </div>
         );
      }
   }
}   

export default App;