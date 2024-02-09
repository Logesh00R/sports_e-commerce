import React from 'react'

const CategoryProducts = ({title,image}) => {
  return (
   <article>
    <div className='category-product-title'>
        {title}
    </div>
    <figure>
        <div className='category-product-image-container'>
         <img src={image} alt={title}/>   
        </div>
    </figure>
   </article>
  )
}

export default CategoryProducts;