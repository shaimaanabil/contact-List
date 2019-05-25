import React, { Component, Fragment } from 'react';

class ContactList extends Component {

    state={
        isEdit : false
    }


    renderContacts = () => {
        let {contacts}= this.props;
        let contactsLength= contacts.length;
        const ListContact = contactsLength ? ( contacts.map(contact =>{
            return(
                <li>
                    <span>{this.props.detail.name}</span> 
                    <button onClick={() => {this.toggleState()}}>Edit Contact</button>
                    <button onClick={ () =>{this.props.deleteContact(this.props.index)}}>Delete Contact</button>
                </li>
            )
        })) : (<p>there is no contacts to show</p>)

         
         
    }

    // renderContacts function renders contacts and two buttons Edit and Delete

 
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }

    /* toggleState function just a flag to ckeck if the user click on Edit button 
        when the click event fires it will set isEdit by true
    */

    updateContentItem = (e) => { 
        e.preventDefault();
        this.props.editContact(this.props.index,this.input.value);
        this.toggleState();
    }

    /* updateContentItem function takes event object and invokes editContact function as a prop from App component
        and calls toggleState to toggle the value of isEdit flag
    */

    renderUpdateContacts = () => {
        return(
            <form onSubmit={this.updateContentItem}>
                <input type="text" ref= { (v) =>{this.input=v} } defaultValue= {this.props.detail.name}/>
                <button>Update Contact</button>
            </form>
        )
    }
   
    /* renderUpdateContacts function renders a form when you choose Update contact
        when submit it invokes updateContactItem
    */

    render() {
        let {isEdit} = this.state
        return (
            <Fragment>
                { isEdit ? this.renderUpdateContacts() : this.renderContacts()}
            </Fragment>
        );
    }
    
     /* from the value of isEdit it renders Update or list the contacts */

}

export default ContactList;