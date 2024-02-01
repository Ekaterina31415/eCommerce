import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;
