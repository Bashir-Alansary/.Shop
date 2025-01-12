"use client"
import { fetchProducts } from '@/lib/slices/shopSlice';
import { AppDispatch, RootState } from '@/lib/store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Item from '../Item';
import Loading from '../Loading';
import Paginations from '../Paginations';

const Products = () => {

    const {filteredCategoryBrands, loading} = useSelector((state:RootState)=>state.shopSlice);
    const dispatch = useDispatch<AppDispatch>();

    /* pagination variables */
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageLength, setPageLength] = useState<number>(6);
    const pages = Math.ceil(filteredCategoryBrands.length / pageLength);
    const startIndex = (currentPage - 1) * pageLength;
    const endIndex = startIndex + pageLength;
    const shownItems = filteredCategoryBrands.slice(startIndex, endIndex);
    
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [])

    useEffect(()=>{
      setCurrentPage(1);
  }, [filteredCategoryBrands.length])

  if(loading) {
    return (
      <Loading />
    )
  }
  return (
    <>
    <div className='flex flex-wrap'>
        {
            shownItems.map(item => <Item 
              key={item.id} 
              itemClass={`w-[295px] mb-16 group [&:not(:nth-child(3n))]:mr-[29.885px]`} 
              product = {item} 
              />
            )
        }
    </div>
    <Paginations 
    currentPage={currentPage}
    setCurrentPage={setCurrentPage} 
    pages={pages} 
    pageLength={pageLength}  
    />
    </>
  )
}

export default Products