import React, { Component } from 'react';
import '../components/doctor-details.css';
import profil from '../img/profil.png'
//import Doctors from './Doctors';

class DoctorDetails extends Component {
    render() {
      const doctorId = this.props.match.params.doctorId; //récuperer l'id de l'url
      const selectedDoctor = this.props.doctors.filter((doctor) => doctor.id === Number(doctorId)).shift();
      console.log(selectedDoctor);
        return(
            <React.Fragment>
            
             <article>
             <img className="profilepic" src={profil} alt="profil" width="10%" height="auto"/>                
             <div className="details">
                  <h2>{selectedDoctor.firstName}</h2>
                  {/* <h3> {this.props.doctors[doctorId].profession.specialty} </h3> */}
              </div>
              <div>
                    <p>Adresse:</p> 
                    <input type="text" placeholder="341 rue Lecourbe"/> 
                    <p>RPPS:</p> 
                    <input type="text" placeholder="17583473625"/>
                    <p>Adeli:</p> 
                    <input type="text" placeholder="867534264"/>
                    <p>Tarif standard:</p> 
                    <input type="text" placeholder="25€"/>
                    <button> Enregistrer les modifications</button>
              </div>
            </article>

            <section>
                <h4>Documents</h4>
                <table>
          <tbody>
            <tr>
              <td>Attestation</td>
              <td>
                <a href="/">Voir</a>
              </td>
            </tr>
            <tr>
              <td>Carte d'identité</td>
              <td>
                <a href="/">Voir</a>
              </td>
            </tr>
            <tr>
              <td>Carte CPS</td>
              <td>
                <a href="/">Voir</a>
              </td>
            </tr>
          </tbody>
        </table>
            </section>
            </React.Fragment>
       );
    }
}

export default DoctorDetails;