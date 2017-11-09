import React from 'react';
import PropTypes from 'prop-types';

const getClass = (field, postsSortedBy) => {
    return (field === postsSortedBy.field ? 'active' : '') + ' ' + (postsSortedBy.direction === 1 ? 'fa fa-sort-desc' : 'fa fa-sort-asc');
}

const SortButton = ({field, postsSortedBy, onSort}) => (
    <button onClick={() => onSort(field.value)} className="sort">{field.label}
        {(field.value === postsSortedBy.field ? <i className={getClass(field, postsSortedBy)}/> : '')}
    </button>
);


SortButton.propTypes = {
    field: PropTypes.object.isRequired,
    postsSortedBy: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
}

export default SortButton;