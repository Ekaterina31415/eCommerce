import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Все астероиды',
        },
        {
          key: 'dwarf planet',
          name: 'Карликовые планеты',
        },
        {
          key: 'main ring',
          name: 'Главное кольцо',
        },
        {
          key: 'main asteroid belt',
          name: 'Главный пояс',
        },
      ]
    }
  }
  render() {
    const { categories } = this.state;
    const { chooseCategory } = this.props;
    return (
      <div className='categories'>
        {categories.map((category) => (
          <div key={category.key} onClick={() => chooseCategory(category.key)}>{category.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories