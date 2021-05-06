import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood'

class App extends React.Component {
  state= {
    foods: foods,
    filteredFoods: foods,
    searchKeyword:''
  }

 addFood = (newFood) => {
    this.setState({
        foods: this.state.foods.concat(newFood)
    });
 } 

 handleSearch = (event) => {
  this.setState({
    searchKeyword: event.target.value,
    filteredFoods: this.state.foods.filter((food)=> 
    food.name.toLowerCase()
    .startsWith(event.target.value.toLowerCase()))
    });
 }

  render() {
    return (
      <div className="App">
      <input onChange={this.handleSearch} placeholder="Search FOOD 🍕 🍔 🌭" />
      <AddFood addFood={this.addFood}/>
        {this.state.filteredFoods.map((item, index) => {
          return(
            <FoodBox key={index} name={item.name} calories={item.calories} image={item.image} />
          )
        })
        }
      </div>
    );
  }
  
}

export default App;
