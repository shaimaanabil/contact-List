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
      ]
  }

  updateContact= (e)=>{
     console.log(e.target.value);
     
  }
  

  AddContact = (e)=>{
    e.preventDefault();
    console.log("contact");
    
  }

  render() {
    const {contacts} = this.state;
    const contactList = contacts.map((contact,index) => {
        return <ContactList detail={contact} key={index}/>
    })
    return (
      <section>
        <h2>Contact List</h2>
        <ContactAdd update={this.updateContact} AddContact={this.AddContact}/>
        <ul>{contactList}</ul>
      </section>
    );
  }
}

export default App;