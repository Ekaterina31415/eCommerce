import React, { Component } from 'react'
import Item from './Item';

export class Items extends Component {
  render() {
    const { items } = this.props;
    return (
      <main>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </main>
    )
  }
};

export default Items;