import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Gray chair',
          img: 'stul.jpeg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'White table',
          img: 'stul.jpeg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'tables',
          price: '49.99'
        },
        {
          id: 3,
          title: 'Red sofa',
          img: 'stul.jpeg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'sofas',
          price: '49.99'
        },
        {
          id: 4,
          title: 'Closet',
          img: 'stul.jpeg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'closets',
          price: '49.99'
        },
        {
          id: 5,
          title: 'Glass vasa',
          img: 'stul.jpeg',
          desc: 'lorem ipsum dolor sit amet',
          category: 'vases',
          price: '49.99'
        }
      ],
    };
  }

  addToOrder = (item) => {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]});
    }
  }

  deleteOrder = (id) => {
    const { orders } = this.state;
    this.setState({orders: orders.filter(order => order.id !== id)});
  }

  render() {
    const { orders, items } = this.state;
    return (
      <div className='wrapper'>
        <Header orders={orders} onDelete={this.deleteOrder}/>
        <Items items={items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
}

export default App;
