import React, { Component, Fragment } from 'react';
import {Consumer} from '../../context';
import Contact from "./Contact";

class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <Fragment>
                            <h1 className="m-3"><span className="text-light">Contact</span> List</h1>
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;