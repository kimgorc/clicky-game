
import React, { Component } from 'react';
import CharacterCard from '../characters/characters';
import './wrapper.css';

class Wrapper extends Component {
    render() {
        return (
            <div className='wrapper'>
                {this.props.imgsrc.map((image) =>
                    <CharacterCard imgsrc={image} key={image} onClick={this.props.onClick} />
                )}
            </div>
        );
    }
};

export default Wrapper;