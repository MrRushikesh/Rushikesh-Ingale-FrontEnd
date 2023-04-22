import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Display from './Display';
import './main.css';

const url = "https://search-api-98mn.onrender.com/search" // Live API
// const url = "http://localhost:7447/search" //Local API

class Main extends Component {
    constructor(){
        super()
        this.state={
            adsdata:'',
            updateData:''
            
        }
    }

    filterData = (keyword) =>{
        let output = this.state.adsdata.filter((item) => {
            return(item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1 || item.ads[1].headline.toLowerCase().indexOf(keyword.toLowerCase())>-1 || item.ads[0].primaryText.toLowerCase().indexOf(keyword.toLowerCase())>-1 || item.ads[4].description.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })
        this.setState({updateData:output})   
    }

   



    render(){
        return(
            <>
                <Header userInput={(data) =>{return this.filterData(data)}}/>
                <Display prodData={this.state.updateData}/>
                <Footer/>
            </>
        )
    }

    componentDidMount(){
        // fetch('http://localhost:7447/search',{method:'GET'}) //Local API
        fetch(`${url}`,{method:'GET'})
        .then(res => res.json())
        .then((data) => {
            // console.log(data)
            this.setState({adsdata:data})
        })
    }
}

export default Main;


 