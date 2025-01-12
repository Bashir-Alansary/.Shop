import { ItemType } from '@/types'
import Link from 'next/link'
import React from 'react'

import AddToCartBtn from './AddToCartBtn'
import { applyDiscount } from '@/utils'

interface Props {
  itemClass: string,
  product: ItemType
}
const Item = ({itemClass, product}: Props) => {
  const {id, thumbnail, title, price, discountPercentage} = product;
  return (
    <div className={`${itemClass} mb-16 group`}>
      <Link href={"/" + id} className='block w-full overflow-hidden'>
        <img
          src={thumbnail}
          alt=""
          className="aspect-square w-full rounded object-cover bg-[#F6F6F6] transition-all duration-500 group-hover:scale-110"
        />
      </Link>
        

        <div className="mt-3">
          <Link href={"/" + id}>
            <h3 className="font-medium text-[18px]">{title}</h3>
          </Link>

            <div className='flex justify-between items-center'>
              <p className="mt-1 text-lg">
              <span className="font-bold text-secondary mr-2">${applyDiscount(price, discountPercentage)}</span>
              <span className="text-gray-500 text-sm line-through">${price}</span>
              </p>
              <div className='mt-1'>
                <AddToCartBtn addClass='add-to-cart-btn' product={product} qty={1}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Item