import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <div
        className='group relative'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to={`/products/${product?.id}`}>
          <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-800/50 lg:aspect-none lg:h-80 h-96 border border-gray-700/50'>
            <img
              src={product?.image}
              alt={product?.name}
              className='h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110'
            />
          </div>
        </Link>

        <div className='mt-4 flex justify-between'>
          <div>
            <h3 className='text-sm text-foreground'>
              <Link to={`/products/${product?.id}`}>
                <span aria-hidden='true'>{product?.name}</span>
              </Link>
            </h3>
          </div>

          <p className='text-sm font-medium text-foreground'>
            ${product?.new_price}
          </p>
        </div>
      </div>

      {hovered && (
        <div className={`
          fixed inset-0 z-50 flex items-center justify-center
          bg-black/60
          transition-all duration-700 ease-in-out
          ${hovered ? 'opacity-100' : 'opacity-0'}
          pointer-events-none
        `}>
          <img
            src={product?.image}
            alt={product?.name}
            className={`
              max-w-[70vw] max-h-[70vh] object-contain
              transition-all duration-700 ease-in-out
              ${hovered ? 'scale-100' : 'scale-75'}
            `}
          />
        </div>
      )}
    </>
  )
}

export default Item