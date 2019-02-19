import React, { Component } from 'react';
import { Provider } from "./context";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Page404 from "./components/pages/Page404";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/CreateContact";
import UpdateContact from "./components/contacts/UpdateContact";

class App extends Component {
    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <div className="App">
                        <Header branding="CONTACT MANAGER" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route exact path="/contacts/add" component={AddContact} />
                                <Route exact path="/contacts/:id/edit" component={UpdateContact} />
                                <Route exact path="/about" component={About} />
                                <Route component={Page404} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
