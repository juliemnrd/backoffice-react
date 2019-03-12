import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import '../components/doctors.css';
import axios from 'axios';

class Doctors extends Component {
  constructor(){
    super();
    this.state = { 
      isValidate : false
    };
}

// getAllDoctors = () =>{
//   axios.put(`http://localhost:8000/api/doctors`)
//   .then(responseFromApi => {
//     const doctors = responseFromApi.data["hydra:member"]
//     this.setState({doctors})
//   })
// }
    render() {
      // console.log(this.state.doctors.name)
      console.log(this.props)
      return(
        <React.Fragment>
      
            <nav>
                <ul>
                <h1>Docteurs</h1>
                </ul>
            </nav>

            {this.props.doctors.lenght === 0
            ?
            <h1>no doctors</h1>
            : (


            <section>
                <div className="table">
                <table>
              <thead>
                <tr>
                  <th>Nom du médecin</th>
                  <th>Profession</th>
                  <th>Valider le compte</th>
                </tr>
              </thead>
              <tbody>
              { this.props.doctors.map(doctors => 
                <tr key={doctors.id}>
                  <td>
                    <Link to={`/details/${doctors.id}`} key={doctors.id}> 
                    <ul>
                      <li>{doctors.firstName}</li>
                    </ul>
                    </Link>
                  </td>
                  <td>
                    <p> {doctors.profession.specialty} </p>
                  </td>

                  <td>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round" />
                    </label>
                  </td>
                </tr>
                )}
              </tbody>
            </table>
                </div>

      </section>)}
            
            </React.Fragment>
       );
    }
}

export default Doctors;