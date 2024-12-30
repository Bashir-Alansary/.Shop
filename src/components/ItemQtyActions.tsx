import { addInputValAsQty, addToCart } from '@/lib/slices/cartSlice';
import { RootState } from '@/lib/store';
import { CartItemType } from '@/types'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    item: CartItemType,
}

const ItemQtyActions:FC<Props> = ({item}) => {

    const dispatch = useDispatch();
    const {qty} = item;

    const handleChange = (e:any) => {
        if(e.target.value === "" || e.target.value < 1) {
            dispatch(addInputValAsQty({product:item, qty:1}));
        } else {
            dispatch(addInputValAsQty({product:item, qty:parseInt(e.target.value)}));
        }
    }

  return (
    <div>
        <form>
            <input
            type="number"
            min="1"
            defaultValue={qty.toString()}
            onChange={handleChange}
            className="h-8 w-12 rounded text-[17px] border-gray-600 bg-gray-50 p-0 text-center text-primary  focus:outline-none"
            />
        </form>
    </div>
  )
}

export default ItemQtyActions