"use client"
import { removeFromCart, totalCartItemSelector } from '@/lib/slices/cartSlice';
import { setShowSubcart } from '@/lib/slices/global';
import { RootState } from '@/lib/store';
import { ItemType } from '@/types';
import Link from 'next/link';
import React from 'react'
import { IoMdClose } from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import ItemQtyActions from './ItemQtyActions';

const Subcart = () => {

    const {cartItems, qty} = useSelector((state:RootState) => state.cartSlice);
    const {showSubcart} = useSelector((state:RootState) => state.globalSlice);
    const dispatch = useDispatch();

    const total = useSelector(totalCartItemSelector);

  return (
    <div
    className={`${showSubcart? "max-h-[480px]" : "max-h-0 py-0"} group fixed top-24 right-[65px] w-screen max-w-sm bg-slate-100 shadow-md px-4 py-7 sm:px-6 lg:px-8 overflow-hidden transition-all duration-500 ease-in-out`}
    >
        <button
        className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
        onClick={() => dispatch(setShowSubcart(false))}
        >
            <IoMdClose className="text-xl"/>
        </button>
        {cartItems.length ?
        <div className="mt-4 space-y-6">
            <ul className="space-y-4 max-h-60 overflow-y-hidden group-hover:overflow-y-scroll  group-hover:pr-2">
                {
                    cartItems.map((item) => {
                        const {id, thumbnail, title, price, brand, qty} = item;
                        return (
                            <li key={id} className="flex items-center gap-3">
                                <img
                                src={thumbnail}
                                alt={title}
                                className="size-16 rounded object-cover bg-white"
                                />

                                <div>
                                <h3 className="text-[15px] font-bold text-primary">{title}</h3>
                                <span className='text-sm font-bold text-secondary'>{qty} X {price}</span>
                                </div>

                                <div className="flex flex-1 items-center justify-end gap-2">
                                <ItemQtyActions item={item} />
                                <button
                                className="text-gray-600 transition hover:text-red-600"
                                onClick={()=>dispatch(removeFromCart(id))}
                                >
                                    <IoTrashBinOutline />
                                </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="space-y-4 text-center">
                <Link
                href="/cart"
                className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                onClick={()=>dispatch(setShowSubcart(false))}
                >
                    View my cart ({total})
                </Link>

                <a
                href="#"
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                    Checkout
                </a>
            </div>
        </div>
        : <p className='text-center'>Your cart is empty</p>
        }
        <div className='w-fit mt-3 mx-auto'>
        <Link
        href="/"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
            Continue shopping
        </Link>
        </div>
    </div>
  )
}

export default Subcart