"use client"
import { ItemType } from '@/types'
import React, { useState } from 'react'
import AddToCartBtn from '../AddToCartBtn'

interface Props {
    product: ItemType
}

const ProductBtns = ({product}: Props) => {

    const [inputVal, setInputVal] = useState<number>(1);
    
    const handleChange = (e:any) => {
        if(e.target.value > 0 && e.target.value !== "") {
            setInputVal(parseInt(e.target.value));
            e.target.style.outline = "2px solid #c5c5c5";
            e.target.style.color = "#000"
        } else {
            setInputVal(0);
            e.target.style.outline = "2px solid red";
            e.target.style.color = "red"
        }
    }

  return (
    <div>
        <div className="mb-6">
            <input 
            type="number" 
            name="quantity" 
            min="1"
            defaultValue={inputVal}
            onChange={handleChange}
            className="w-14 h-9 py-0 px-2 text-center rounded-md shadow-sm focus:outline-0" 
            />
        </div>
        <div className="flex space-x-4 mb-6">
            <AddToCartBtn addClass='add-qty-btn' product={product} qty={inputVal}/>
            <button
                className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                Wishlist
            </button>
        </div>
    </div>
  )
}

export default ProductBtns