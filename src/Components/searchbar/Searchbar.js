import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '../selectbar/Selectbar';
import Image1 from '../Image-Results/Image1';
import axios from 'axios';

class Searchbar extends Component 
{
    state = 
    {
        searchText:"",
        amount:5,
        apiUrl:'https://pixabay.com/api',
        apiKey:'',
        images:[]
    }
    
    //Here we are passing callback function after setting the state to fetch images
    handletextChange = (e) => {
        const val =e.target.value
        this.setState({ [e.target.name]:val}, ()=>{
            if(val ==="")
            { this.setState({images:[]}) }
            else
            {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
                         &image_type=photo&per_page=${this.state.amount}&safesearch=false`)
                         .then(res => this.setState({images:res.data.hits}))
                         .catch(err => console.log(err));
            } 
        })
    }
    handleamountChange = (no_of_images) =>{
        this.setState({ amount:no_of_images} , ()=>{
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
                         &image_type=photo&per_page=${this.state.amount}&safesearch=false`)
                         .then(res => this.setState({images:res.data.hits}))
                         .catch(err => console.log(err));
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
                <Select searchbarCallback = {this.handleamountChange} amnt={this.state.amount} />
                <br />
                {this.state.images.length > 0 ? 
                <Image1 images={this.state.images}/>:
                null}
            </div>
        )
    }
}
export default Searchbar;
