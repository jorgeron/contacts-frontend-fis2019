import React from 'react';

class NewContact extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: '', phone: ''};

        this.handleChange = this.handleChange.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
    }

    handleChange(event) {
        //el atributo target nos dice el nombre que le hemos puesto al input
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    clickAdd() {
        this.props.onAddContact(this.state);
        this.setState({name: '', phone: ''});
    }

    render() {
        return(
            <tr>
                <td><input className="form-control" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} /></td>
                <td><input className="form-control" name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} /></td>
                <td><button className="btn btn-success" onClick={this.clickAdd}>Add Contact</button></td>
            </tr>
        );
    }
}

export default NewContact;