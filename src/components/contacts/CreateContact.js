import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../../context';
import InputGroup from "../layout/InputGroup";

class CreateContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        error: {},
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if (name === '') {
            this.setState({error: {name: 'Name is required'}});
            return;
        }
        if (email === '') {
            this.setState({error: {email: 'Email is required'}});
            return;
        }
        if (phone === '') {
            this.setState({error: {phone: 'Phone is required'}});
            return;
        }
        const newContact = {
            name,
            email,
            phone
        };
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({type: 'CREATE_CONTACT', payload: response.data});

        this.setState({name: '', email: '', phone: '', error: {}});
        this.props.history.push('/');
    };
    render() {
        const { name, email, phone, error } = this.state;
        return (
            <Consumer>
                { value => {
                    const { dispatch } = value;
                    return (
                        <div className="card col-md-6 m-auto mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={ this.onSubmit.bind(this, dispatch) }>
                                    <InputGroup label="Name" name="name" placeholder="Enter Name"
                                                value={ name } onChange={ this.onChange } error={error.name} />
                                    <InputGroup label="Email" type="email" name="email" placeholder="Enter Email"
                                                value={ email } onChange={ this.onChange } error={error.email} />
                                    <InputGroup label="Phone" type="tel" name="phone" placeholder="Enter Phone"
                                                value={ phone } onChange={ this.onChange } error={error.phone} />
                                    <button type="submit" className="btn btn-lg btn-block" style={addButton} >Add Contact</button>
                                </form>
                            </div>
                        </div>
                    );
                }

                }
            </Consumer>

        );
    }
}

const addButton = {
    color: '#F6F6E8',
    backgroundColor: '#282828',
};

export default CreateContact;