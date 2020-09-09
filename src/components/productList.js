import React from 'react'
import '../style/productList.css'

const ProductList = (props) => {  
  const data = props.ProductList;
  if (!data.productlist || data.productlist.length === 0) {
    return (<p>Not found</p>);
  }
  return (
    <div>
        {data.productlist || data.productlist.length === 0 ? (
            data.productlist.map(product => (
                <article className="card product-item" onClick={() => { data.editRow(product) }} key={product._id} data-testid="card">
                    <header className="card__header">
                        <h1 className="product__title">{product.title}</h1>
                    </header>
                    <div className="card__image">
                        <img className="product__image" src={product.imageUrl} alt=""/> 
                    </div>
                    <div className="card__content">
                        <h2 className="product__price">{product.price}</h2>
                        <p className="product__description">{product.description}</p> 
                    </div>
                </article>
            ))
        ) : (
            <p>Product not found! Please create a new one!</p>
        )}
    </div>
  )
}

export default ProductList