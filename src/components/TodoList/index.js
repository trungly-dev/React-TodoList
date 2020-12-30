import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    list : PropTypes.array,
    onItemClick : PropTypes.func 
};

TodoList.defaultProps = {
    list : [],
    onItemClick: null
}


function TodoList(props) {
    
    const { list, onItemClick } = props;

    const handleItemClick = (item) => {
         if (onItemClick) { 
            onItemClick(item)
        }
    }
    return (
        <ul>
        {list.map( (item) => 
            <li 
                key={item.id}
                onClick={() => handleItemClick(item)}
            > 
                {item.title}
            </li>
        )}
        </ul>
    );
}

export default TodoList;