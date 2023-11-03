
import React from "react";
import css from "./Backet.module.css"


export default class Backet extends React.Component {


    render(){
        return(
            <>
            <button type="button" onClick={()=>this.backBtn("backBtn")}> Назад </button>
            {this.props.backet.map(({id, name, price, description, image})=>{
                const product = {id, name, price, description, image}
                    return (
                        
                            <li key={id} className={css.itemCard}>
                            <h2 className={css.itemName}>{name}</h2>
                            <p className={css.itemDescription}>{description}</p>
                            <img className={css.itemImg} src={image} alt={name} width={300} height={300}/>
                            <p className={css.itemPrice}>Цена: {price}</p>
                            <button  className={css.buttonDeleted} type="button" onClick={()=>{this.props.deleteProduct(product.id,"backet")}}>Deleted</button>
                        </li>
                       
                        
                    )
                })}
            </>
        )
    }
}