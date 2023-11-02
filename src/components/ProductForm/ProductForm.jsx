import React from "react";
import css from "./ProductForm.module.css"

export default class ProductForm extends React.Component {

    state = {
        name: "",
        price: "",
        description: "",
        image: "",
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { name, price, description, image } = e.currentTarget.elements

        const product = {
            name: name.value,
            price: price.value,
            description: description.value,
            image: image.value,
        }

        this.props.addProduct(product)


    }

    render() {

       

        return(
           <div className={css.container}>
             <form className={css.form} onSubmit={this.handleSubmit}>
                <label className={css.label} htmlFor="name">Введите название</label>
                <input className={css.input} type="text" name="name"/>
                <label className={css.label} htmlFor="description">Введите описание</label>
                <textarea className={css.input} type="text" name="description"/>
                <label className={css.label} htmlFor="price">Введите цену</label>
                <input className={css.input} type="number" name="price"/>
                <label className={css.label} htmlFor="image">Введите ссылку на img</label>
                <input className={css.input} type="text" name="image"/>
                <button className={css.button} type="submit">Ввод</button>
            </form>
           </div>
        )
    }
}