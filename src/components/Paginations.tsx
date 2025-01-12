"use client"
import { RootState } from '@/lib/store';
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from 'react-redux';

interface Props {
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
    pages: number,
    pageLength: number,
}

const Paginations = ({currentPage, setCurrentPage, pages, pageLength}: Props) => {

    const {filteredCategoryBrands} = useSelector((state:RootState)=>state.globalSlice);
    const handlePrevPageBtn = () => {
        if (currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPageBtn = () => {
        if (currentPage < pages){
            setCurrentPage(currentPage + 1);
        }
    }
    
  return (
    <div className="flex items-center justify-center gap-3 mx-auto my-8">
    <button
    className={`${currentPage === 1? "bg-gray-100" : "bg-gray-50"} pagination-btn`}
    onClick={handlePrevPageBtn}
    >
        <FaChevronLeft />
    </button>

    <p className="text-sm font-bold">
        <span className='text-secondary'>{currentPage}</span>
        {
        pages !== 1 && 
        <>
        <span className="mx-0.25 font-semibold"> / </span>
        <span className='text-primary'>{pages}</span>
        </>
        }
    </p>

    <button
    className={`${currentPage === pages? "bg-gray-100" : "bg-gray-50"} pagination-btn`}
    onClick={handleNextPageBtn}
    >
        <FaChevronRight />
    </button>
    </div>
  )
}

export default Paginations