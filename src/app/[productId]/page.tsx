
import { applyDiscount, fetchDataById } from '@/utils';
import React from 'react'
import { FaStar } from "react-icons/fa";
import ProductBtns from '@/components/Product/ProductBtns';
import Breadcrumb from '@/components/Breadcrumb';

interface Props {
    params: {productId: string}
}
const page = async({params}: Props) => {
  
  const product = await fetchDataById(parseInt(params.productId));

  const {title, price, discountPercentage, rating, description, } = product;

  return (
    <div className="">
      <Breadcrumb title={title} />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap -mx-4">

          <div className="w-full md:w-1/2 px-4 mb-8">
            <img 
            src={product.images[0]} alt="Product"
            className="w-full max-h-[500px] object-contain rounded-lg shadow-md mb-4 bg-amber-50" id="mainImage" 
            />
          </div>
          
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4"></p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${applyDiscount(price, discountPercentage)}</span>
              <span className="text-gray-500 line-through">${price}</span>
            </div>
            
            <div className="flex items-center mb-4">
            {
              [...Array(5)].map((star, index)=> {
                if(index < Math.round(rating)) {
                  return (
                    <FaStar className='text-[#FFEB3B] text-lg' />
                  )
                } else {
                  return (
                    <FaStar className='text-gray-300 text-lg' />
                  )
                }
              })
            }
            
              <span className="ml-2 text-gray-600">({rating} reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">{description}</p>

            <ProductBtns product={product} />

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page