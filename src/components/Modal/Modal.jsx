
import React from "react"
import css from "./Modal.module.css"

export default class Modal extends React.Component {

    
    
    render() {

        const {id, name, price, description, image } = this.props.modalData
        
        return (
            <div >
                <button type="button" onClick={(e)=>{
                    this.props.btnIsFalse(e,"isModalOpen") 
                    console.log("ыфвфв");}}>Открыть модальное окно</button>
    <div className={css.backdrop} id="modal"  onClick={(e)=>{this.props.btnIsFalse(e,"isModalOpen")}}>
        <div className={css.modal}>
            <button className={css.close} onClick={(e)=>{this.props.btnIsFalse(e,"isModalOpen")}}  id="closeModal">&times;</button>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}.</p>
            <p>{price}</p>
            <button
                    className={css.buttonBy}
                    onClick={() => {
                        const product = { id, name, price, description, image };
                      this.props.addBacket(product);
                    }}
                    type="button"
                  >
                    In backet
                  </button>
        </div>
    </div>
            </div>
        )
    }
}