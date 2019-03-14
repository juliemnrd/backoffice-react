import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import '../components/doctors.css';
import axios from 'axios';

class Doctors extends Component {
  constructor(){
    super();
  }

validateDoctor = (id) => {
  const selectedDoctor = this.props.doctors.filter((doctor) => doctor.id === Number(id)).shift();
  selectedDoctor.isValidate = true
  axios
  .put(`http://localhost:8000/api/doctors/${id}`, selectedDoctor)
  .then((res) => {
    console.log(res, "Success !");
  })
  .catch((err) => {
    console.log(err, "Failed ! ");
  });
 };

 unvalidateDoctor = (id) => {
  const selectedDoctor = this.props.doctors.filter((doctor) => doctor.id === Number(id)).shift();
  selectedDoctor.isValidate = false
  axios
  .put(`http://localhost:8000/api/doctors/${id}`, selectedDoctor)
  .then((res) => {
    console.log(res, "Success !");
  })
  .catch((err) => {
    console.log(err, "Failed ! ");
  });
 };


    render() {
      console.log(this.props.doctors)
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
                  {doctors.isValidate === false ?
                    <label className="switch">
                      <input type="checkbox" onChange={()=>this.validateDoctor(doctors.id)}/>
                      <span className="slider round" />
                    </label>
                
                  : (
                  
                    <label className="switch">
                      <input type="checkbox" onChange={()=>this.unvalidateDoctor(doctors.id)} checked/>
                      <span className="slider round" />
                    </label>

                  )}
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