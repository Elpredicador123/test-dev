import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <div className='group relative overflow-hidden rounded-md border border-gray-700/50 bg-gray-800/50 p-2'>
      <Link to={`/products/${product?.id}`}>
        <div className='relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80 h-96'>
          <img 
            src={product?.image} 
            alt={product?.name} 
            className='h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110' 
          />
          <div className='absolute inset-0 bg-light-gray/30 bg-gray-200/40 translate-y-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-y-0 mix-blend-multiply' />
        </div>
      </Link>
      <div className='mt-4 flex justify-between px-2 pb-2'>
        <div>
          <h3 className='text-sm text-foreground font-medium'>
            <Link to={`/products/${product?.id}`}>
              <span>{product?.name}</span>
            </Link>
          </h3>
        </div>
        <p className='text-sm font-semibold text-foreground'>${product?.new_price}</p>
      </div>
    </div>
  )
}

export default Item