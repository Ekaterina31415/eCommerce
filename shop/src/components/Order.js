import React, { Component } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

export class Order extends Component {
  render() {
    const { item, onDelete } = this.props;
    return (
      <div className='item'>
        <div className='img-container'>
          <img src={'./img/' + item.img} alt='' />
        </div>
        <h2>{item.title}</h2>
        <b>{item.price}$</b>
        <FaRegTrashCan className='delete-item' onClick={() => onDelete(item.id)}/>
      </div>
    )
  }
}

export default Order