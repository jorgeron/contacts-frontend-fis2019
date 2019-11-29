import React from 'react';

function Contact(props) {
    return(
        <tr>
            <td>Name: {props.contact.name}</td>
            <td>Phone: {props.contact.phone}</td>
        </tr>
    );
}

export default Contact;