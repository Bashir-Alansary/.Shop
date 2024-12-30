import { ItemType } from '@/types'
import Link from 'next/link'
import React, { FC } from 'react'
import AddToCartBtn from './AddToCartBtn'

interface Props {
  product: ItemType
}
const Item = ({product}: Props) => {
  const {id, thumbnail, title, price} = product;
  return (
    <div className="w-[24%] mb-16">
      <Link href={"/" + id}>
        <img
          src={thumbnail}
          alt=""
          className="aspect-square w-full rounded object-cover bg-[#F3F4F6]"
        />
      </Link>
        

        <div className="mt-3">
          <Link href={"/" + id}>
            <h3 className="font-medium text-primary text-lg">{title}</h3>
          </Link>

            <div className='flex justify-between'>
              <p className="mt-1 text-lg font-bold text-secondary">{price}</p>
              <AddToCartBtn product={product} qty={1} />
            </div>
        </div>
    </div>
  )
}

export default Item