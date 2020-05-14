import React, {Component} from 'react';
import {Paises, Header, Card} from './styles';
import Search from './../../components/BarraPesquisa/BarraPesquisa'

class Countries extends Component{
    constructor(props){
        super(props);
        this.state = {
            paises: this.props.country,
            paisesFilter: this.props.country,
            pesquisa: ""
        }
    }

    handleSearch = event => {
        event.preventDefault();
    
        const value = event.target.value;
        
        this.setState({pesquisa: value, paisesFilter: this.filterSearch(value)});
    
      }
      filterSearch = (value) => {
        const {paises} = this.state;
        
        return  paises.filter(pais => (pais.name.toLowerCase()).includes(value.toLowerCase()));
        
    }
    render(){
        const {paisesFilter, pesquisa} = this.state;
        
        return (
            <>
                <Header>
                    <h1>Lista de países </h1>
                    <img src="" alt=""/>
                </Header>

                <Paises>
                    <Search handleSearch={this.handleSearch} value={pesquisa}/>
                    { 
                    paisesFilter.map((pais) => {
                        return (
                            <Card key={pais.name.toString()}>
                                <img src={pais.flag}/> 
                                <h4>
                                Pais:{pais.name}
                                </h4> 
                                <h4>
                                Continente:{pais.region}
                                </h4>
                            </Card>
                    )
                    
                    })            
                }
                    
                </Paises>
            </>
        )
    }
}

export default Countries;