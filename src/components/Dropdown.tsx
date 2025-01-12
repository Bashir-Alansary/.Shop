"use client"
import { DropdownItemType } from '@/types';
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

interface Props {
    list: DropdownItemType [],
}

const Dropdown = ({list}: Props) => {

    const [showDrodmenu, setShowDrobmenu] = useState(false);
    
    const handleToggleBtn = (): void => {
      setShowDrobmenu(!showDrodmenu);
    }

  return (
    <div className="relative w-56">
        <button 
        className="inline-flex justify-between items-center w-full overflow-hidden rounded-md border bg-white p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        onClick={handleToggleBtn}
        >
        <span
        className="pr-3 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
        View on Storefront
        </span>
        <span className="pl-3 border-s"><FaChevronDown /></span>
        </button>

        <div
            className={`${showDrodmenu ? "max-h-[290px]" : "max-h-0"} absolute overflow-hidden end-0 z-10 mt-2 w-full rounded-md border border-gray-100 bg-white shadow-lg transition-all duration-500`}
            role="menu"
            >
            {
            list.map(item=> {
                const {id, name, value} = item;
                return (
                    <button
                    key={id}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-400 hover:text-gray-700"
                    role="menuitem"
                    >
                        {name}
                    </button>
                )
            })
            }
        </div>
    </div>
  )
}

export default Dropdown