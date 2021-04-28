import React from 'react'
import axios from 'axios'
import Header from '../Header';
import Main from '../mainHome';
import Footer from '../Footer'; 


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