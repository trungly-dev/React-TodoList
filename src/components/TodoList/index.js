import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    list : PropTypes.array,
    onClick : PropTypes.func 

};

TodoList.defaultProps = {
    list : [],
    onClick: null
}

function TodoList(props) {
    
    const { list, onClick } = props;

    return (
        <ul>
        {list.map( (item) => 
            <li key={item.id}> 
                {item.title}
            </li>
        )}
        </ul>
    );
}

export default TodoList;