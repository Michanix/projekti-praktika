import React from 'react'
import axios from 'axios'
import Header from './header';
import Main from './main';
import Footer from './footer'; 


export default class Home extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount(){
    axios.get('http://localhost:3000/homepage').then(res => {
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