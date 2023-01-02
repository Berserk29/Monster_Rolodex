// import { Component } from 'react';   // For class
import { useState, useEffect } from 'react';    // For functional

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// FONCTIONAL
const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonster] = useState([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setMonster(users));
  }, [])   // Pass a empty arr to never using after first time
  
  useEffect(() => {
    const newFilterMonsters = monsters.filter(el => (el.name.toLowerCase()).includes(searchField));
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchField]);  // Will use this function when monster and searchField change

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
        OnChangeHandler={onSearchChange} 
        placeholder='Search monsters' 
        className='search-box'
      />
      <CardList monsters={filterMonsters}/>
    </div>
  );
}


// CLASS
/*
class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    this.setState(() => {
      return {monsters: users}
    })
  }

  OnSearchChange = (e) => {
    this.setState(() => {
      const searchField = e.target.value.toLowerCase();
      return { searchField }
    })
  }

  render(){
    const { monsters, searchField } = this.state;
    const { OnSearchChange } = this;

    const filterMonsters = monsters.filter(el => (el.name.toLowerCase()).includes(searchField));

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox 
          OnChangeHandler={OnSearchChange} 
          placeholder='Search monsters' 
          className='search-box'
        />
        <CardList monsters={filterMonsters}/>
      </div>
    );
  } 
}

*/
export default App;