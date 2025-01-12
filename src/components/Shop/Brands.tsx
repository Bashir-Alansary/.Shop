'use client'
import { filterCategoryBrand, setActiveBrand } from '@/lib/slices/shopSlice'
import { RootState } from '@/lib/store'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Brands = () => {

    const {filteredByCategory, activeBrand} = useSelector((state:RootState) => state.shopSlice);
    const dataWithBrands = filteredByCategory.filter(item => item.brand);
    const brands: string[] = Array.from(new Set(dataWithBrands.map((item) => item.brand)));
    const dispatch = useDispatch();

        const handleClick = (item: string, index: number) => {
            dispatch(filterCategoryBrand(item));
            dispatch(setActiveBrand(index))
        }

  return (
    <>
    {
        brands.length ?
        <div className='mb-8'>
            <h2 className='text-lg font-semibold text-primary mb-3'>Brands</h2>
            <ul>
            {
            brands.map((item, index) => {
                return (
                    <li key={index}>
                        <button
                        className={`${activeBrand === index? "text-secondary": "text-black"} mb-2 text-[17px]`}
                        onClick={()=> handleClick(item, index)}
                        >
                        {item}
                        </button>
                    </li>
                )
            })
            }
            </ul>
        </div> : null
    }
    </>
  )
}

export default Brands