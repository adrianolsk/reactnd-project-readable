import React, {Component} from 'react';

class SortButton extends Component {

    render() {
        const {field, postsSortedBy, onSort} = this.props;
        const cssClass = " " + (field === postsSortedBy.field ? 'active' : '') + ' ' + (postsSortedBy.direction === 1 ? 'fa fa-sort-desc' : 'fa fa-sort-asc');
        return (
            <button onClick={() => onSort(field.value)} className="sort">{field.label}
                {(field.value === postsSortedBy.field ? <i className={cssClass} /> : '')}
            </button>);
    }
}

export default SortButton;