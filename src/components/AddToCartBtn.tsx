"use client"
import { addToCart } from '@/lib/slices/cartSlice';
import { RootState } from '@/lib/store';
import { ItemType } from '@/types';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    product: ItemType,
    qty: number,
}

const AddToCartBtn = ({product, qty}: Props) => {

    const cart = useSelector((state:RootState) => state.cartSlice)
    const dispatch = useDispatch();
    
  return (
    <button
    className='bg-slate-500 text-[#fff] rounded-md px-5 font-semibold text-sm'
    onClick={()=> dispatch(addToCart({product, qty}))}
    >
        Add to cart
    </button>
  )
}

export default AddToCartBtn