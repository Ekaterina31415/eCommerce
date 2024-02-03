import React, { Component } from 'react'
import Item from './Item';

export class Items extends Component {
  render() {
    const { items, onShowItem } = this.props;
    return (
      <main>
        {items.map((item) => (
          <Item key={item.id} item={item} onAdd={this.props.onAdd} onShowItem={onShowItem}/>
        ))}
      </main>
    )
  }
};

export default Items;