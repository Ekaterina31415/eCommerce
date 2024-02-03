import React, { Component } from 'react'

export class Item extends Component {
  render() {
    const { item, onAdd, onShowItem } = this.props;
    return (
      <div className='item'>
        <img src={'./img/' + item.img} alt='' onClick={() => onShowItem(item)}/>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
      </div>
    )
  }
}

export default Item;