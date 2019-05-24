import React from 'react';

const ContactAdd = (props) => {
    return (
        <form onSubmit={props.AddContact}>
            <input value={props.current} type="text" onChange={props.update}></input>
            <input type="submit" value="Add Contact"></input>
        </form>
    );
};

export default ContactAdd;