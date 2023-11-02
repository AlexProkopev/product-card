import React from 'react';
import ProductForm from './ProductForm/ProductForm';
import ProductCard from './ProductCard/ProductCard';
import css from './App.module.css';
import Backet from './Backet/Backet';
export class App extends React.Component {
  state = {
    products: [{
      id: 1,
      name: 'Product 1',
      price: 10.99,
      description: 'Description for Product 1',
      image: 'image1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      description: 'Description for Product 2',
      image: 'image2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 14.49,
      description: 'Description for Product 3',
      image: 'image3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 24.99,
      description: 'Description for Product 4',
      image: 'image4.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 7.99,
      description: 'Description for Product 5',
      image: 'image5.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: 12.99,
      description: 'Description for Product 6',
      image: 'image6.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      price: 9.99,
      description: 'Description for Product 7',
      image: 'image7.jpg',
    },
    {
      id: 8,
      name: 'Product 8',
      price: 29.99,
      description: 'Description for Product 8',
      image: 'image8.jpg',
    },
    {
      id: 9,
      name: 'Product 9',
      price: 17.99,
      description: 'Description for Product 9',
      image: 'image9.jpg',
    },
    {
      id: 10,
      name: 'Product 10',
      price: 22.99,
      description: 'Description for Product 10',
      image: 'image10.jpg',
    },],
    backet: [],
    backetBtn: false,
    yourAdmin: false,
  };

  addProduct = ({ name, price, description, image }) => {
    const uniqueId = Math.floor(Math.random() * 82146651);

    this.setState({
      products: [
        ...this.state.products,
        {
          id: uniqueId,
          name: name,
          price: price,
          description: description,
          image: image,
        },
      ],
    });
  };

  deleteProduct = id => {
    this.setState({
      products: this.state.products.filter(product => product.id !== id),
    });
  };

  addProductInBacket = ({ name, price, description, image }) => {
    this.setState(
      {
        backet: [
          ...this.state.backet,
          {
            id: Math.floor(Math.random() * 82146651),
            name: name,
            price: price,
            description: description,
            image: image,
          },
        ],
      },
      () => console.log(this.state.backet)
    );
  };

  deleteProductBacket = id => {
    this.setState({
      backet: this.state.backet.filter(backetElem => backetElem.id !== id),
    });
  };

  backetOnFn = () => {
    this.setState(
      {
        backetBtn: true,
      }
    );
  };

  adminOnFn = () => {
    this.setState(
      {
        yourAdmin: true,
      }
    );
  };

  render() {
    return (
      <>
      <button
            type="button"
            onClick={this.adminOnFn}
            className={css.btnBacket}
          >
            Ты админ?
          </button>
        {this.state.yourAdmin && <h1>Заполните форму</h1>}
        {this.state.backet.length ? (
          <button
            type="button"
            onClick={this.backetOnFn}
            className={css.btnBacket}
          >
            Перейти в корзину
          </button>
          
        ) : (
          <h2 className={css.btnBacket}>Ваша корзина пуста</h2>
        )}
        {this.state.yourAdmin === true ? <ProductForm addProduct={this.addProduct} /> : null }

        {this.state.products.length ? (
          <h2 className={css.titleProduct}>Продукты</h2>
        ) : (
          <h2 className={css.titleProductNan}>Нет продуктов</h2>
        )}
        <ul className={css.listCard}>
          {this.state.backetBtn === true ? (
            <Backet
              backet={this.state.backet}
              deleteProduct={this.deleteProductBacket}
            />
            
          ) : (
            <ProductCard
              product={this.state.products}
              deleteProduct={this.deleteProduct}
              addProductInBacket={this.addProductInBacket}
            />
          )}
        </ul>
      </>
    );
  }
}
