import axios from 'axios';

const __apiUrl = 'https://localhost:8080';
const handleError = (error) => {
    if (error) {
        console.error("An error occurred: ", error.message);
    } else {
        console.error("Backend returned code " + error.status+", body was: "+ error.message);
    }
}
const __debug = (message, data) => {
    console.log(message)
    console.log(data)
}

export const getList = async() => {
    // get("/api/list")
    let result, data;
    try {
        result = await axios.get(__apiUrl);
    } catch (error) {
        handleError(error);
        return
    }
    data = result.data;
    __debug("data: ", data);
    return data;
}

export const createProduct = async(product) => {
    // post("/api/list")
    let result, data;
	try {
		result = await axios.post(__apiUrl, product);
	} catch (error) {
        handleError(error);
        return data;
	}
    data = result.data;
    __debug("new product: ", data);
    return data;
}

export const updateProduct = async(product) => {
    // put("/api/list/:prodId")
    let result, data;    
	try {
		result = await axios.put(__apiUrl+'/'+product._id, product);
	} catch (error) {
        handleError(error);
        return data;
	}
    data = result.data;
    __debug("update product: ", data);
	return data;
}

export const deleteProduct = async(productId) => {
    // delete("/api/list/:prodId")
    let delId, data;
	try {
		delId = await axios.delete(__apiUrl+'/'+productId);
	} catch (error) {
        handleError(error);
        return data;
	}
    data = delId.data;
    __debug("Deleted Id: ", data);
    return data;
}