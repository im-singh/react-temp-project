
import React, { Component } from 'react';

class ItemList extends React.PureComponent {
    render() {
        return (
            <ul>
                {this.props.items.map(item => <li key={item.id}>{item.value}</li>)}
            </ul>
        );
    }
}
export default ItemList;