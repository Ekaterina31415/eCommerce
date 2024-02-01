import React, { Component } from 'react'

export class Item extends Component {
  render() {
    const { item, onAdd } = this.props;
    return (
      <div className='item'>
        <img src={'./img/' + item.img} alt='' />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
      </div>
    )
  }
}

export default Item;