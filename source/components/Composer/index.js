// Core
import React, { Component } from 'react';

//instruments

import Styles from './styles.m.css'

export default class Composer extends Component {
    render () {

        const {
            currentUserFirstName,
            avatar,
        } = this.props;
        
        return (
            <section className = { Styles.composer }>
                <img src = {avatar} />
                <form>
                    <textarea placeholder= {`What do you think, ${
                        {currentUserFirstName}
                    }?`}/>
                    <input type='submit' value='post' />
                </form>
            </section>
        );
    }
}
