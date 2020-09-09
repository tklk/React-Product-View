import React, { useState } from 'react'
import '../style/productAdmin.css'

const AddProduct = (props) => {
    const newProduct = {
        _id: null,
        title: 'New product by react',
        price: 777,
        description: 'react app',
        imageUrl: 'https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/11213-2022-tesla-cybertruck'
    }

	const [ product, setProductList ] = useState(newProduct);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setProductList({ ...product, [name]: value });
    }
    
    const createProduct = (event) => {
        event.preventDefault();
        if (!product.title || !product.description) return
        props.addProduct(product);
        setProductList(newProduct);
    }

	return (
        <form className="product-form" onSubmit={(event) => { createProduct(event) }}>
            <div className="form-control">
                <label className="title">Name</label>
                <input type="text" name="title" value={product.title} onChange={handleInputChange} placeholder="tesla toy"/>
            </div>
            <div className="form-control">
                <label className="price">Price</label>
                <input type="number" name="price" value={product.price} onChange={handleInputChange} />
            </div>
            <div className="form-control">
                    <label className="description">Description</label>
                    <input type="text" name="description" value={product.description} onChange={handleInputChange} placeholder="tesla toy @ mart.tklk.nctu.me"/>
            </div>
            <div className="form-control">
                <label className="imageUrl">Image</label>
                <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleInputChange} placeholder="https://avatars1.githubusercontent.com/u/51029882?s=460&u=e305e83de3c8d5eb05ba5faa496390d76772296d&v=4"/>
            </div>
            <button className="btn create">Create</button>
        </form>
    )
}

export default AddProduct

/*
<button className="btn create" onClick={ (e) => { console.log(e); createProduct(product) } }>Create</button>
<button className="btn update" onClick={ () => { updateProductDetail(product) } }>Update</button>
<button className="btn danger" onClick={ () => { deleteProduct(product._id) } }>Delete</button>               
*/