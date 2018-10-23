// Core 
import React, { Component } from 'react';

//Components
import { withProfile } from 'components/HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

const Postman = (props) => { 
    return (
        <section className = { Styles.postman }>
            <img src = { props.avatar } />
            <span> Welcome online, { props.currentUserFirstName }</span>
        </section>
    );  
}

export default withProfile(Postman);
