import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Moon from "./components/Moon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Церера (ceres)',
          img: 'ceres.jpg',
          desc: 'Hаименьшая среди известных карликовых планет Солнечной системы.',
          category: 'dwarf planet',
          price: '4.99',
          link: 'https://ru.m.wikipedia.org/wiki/%D0%A6%D0%B5%D1%80%D0%B5%D1%80%D0%B0'
        },
        {
          id: 2,
          title: 'Беллона (bellona)',
          img: 'bennu.jpg',
          desc: 'Астероид главного пояса, который принадлежит к светлому спектральному классу S.',
          category: 'main ring',
          price: '9.99',
          link: 'https://ru.m.wikipedia.org/wiki/(28)_%D0%91%D0%B5%D0%BB%D0%BB%D0%BE%D0%BD%D0%B0'
        },
        {
          id: 3,
          title: 'Летиция (lutetia)',
          img: 'lutetia.jpg',
          desc: 'Астероид главного пояса, принадлежащий к светлому спектральному классу S. ',
          category: 'main ring',
          price: '28.99',
          link: 'https://ru.m.wikipedia.org/wiki/(39)_%D0%9B%D0%B5%D1%82%D0%B8%D1%86%D0%B8%D1%8F'
        },
        {
          id: 4,
          title: 'Психея (psyche)',
          img: 'psyche.jpg',
          desc: 'Астероид главного пояса, который принадлежит к богатому металлами спектральному классу M.',
          category: 'main ring',
          price: '89.99',
          link: 'https://ru.m.wikipedia.org/wiki/(16)_%D0%9F%D1%81%D0%B8%D1%85%D0%B5%D1%8F'
        },
        {
          id: 5,
          title: 'Веста (vesta)',
          img: 'vesta.jpg',
          desc: 'Первый по размерам и массе из астероидов в главном астероидном поясе. ',
          category: 'main asteroid belt',
          price: '4.99',
          link: 'https://ru.m.wikipedia.org/wiki/(4)_%D0%92%D0%B5%D1%81%D1%82%D0%B0'
        }
      ],
      currentItems: [],
      showFullItem: false,
      fullItem: {}
    };
    this.state.currentItems = this.state.items;
  }

  addToOrder = (item) => {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        alert('Каждый астероид уникален!');
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

  chooseCategory = (category) => {
    const { items } = this.state;
    if (category === 'all') {
      this.setState({currentItems: items});
      return;
    }
    this.setState({
      currentItems: items.filter((item) => item.category === category)
    })
  }

  onShowItem = (item) => {
    const { showFullItem } = this.state;
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !showFullItem });
  }

  render() {
    const { orders, currentItems, fullItem } = this.state;
    return (
      <div className='wrapper'>
        <Header orders={orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>
        {this.state.showFullItem && <ShowFullItem item={fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
        {/* <Moon /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
