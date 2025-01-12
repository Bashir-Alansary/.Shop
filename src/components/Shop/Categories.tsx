'use client'
import { filterByCategory, setActiveBrand } from '@/lib/slices/shopSlice';
import { RootState } from '@/lib/store';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Categories = () => {

    const {products} = useSelector((state:RootState) => state.shopSlice);
    const categories: string[] = Array.from(new Set(products.map((item) => item.category)));
    const[activeBtn, setActiveBtn]= useState<number | undefined>();
    const dispatch = useDispatch();

    const handleClick = (item: string, index: number) => {
        dispatch(filterByCategory(item));
        dispatch(setActiveBrand());
        setActiveBtn(index);
    }

  return (
    <div className='mb-8'>
        <h2 className='text-lg font-semibold text-primary mb-3'>categories</h2>
        <ul>
        {
            categories.map((item, index) => {
                return (
                    <li key={index}>
                        <button
                        className={`${activeBtn === index? "text-secondary": "text-black"} mb-2 text-[17px]`}
                        onClick={()=> handleClick(item, index)}
                        >
                        {item}
                        </button>
                    </li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default Categories