import React from 'react';
import buddies from '../images/test.jpg';
import explain from '../images/blackwomanexplains.jpg';
import './welcome.css';
import styled from 'styled-components';



const Welcome = () => {
  return (
    <div >
      <img className="img-buddies" src = {buddies} alt = "Black Woman Buddies" />
      <p className="p-buddies">Black Women<br/>M.D. Network</p>
      <a href="/join" className="btn btn-join btn-lg active" role="button" aria-pressed="true">Join Our Community</a>
      <p className="p-welcome">Diva Docs Boston is an organization composed of over 250 Black women physicians and 
      trainees (medical students, residents, and fellows) working, studying or living in Greater Boston. Our members 
      are represented in every medical speciality and work in a variety of health and non-health care settings.</p>
      <a href="" className="btn btn-members btn-lg active" role="button" aria-pressed="true">Featured Members</a>
      <img className="img-explain" src = {explain} alt = "Black Woman Explains" />
      <p className="p-member">First Name, Last Name<br/>
      Profession<br/>
      Years Experience<br/>
      <br/>
      Bio:<br/>
      <br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper fermentum dolor, mi quam amet, donec...</p>
      <a href="/directory" className="btn btn-search btn-lg active" role="button" aria-pressed="true">Search Our Members</a>
    </div>
  );
}
  
export default Welcome;
