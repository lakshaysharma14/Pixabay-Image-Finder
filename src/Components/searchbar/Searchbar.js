import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '../selectbar/Selectbar';
import Image from '../Image-Results/Image';
import axios from 'axios';

class Searchbar extends Component 
{
    state = 
    {
        searchText:"",
        amount:15,
        apiUrl:'https://pixabay.com/api',
        apiKey:'20204642-6fe3ca626d650b4937d55a064',
        images:[]
    }
    
    //Here we are passing callback function after setting the state to fetch images
    handletextChange = (e) => {
        this.setState({ [e.target.name]:e.target.value}, ()=>{
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
                         &image_type=photo&per_page=${this.state.amount}&safesearch=false`)
                         .then(res => this.setState({images:res.data.hits}))
                         .catch(err => console.log(err));
        })
    }
    handleamountChange = (no_of_images) =>{
        this.setState({
            amount:no_of_images
        })
    }
    render() 
    {
        console.log(this.state) 
        return (
            <div>
                <TextField 
                name="searchText"
                label="Search Text"
                value = {this.state.searchText}
                onChange = {this.handletextChange}  
                fullWidth={true}              
                /> 
                <br />
                <Select searchbarCallback = {this.handleamountChange} />
                <br />
                {this.state.images.length > 0 ? 
                <Image images={this.state.images}/>:
                null}
            </div>
        )
    }
}
export default Searchbar;
