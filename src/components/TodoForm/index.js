import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onFormSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onFormSubmit: null,
}


function TodoForm(props) {

    const { onFormSubmit } = props;
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !onFormSubmit ) return ;

        const formValues = {
            title: value
        }
        onFormSubmit(formValues);
        setValue('');

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={value}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default TodoForm;