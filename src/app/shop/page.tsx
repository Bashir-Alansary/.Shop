import Breadcrumb from '@/components/Breadcrumb';
import Dropdown from '@/components/Dropdown';
import Brands from '@/components/Shop/Brands';
import Categories from '@/components/Shop/Categories';
import Products from '@/components/Shop/Products';
import { dropdownNums, dropdownSort } from '@/constants';
import { fetchData } from '@/utils';
import React from 'react'

const page = async() => {

  const data = await fetchData(); 
  
  return (
    <div>
      <Breadcrumb title="Shop" />
        <div className='container pt-14 mx-auto flex justify-between'>
          <div className="w-[300px] mr-10">
            <Categories />
            <Brands />
          </div>
          <div className="w-3/4">
            <div className="flex justify-between items-center mb-10 bg-[#F3F4F6] p-3">
              <div className='w-fit'>view</div>
              <div className='flex w-fit'>
                <div className='w-fit mr-7'>
                  <Dropdown list = {dropdownSort} />
                </div>
                <div className='w-fit'>
                  <Dropdown list = {dropdownNums} />
                </div>
              </div>
            </div>
              <Products />
          </div>
        </div>
    </div>
  )
}

export default page