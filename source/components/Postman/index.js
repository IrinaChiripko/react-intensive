// Core 
import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap'; 

//Components
import { withProfile } from 'components/HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

@withProfile
export default class Postman extends Component {


    _animatePostEnter = (postman) => {
        fromTo(
            postman, 
            1, 
            { 
                opacity: 0, 
                x: 0,
                width: 0
            }, 
            { 
                opacity: 1, 
                x: 100,
                width: "auto",
                onComplete: () => 
                    {
                        opacity: 0
                    },
            },
        );
    };

    render () {
        const { 
            avatar, 
            currentUserFirstName,
        } = this.props;
        return (
            <Transition
                appear
                in
                timeout = { 4000 }
                onEnter = { this._animatePostEnter }
                >
                <section className = { Styles.postman }>
                    <img src = { avatar } />
                    <span> Welcome online, { currentUserFirstName }</span>
                </section>
            </Transition>
        );
    }
}

