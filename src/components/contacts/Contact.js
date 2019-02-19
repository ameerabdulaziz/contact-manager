import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
    state = {
        showContactInfo: false
    };
    showInfo = () => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    };
    deleteContact = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type: 'DELETE_CONTACT', payload: id});
    };
    render() {
        const {id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name} <i className="fas fa-sort-down" style={showContactIcon} onClick={this.showInfo} />
                                <span style={actionsIcons}>
                                    <Link to={`/contacts/${id}/edit`}><i className="fas fa-edit" style={editContactIcon}  /></Link>
                                <i className="fas fa-times" style={deleteContactIcon} onClick={this.deleteContact.bind(this, id, dispatch)} />
                                </span>
                            </h4>
                            {showContactInfo ?
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                                :null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

const actionsIcons = {
    float: 'right',
};
const editContactIcon = {
    color: '#F6F6E8',
    cursor: 'pointer',
    marginRight: '15px'
};
const deleteContactIcon = {
    color: '#F6F6E8',
    cursor: 'pointer'
};

const showContactIcon = {
    cursor: 'pointer'
};

export default Contact;
