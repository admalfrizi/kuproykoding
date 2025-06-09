import React from 'react';
import { useCart } from "react-use-cart";
import './Cart.css';

const Cart = () => {

    const {
        isEmpty,
        cartTotal,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    if (isEmpty) return <div className='cartViewEmpty'>Keranjangnya Kosong Tambahin Sono !</div>

    return (
        <div className='CartView'>
            <div className='header'>
                <div className='cartViewHeader'>Keranjang Belanja</div>
                <div className='totalItemsInfo'>Total Barang : {totalItems}</div>
            </div>
            <table>
                <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={item.image} style={{ height: '6rem' }} alt='' />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>Kuantitas : {item.quantity}</td>
                                <td>
                                    <button
                                        className='btn-min'
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <button
                                        className='btn-add'
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className='btn-remove'
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Menghapus Barang Dari Daftar
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='bottom-view'>
                <div className='cart-items-total-price'>
                    Total Harga :
                    <div className='cart-items-total'>Rp. {cartTotal} </div>
                </div>
                <div className='button-remove'>
                    <button
                        className='btn-remove-cart'
                        onClick={() => emptyCart()}
                    >
                        Kosongkan Belanjaan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart