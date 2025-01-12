import React from 'react'
import Item from './Item';
import { ItemType } from '@/types';
import { fetchData } from '@/utils';

const Popular = async() => {
    const data = await fetchData();
  return (
    <div>
        <div className="container mx-auto pt-24">
            <h1 className='text-center text-3xl text-primary font-bold mb-10'>Popular Products</h1>
            <div className="content flex flex-wrap justify-between">
                {
                    data.products.map((item:ItemType, index:number) => {
                        if(index < 8) {
                            return (
                                <Item itemClass="w-[295px]" product = {item} />
                            )
                        }
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Popular