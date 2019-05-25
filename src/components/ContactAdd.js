import React from 'react';

const ContactAdd = (props) => {
    return (
        <form onSubmit={props.AddContact}>
            <input value={props.current} type="text" onChange={props.update}></input>
            <input type="submit" value="Add Contact"></input>
        </form>
    );
};

    /* ContactAdd component takes props and returns a form and button
        Add Contact
    */

export default ContactAdd;