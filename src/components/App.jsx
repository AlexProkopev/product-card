import React from 'react';
import ProductForm from './ProductForm/ProductForm';
import ProductCard from './ProductCard/ProductCard';
import css from './App.module.css';
import Backet from './Backet/Backet';
import Modal from './Modal/Modal';
export class App extends React.Component {
  state = {
    products: [{
      id: 1,
      name: 'Мобильный телефон Apple iPhone 13 pro 128GB (MTP03RX/A) ',
      price: 800,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364621175.jpg',
    },
    {
      id: 2,
      name: 'Мобильный телефон Apple iPhone 15 128GB Black (MTP03RX/A)',
      price: 19.99,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: "https://content1.rozetka.com.ua/goods/images/big_tile/221026603.jpg",
    },
    {
      id: 3,
      name: 'Мобильный телефон Apple iPhone 15 256GB Black (MTP03RX/A)',
      price: 14.49,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content.rozetka.com.ua/goods/images/big_tile/364836822.jpg',
    },
    {
      id: 4,
      name: 'Мобильный телефон Apple iPhone 14 128GB Black (MTP03RX/A)',
      price: 24.99,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content2.rozetka.com.ua/goods/images/big_tile/364623611.jpg',
    },
    {
      id: 5,
      name: 'Мобильный телефон Apple iPhone 14 256GB Black (MTP03RX/A)',
      price: 7.99,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content.rozetka.com.ua/goods/images/big_tile/364721030.jpg',
    },
    {
      id: 6,
      name: 'Мобильный телефон Apple iPhone 14 256GB Black (MTP03RX/A)',
      price: 12.99,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content2.rozetka.com.ua/goods/images/big_tile/284920862.jpg',
    },
    {
      id: 7,
      name: 'Мобильный телефон Apple iPhone 14 256GB Black (MTP03RX/A)',
      price: 9.99,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content2.rozetka.com.ua/goods/images/big_tile/364621800.jpg',
    },
    {
      id: 8,
      name: 'Мобильный телефон Apple iPhone 14 256GB Black (MTP03RX/A)',
      price: 29.99,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content.rozetka.com.ua/goods/images/big_tile/284913557.jpg',
    },
    {
      id: 9,
      name: 'Мобильный телефон Apple iPhone 14 256GB Black (MTP03RX/A)',
      price: 17.99,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364830309.jpg',
    },
    {
      id: 10,
      name: 'Мобильный телефон Apple iPhone 14 256GB Black (MTP03RX/A)',
      price: 22.99,
      description: 'Экран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основная квадрокамера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
      image: 'https://content1.rozetka.com.ua/goods/images/big_tile/364623532.jpg',
    },],
    backet: [],
    modalData:{},
    backetBtn: false,
    yourAdmin: false,
    backBtn: false,
    isModalOpen: false,
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

  deleteProduct = (id,stateValue) => {
    this.setState({
      [stateValue]: this.state[stateValue].filter(product => product.id !== id),
    });
  };

  backetOnFn = (stateName) => {
    this.setState(
      {
        [stateName]: true,
      }
    );
  };

  btnIsFalse  = (e,stateName) => {
    if (e.target === e.currentTarget) {
      this.setState(
        {
          [stateName]: false,
        }
      );
    }
  }

  openModal = (stateNameProp, product) => {
    this.backetOnFn(stateNameProp);

    this.setState({
      modalData: product,
    });
  }


  


  render() {

    const adminBtn = (
    <button
      type="button"
      onClick={()=>{this.backetOnFn("yourAdmin")}}
      className={css.btnAdmin}
    >
      Ты админ?
    </button>)

    const backetBtn = (
    <button
      type="button"
      onClick={()=>{this.backetOnFn("backetBtn")}}
      className={css.btnBacket}
    >
      Показать корзину
    </button>)

    return (
      <div className={css.container}>
  {adminBtn}  {/* Кнопка админа */}

  {this.state.yourAdmin && <h1>Заполните форму</h1>}

  {/* Отображение корзины или сообщения о пустой корзине */}
  {this.state.backet.length ? (
    backetBtn
  ) : (
    <h2 className={css.btnBacket}>Ваша корзина пуста</h2>
  )}

  {/* Отображение формы для админа, если активирована */}
  {this.state.yourAdmin && <ProductForm addProduct={this.addProduct} />}

  {/* Отображение заголовка "Продукты" или сообщения о отсутствии продуктов */}
  {this.state.products.length ? (
    <h2 className={css.titleProduct}>Продукты</h2>
  ) : (
    <h2 className={css.titleProductNan}>Нет продуктов</h2>
  )}

  <ul className={css.listCard}>
    {/* Вывод либо корзины, либо карточек продуктов */}
    {this.state.backetBtn ? (
      <Backet
        backet={this.state.backet}
        deleteProduct={this.deleteProduct}
        backBtn={this.backetOnFn}
      />
    ) : (
      <ProductCard
        product={this.state.products}
        deleteProduct={this.deleteProduct}
        addProductInBacket={this.addProductInBacket}
        backetOnFn={this.openModal}
      />
    )}
    
    
  </ul>

  {this.state.isModalOpen && <Modal btnIsFalse={this.btnIsFalse} modalData={this.state.modalData} addBacket={this.addProductInBacket}/>}
</div>
    );
  }
}
