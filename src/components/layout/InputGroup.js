import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputGroup = (props) => {
    const { label, type, name, placeholder, value, onChange, error } = props;
    return (
        <div className="form-group">
            <label htmlFor="name">{ label }</label>
            <input type={ type } className={classnames('form-control form-control-lg', {'is-invalid': error})}
                   placeholder={ placeholder } name={ name } id="name" value={ value } onChange={ onChange } />
            {error && <div className="invalid-feedback">{ error }</div>}
        </div>
    );
};

InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
