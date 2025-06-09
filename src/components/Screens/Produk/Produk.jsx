import React from 'react';
import { useCart } from "react-use-cart";
import data from '../../Data/Data';
import "./Produk.css";

const Produk = () => {

    const {
        addItem
    } = useCart();

    return (
        <div className="ProdukContainer">
            <div className='page'>
                <div className="title">
                    <div className='title-header'>
                        <h1>Ada {data.productItems.length} Produk</h1>
                        <p>Silahkan pilih produk yang mau di beli</p>
                    </div>
                    <div className='Search'>
                        <input placeholder='Search Product'/>
                    </div>
                </div>
                <div className='products'>
                    {data.productItems.map((item, index) => (
                        <div className='card' key={index}>
                            <div>
                                <div>
                                    <img className='productImage' src={item.image} alt={item.name}/>
                                </div>
                            </div>
                            <div>
                                <h2 className='product-name'>{item.name}</h2>
                            </div>
                            <div className='price-text'>
                                <h2 className='Rp-tag'>Rp. </h2>
                                <h2 className='product-price'>{item.price}</h2>
                            </div>
                            <div>
                                <button className='product-add-btn' onClick={() => addItem(item)} >Add To Cart</button>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
            <div className='Footer'>
                <div className='FooterIsi'>
                    <img src='assets/title_word.svg' alt='title'/>
                    <p>Copyright - 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Produk