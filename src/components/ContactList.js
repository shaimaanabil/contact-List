import React, { Component, Fragment } from 'react';

class ContactList extends Component {
    render() {
        return (
            <Fragment>
               <li>{this.props.detail.name}</li> 
            </Fragment>
        );
    }
}

export default ContactList;