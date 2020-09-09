import React, { useEffect, useState, Fragment } from 'react'
import AddProduct from './components/addProduct'
import AdminProduct from './components/adminProduct'
import loadResult from './components/load';
import ProductList from './components/productList';
import DefualtBack from './components/includes/header';
import * as AdminService from './services/admin'

import './App.css';

const App = () => {
	const ListLoading = loadResult(ProductList);
	const [appState, setAppState] = useState({ loading: false });

	const initialFormState = { _id: null, title: '', description: '' };
	const [ selectProduct, setSelect ] = useState(initialFormState);
	const [ productlist, setProductList ] = useState(null);
	const [ editing, setEditing ] = useState(false);
	const [ newProduct, setNewProduct ] = useState(false);

	useEffect(() => {
		setAppState({ loading: true });
		async function fetchData() {			
			const data = await AdminService.getList();
			setProductList(data);
			setAppState({ loading: false });
		}
		fetchData();
	}, [setAppState]);

	const addProduct = (product) => {		
		async function commit(product) {			
			const result = await AdminService.createProduct(product);
			setProductList([ ...productlist, result ]);
			setNewProduct(false);
		}
		commit(product);
	}

	const deleteProduct = (pid) => {
		setEditing(false);
		setProductList(productlist.filter(product => product._id !== pid));
		setSelect(initialFormState);
		async function commit(pid) {
			await AdminService.deleteProduct(pid);
		}
		commit(pid);		
	}

	const updateProduct = (pid, updateProd) => {
		setEditing(false);
		setProductList(productlist.map(product => (product._id === pid ? updateProd: product)));
		async function commit(updateProd) {	
			await AdminService.updateProduct(updateProd);
		}
		commit(updateProd);
	}

	const editRow = (product) => {
		window.scrollTo(0, 0);
		setEditing(true);
		setSelect({ _id: product._id, title: product.title, price: product.price, description: product.description, imageUrl: product.imageUrl });
	}

	let props = {
		productlist: productlist,
		editRow: editRow,
		deleteProduct: deleteProduct
	};
	
	const createNewProduct = (event) => {
		event.preventDefault();
		setNewProduct(true);		
	};

	return (
		<div className="App">
			<DefualtBack/>
				<div className="main-control">
					<div className="newProd">						
						{ editing ? (
							<Fragment>
								<h2>Edit product details</h2>
								<AdminProduct
									editing={editing}
									setEditing={setEditing}
									selectProduct={selectProduct}
									updateProduct={updateProduct}
									deleteProduct={deleteProduct}
								/>
							</Fragment>
						) : ( newProduct ? (
							<Fragment>
							<h2>Add new product</h2>
							<AddProduct addProduct={addProduct} />
							</Fragment>
						): (
							<button className="btn" onClick={(event) => { createNewProduct(event) }}>Create Product</button>
						))}
					</div>
				</div>
				<div className="main-item">
					<div className="grid">					
						<ListLoading isLoading={appState.loading} ProductList={props}/>
					</div>
				</div>
    	</div>
	)
}
export default App
