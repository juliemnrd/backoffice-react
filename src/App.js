import React, { Component } from 'react';
import '../src/App.css';
import './global.css';
import Header from '../src/components/Header';
import Doctors from "../src/components/Doctors";
import { Route } from 'react-router-dom';
import DoctorDetails from './components/DoctorDetails';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = { 
      doctors : [] 
    };
}

getAllDoctors = () =>{
  axios.get(`http://localhost:8000/api/doctors`)
  .then(responseFromApi => {
    const doctors = responseFromApi.data["hydra:member"]
    this.setState({doctors})
  })
}



componentDidMount() {
  this.getAllDoctors();
}
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Route
            exact
            path="/"
            render={() => <Doctors doctors={this.state.doctors} />}
          />
        <Route
            exact
            path="/details/:doctorId"
            render={(props) => <DoctorDetails match={props.match} doctors={this.state.doctors} />}
          />      
        </React.Fragment>
    );
  }
}

export default App;
