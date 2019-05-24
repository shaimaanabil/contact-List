import React, { Component, Fragment } from 'react';

class ContactList extends Component {

    renderContacts = () => {
        return(
            <li>
                <span>{this.props.detail.name}</span> 
                <button onClick={ () =>{this.props.deleteContact(this.props.index)}}>Delete Contact</button>
            </li>
        )
    
    }

    render() {
        return (
            <Fragment>
                {this.renderContacts()}
            </Fragment>
        );
    }
}

export default ContactList;