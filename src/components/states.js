import React from 'react';
import axios from 'axios';


class States extends React.Component{
    state = { 
        all_states: null,
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/stats/latest/data').then(res=>{
            console.log(res.data.data.regional);
            this.setState({
                all_states: res.data.data.regional
            })
            console.log(this.state.data);
        })
    }
    render(){
        const all_states = this.state.all_states ? (
            <div className="highlight">
        <table>
        <thead>
          <tr>
              <th>State</th>
              <th>Total</th>
              <th>Recovered</th>
              <th>Deaths</th>
          </tr>
          </thead>
            {this.state.all_states.map(state => {
                return(
                <tr>
                <td>{state.loc}</td>
                <td>{state.totalConfirmed}</td>
                <td>{state.discharged}</td>
                <td>{state.deaths}</td>
                </tr>
            )
            })}
            </table>
            </div>
        ): (
            <p className="center">Loading......</p>
        )
        return(
            <div className="State Data">
            {all_states}
            </div>
        );
    }
}
export default States;