import React, { useState, useEffect } from 'react'
import '../style/productAdmin.css'

const AdminProduct = (props) => {
    const [ product, setProductList ] = useState(props.selectProduct);

    useEffect(() => {
        setProductList(props.selectProduct);
    }, [ props ]);        

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductList({ ...product, [name]: value });
    }

    const updateProductDetail = (event) => {
        event.preventDefault();
        props.updateProduct(product._id, product);
    }

    const deleteProductById = (event) => {
        event.preventDefault();
        props.deleteProduct(product._id);
    }

    return (
        <form className="product-form" onSubmit={(event) => { updateProductDetail(event) }}>
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
            <button className="btn update">Update</button>
            <button className="btn danger" onClick={(event) => { deleteProductById(event) }} >
                Delete
            </button>
        </form>
    )
}

export default AdminProduct