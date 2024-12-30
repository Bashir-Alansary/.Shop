"use client"
import { RootState } from '@/lib/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoTrashBinOutline } from "react-icons/io5";
import { addToCart, removeFromCart, totalPriceSelector } from '@/lib/slices/cartSlice';
import ItemQtyActions from '@/components/ItemQtyActions';

const page = () => {

    const {cartItems, qty} = useSelector((state:RootState) => state.cartSlice);
    const totalPrice = useSelector(totalPriceSelector);
    const dispatch = useDispatch();

  return (
    <section className='pt-28'>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
            <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
            </header>

            <div className="mt-8">
                <ul className="space-y-4">
                    {
                        cartItems.map(item => {
                            const {id, thumbnail, title, price, brand, qty} = item;
                            return (
                                <li key={id} className="flex items-center gap-4">
                                    <img
                                    src={thumbnail}
                                    alt=""
                                    className="size-20 rounded object-cover"
                                    />

                                    <div>
                                    <h3 className="text-[17px] font-bold text-primary">{title}</h3>

                                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                        <dt className="inline text-sm font-bold">price: </dt>
                                        <dd className="inline text-sm font-bold text-secondary">{price}</dd>
                                        </div>

                                        <div>
                                        <dt className="inline text-sm font-bold">brand: </dt>
                                        <dd className="inline text-sm font-bold text-secondary">{brand}/ {qty}</dd>
                                        </div>
                                    </dl>
                                    </div>

                                    <div className="flex flex-1 items-center justify-end gap-2">
                                    <ItemQtyActions item={item} />
                                    <button
                                    className="text-primary transition hover:text-red-600"
                                    onClick={()=>dispatch(removeFromCart(id))}
                                    >
                                        <span className="sr-only">Remove item</span>
                                        <span className='text-xl'><IoTrashBinOutline /></span>
                                    </button>
                                    </div>
                                </li>
                            )
                        })
                    }
                
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">

                    <div className="flex justify-between !text-base font-medium">
                        <dt className='text-xl font-semibold text-primary'>Total</dt>
                        <dd className='text-lg font-semibold text-secondary'>£{totalPrice}</dd>
                    </div>
                    </dl>

                    <div className="flex justify-end">
                    <a
                        href="#"
                        className="block rounded bg-primary px-5 py-3 text-[15px] font-bold text-gray-100 transition hover:bg-gray-600"
                    >
                        Checkout
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default page