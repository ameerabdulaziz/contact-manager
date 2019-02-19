import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../../context';
import InputGroup from "../layout/InputGroup";

class UpdateContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        error: {},
    };
    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`);
        this.setState({
            name: response.data.name,
            email: response.data.email,
            phone: response.data.phone,
        });
    }

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
        const updatedContact = {
            name,
            email,
            phone
        };
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`, updatedContact);
        dispatch({type: 'UPDATE_CONTACT', payload: response.data});

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
                        <div className="card col-md-6 mb-3 m-auto">
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={ this.onSubmit.bind(this, dispatch) }>
                                    <InputGroup label="Name" name="name" placeholder="Edit Name"
                                                value={ name } onChange={ this.onChange } error={error.name} />
                                    <InputGroup label="Email" type="email" name="email" placeholder="Edit Email"
                                                value={ email } onChange={ this.onChange } error={error.email} />
                                    <InputGroup label="Phone" type="tel" name="phone" placeholder="Edit Phone"
                                                value={ phone } onChange={ this.onChange } error={error.phone} />
                                    <button type="submit" className="btn btn-lg btn-block" style={editButton}>Edit Contact</button>
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

const editButton = {
    color: '#F6F6E8',
    backgroundColor: '#282828',
};


export default UpdateContact;