import { useState, useEffect, ChangeEvent } from 'react';    // For functional

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonster] = useState<Monster[]>([]);
  const [filterMonsters, setFilterMonsters] = useState(monsters);
  

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonster(users)
    };

    fetchUser();
  }, [])   // Pass a empty arr to never using after first time
  
  useEffect(() => {
    const newFilterMonsters = monsters.filter(el => (el.name.toLowerCase()).includes(searchField));
    setFilterMonsters(newFilterMonsters);
  }, [monsters, searchField]);  // Will use this function when monster and searchField change

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
        onChangeHandler={onSearchChange} 
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