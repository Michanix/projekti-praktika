import React from 'react'
import axios from 'axios'
import Header from './header';
import Main from './main';
import Footer from './footer'; 


export default class Home extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            message: '',
            title: ''

        }
    }

    componentDidMount(){
    axios.get('http://localhost:3000/homepage').then(res => {
        console.log(res.data)
        this.setState({
            message: res.data
        })
    })}

    onClick(event){
        const value = event.target.value;
        const url = 'http://localhost:3000/api/books/search?q=${value}'
        axios.get(url).then(res => {
            this.setState(
                {title: res.data.title}
            )
        })
    }

    render(){
        return(
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )}
}