"use client"
import { addToCart } from '@/lib/slices/cartSlice';
import { RootState } from '@/lib/store';
import { ItemType } from '@/types';
import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  addClass: string,
    product: ItemType,
    qty: number,
}

const AddToCartBtn = ({addClass, product, qty}: Props) => {

    const cart = useSelector((state:RootState) => state.cartSlice)
    const dispatch = useDispatch();
    
  return (
    <button
    className={`${addClass} inline-flex items-center justify-between text-[15px] font-bold`}
    onClick={()=> dispatch(addToCart({product, qty}))}
    >
        <FaShoppingBag />
        <span>Add</span>
    </button>
  )
}

export default AddToCartBtn