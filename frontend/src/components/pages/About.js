import React from 'react'
import axios from 'axios'
import Header from '../Header';
import Main from '../mainAbout';
import Footer from '../Footer'; 


export default class About extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount(){
    axios.get('http://localhost:3000/about').then(res => {
        console.log(res.data)
        this.setState({
            message: res.data
        })
    })}

    render(){
        return(
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )}
}