import React ,{Component} from 'react'
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Search from './Components/searchbar/Searchbar';

class App extends Component 
{
  render(){
    return (
      <div className="App">
       <Navbar />
       <Search />
      </div>
    );
  }
}

export default App;
