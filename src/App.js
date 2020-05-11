import React from 'react';
import axios from 'axios'
import Countries from './pages/Countries/index';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        countries: [],
        loading: false
      }
  }
  
  async componentDidMount(){
      this.setState({loading: true});
      
      const response = await axios.get('https://restcountries.eu/rest/v2/all');

      this.setState({countries: response.data, loading: false});
  }
  
  render(){
    const {countries, loading} = this.state;
    return (
      <>
        {loading? 
        (<h2>Carregando...</h2>)
        : 
        <Countries country={countries} />
        
      }
      </>
    );
  }
}

export default App;

//!=''? (countries) : (<h2>Carregado.</h2>) 