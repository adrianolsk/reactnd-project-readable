import React, {Component} from 'react';

class SortButton extends Component {



    render() {
        const {field, postsSortedBy, onSort} = this.props;
        const cssClass = (field === postsSortedBy.field ? 'active' : '') + ' ' + (postsSortedBy.direction === 1 ? 'desc' : 'asc');
        return (
            <button onClick={() => onSort(field.value)} className={cssClass}>Sort by {field.label}   </button>);
    }
}

export default SortButton;