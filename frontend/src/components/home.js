import React from 'react'
import axios from 'axios'
export default class Home extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }


    componentDidMount(){
    axios.get('http://localhost:3000/homepage').then(res => {
        this.setState({
            message: res.data

        })
    })}

    render(){return(<h1>{
        this.state.message
        }</h1>)}
}