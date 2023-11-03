

import React from "react";
import css from "./ProductCard.module.css"


export default class ProductCard extends React.Component {

    addBacket = (product) => {
 this.props.addProductInBacket(product)
    }

    render() {

        return(
            <>
            {this.props.product.map(({id, name, price, description, image})=>{
                const product = {id, name, price, description, image}
                    return (
                        
                            <li key={id} className={css.itemCard}>
                            <h2 className={css.itemName}>{name}</h2>
                            <p className={css.itemDescription}>{description}</p>
                            <img className={css.itemImg} src={image} alt={name} width={300} height={300}/>
                            <p className={css.itemPrice}>Цена: {price}</p>
                            <ul className={css.productListBtn}>
                                <li>
                                <button  className={css.buttonDeleted} type="button" onClick={()=>{this.props.deleteProduct(id,"products")}}>Deleted</button>
                            
                                </li>
                                <li>
                                <button className={css.buttonBy} onClick={()=>{this.addBacket(product)}} type="button">In backet</button>
                                </li>
                            </ul>
                        </li>
                       
                        
                    )
                })}
                </>
        )
    }
}