import React from 'react';
import './style.css';
import { FontAwesomeIcon } from 'react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className='container-fluid about-wrap'>
        <div className='container about-content'>
            <FontAwesomeIcon icon={ faUser} color="#4b4f65" />
            <h1>Com um site, você tem seu negócio em qualquer lugar, a qualquer hora.</h1>
            <p>Pessoas estão o tempo todo com o celular na mão, pesquisando produtos e serviços na internet, e com um site elas podem encontrar o seu negócio a qualquer hora e de qualquer lugar. Já pensou nisso?</p>
        </div>
    </div>
  )
}

export default About;
