import React, { Component } from 'react';
import ContactList from './components/ContactList';
import ContactAdd from './components/ContactAdd';
import './App.css';


class App extends Component {

  state={
      contacts: [
        {name: "Shaimaa : 01060464622 "},
        {name: "Mohamed : 01066843161"},
        {name: "Ahmed : 01010010363"},
      ],
      current: ""
  }

  // the main state and defined current key as a container
  // for new values would be added 

  updateContact= (e)=>{
      this.setState(
        {current : e.target.value}
      )     
  }
  
  /* updateContact function updates the state with the new entry value*/

  AddContact = (e)=>{
    e.preventDefault();
    let current = this.state.current;
    let contacts = this.state.contacts;
    contacts.push({
      name: current
    },)   
    this.setState({contacts,current:''});
  }

  /* AddContact function takes event object and gets the current key which contains the 
    new value of contact and push i to the contacts array then updates the state 
    with the new array and empty current key
  */

  deleteContact = (index) => {
      let contacts = this.state.contacts;
      contacts.splice(index,1);
      this.setState({contacts})
  }

  /* deleteContact function takes the index of the contact you want to delete 
    and update the state 
  */

  editContact = (index,value) => { 
    let contacts = this.state.contacts;
    let contact = contacts[index];
    contact['name'] = value;
    this.setState({
      contacts
    })
  }

  /* editContact function takes the index of the contact and the new value
      of the certain contact by the index and set it in the state
  */

  render() {
    const {contacts} = this.state;
    const contactList = contacts.map((contact,index) => {
        return <ContactList detail={contact} key={index} index={index} deleteContact={this.deleteContact} editContact={this.editContact}/>
    })
    return (
      <section>
        <h2>Contact List</h2>
        <ContactAdd current={this.state.current} update={this.updateContact} AddContact={this.AddContact}/>
        <ul>{contactList}</ul>
      </section>
    );
  }
}

export default App;