import React, { Component, Fragment } from 'react';

class ContactList extends Component {

    state={
        isEdit : false
    }

    renderContacts = () => {
        return(
            <li>
                <span>{this.props.detail.name}</span> 
                <button onClick={() => {this.toggleState()}}>Edit Contact</button>
                <button onClick={ () =>{this.props.deleteContact(this.props.index)}}>Delete Contact</button>
            </li>
        )
    
    }

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }

    updateContentItem = (e) => { 
        e.preventDefault();
        this.props.editContact(this.props.index,this.input.value);
        this.toggleState();
    }

    renderUpdateContacts = () => {
        return(
            <form onSubmit={this.updateContentItem}>
                <input type="text" ref={(v) =>{this.input.v}} defaultValue= {this.props.detail.name}/>
                <button>Update Contact</button>
            </form>
        )
    }


    render() {
        let {isEdit} = this.state
        return (
            <Fragment>
                { isEdit ? this.renderUpdateContacts() : this.renderContacts()}
            </Fragment>
        );
    }
}

export default ContactList;