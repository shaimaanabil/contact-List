import React, { Component } from 'react';
import ContactList from './components/ContactList';
import ContactAdd from './components/ContactAdd';
import './App.css';


class App extends Component {

  state={
      contacts: [
        {name: "Shaimaa"},
        {name: "Mohamed"},
        {name: "Ahmed"},
      ],
      current: ""
  }

  updateContact= (e)=>{
      this.setState(
        {current : e.target.value}
      )     
  }
  

  AddContact = (e)=>{
    e.preventDefault();
    let current = this.state.current;
    let contacts = this.state.contacts;
    contacts.push({
      name: current
    },)   
    this.setState({contacts,current:''});
  }

  deleteContact = (index) => {
      let contacts = this.state.contacts;
      contacts.splice(index,1);
      this.setState({contacts})
  }

  editContact = (index,value) => { 
    let contacts = this.state.contacts;
    let contact = contacts[index];
    contact['name'] = value;
    this.setState({
      contacts
    })
  }

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