import React from 'react';
import Contact from './Contact.js';
import Alert from './Alert.js';
import NewContact from './NewContact.js';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            contacts: this.props.contacts
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addContact = this.addContact.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleEdit(contact){
        this.setState({
            selectedContact: contact.name
        });
    }

    handleCloseError(){
        this.setState({
            errorInfo: null
        });
    }

    addContact(contact) {
        //No podemos modificar el estado, por lo que tenemos que realizar
        //una copia de la lista de contactos
        this.setState(prevState => {
            const contacts = prevState.contacts;
            if (!contacts.find(c => c.name === contact.name)){
                return({
                    contacts: [...prevState.contacts, contact]
                });
            }

            return({
                errorInfo: 'Contact already exists'
            });
        });
    }

    handleDelete(contact) {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter((c) => c.name !== contact.name)
        }));
    }

    render() {
        return(
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError} />
            <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            {this.state.contacts.map((contact) =>
                <Contact contact={contact} onEdit={this.handleEdit}
                onDelete={this.handleDelete}/>
            )}
            <NewContact onAddContact={this.addContact} />
            </table>
            </div>
        );
    }
    
}

export default Contacts;