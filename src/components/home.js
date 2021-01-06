import React from 'react';
import axios from 'axios';


class Home extends React.Component{
    state = { 
        data: null,
        totalCases: null,
        discharged: null,
        deaths: null
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/stats/latest/data').then(res=>{
            console.log(res.data.data.summary.total);
            this.setState({
                data: res.data,
                totalCases: res.data.data.summary.total,
                discharged: res.data.data.summary.discharged,
                deaths: res.data.data.summary.deaths,
            })
            console.log(this.state.data);
        })
    }
    render(){
        const TotalCases = this.state.data ? (    
        <div className="Summary">
        <h2 className="center black-text">Total Cases in India</h2>
        <h3 className="center black-text">{this.state.totalCases}</h3>
        <h2 className="center black-text">Recovered</h2>
        <h3 className="center black-text">{this.state.discharged}</h3>
        <h2 className="center black-text">Deaths</h2>
        <h3 className="center black-text">{this.state.deaths}</h3>
        </div>
        ):(
            <div className="center">Loading..</div>
        )
        return(
        <div className="Home">
        {TotalCases}
        </div>
        )
    }
}

export default Home;