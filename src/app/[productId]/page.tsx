
import { fetchDataById } from '@/utils';
import React from 'react'
import Buttons from '@/components/ProductBtns';
import ProductBtns from '@/components/ProductBtns';

interface Props {
    params: {productId: string}
}
const page = async({params}: Props) => {
  
  const product = await fetchDataById(parseInt(params.productId));

  const {id, title, category, price, discountPercentage, rating, description, } = product;

  return (
    <div className="bg-gray-100 pt-52">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">

        <div className="w-full md:w-1/2 px-4 mb-8">
          <img 
          src={product.images[0]} alt="Product"
          className="w-full h-auto rounded-lg shadow-md mb-4 bg-amber-50" id="mainImage" 
          />
        </div>
        
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4"></p>
          <div className="mb-4">
            <span className="text-2xl font-bold mr-2">{discountPercentage}</span>
            <span className="text-gray-500 line-through">{price}</span>
          </div>
          
          <div className="flex items-center mb-4">
          {
            [...Array(5)].map((star, index)=> {
              if(index < Math.round(rating)) {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="size-6 text-yellow-500">
                    <path fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd" />
                  </svg>
                )
              } else {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="size-6 text-gray-500">
                    <path fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd" />
                  </svg>
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