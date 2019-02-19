import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
    const {branding} = props;
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark mb-3">
                <div className="container">
                    <a href="/" className="navbar-brand"><i className="fas fa-user" style={logoIcon}/> {branding}</a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><i className="fas fa-home" /> Home</Link></li>
                            <li className="nav-item">
                                <Link to="/contacts/add" className="nav-link"> <i className="fas fa-plus" /> Add Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"><i className="fas fa-info" /> About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

Header.defaultProps = {
    branding: "My App"
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

const logoIcon = {
  color: '#282828'
};

export default Header;
