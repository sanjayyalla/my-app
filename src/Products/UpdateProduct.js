// import axios from "axios";
// import React, { Fragment, useEffect } from "react";
// import { useState } from "react";
// import { useParams ,Navigate} from "react-router-dom";

// const UpdateProduct = () => {
//     let [productId] = useState(useParams().id);
//     let [flag, setFlag] = useState(false);
//     let [errorMessage, setErrorMessage] = useState("");
//     let [submitted, setSubmitted] = useState(false);
//     let [product, setProduct] = useState({ company: "", model: "", price: 0, image: " ", specification: "" });
//     useEffect(() => {
//         let updateUrl = `https://basket-app-d7kp.onrender.com/api/products/${productId}`;
//         axios.get(updateUrl)
//             .then((response) => {
//                 setProduct(response.data);
//             })
//     }, [])
//     let changeInput = (event) => {
//         setProduct({ ...product, [event.target.name]: event.target.value })
//     }
//     let submitHandler = (event) => {
//         event.preventDefault();
//         let url = `https://basket-app-d7kp.onrender.com/api/products/${productId}`;
//         axios.put(url, product)
//             .then((response) => {
//                 setFlag(true);
//             })
//             .catch((err) => {
//                 setErrorMessage(err);
//             })
//     }
//     let changeImageHandler = async (event) => {
//         let imageFile = event.target.files[0];
//         let reader = new FileReader();
//         reader.readAsDataURL(imageFile);
//         reader.addEventListener("load", () => {
//             if (reader.result) {
//                 setProduct({
//                     ...product,
//                     image: reader.result
//                 })
//             } else {
//                 alert("Error")
//             }
//         })
//     }
//     return <Fragment>
//         {
//             flag ? <Navigate to='/admin'/>:<div className="container">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <div className="card">
//                             <div className="card-header"><h3>Create Product</h3></div>
//                             <div className="card-body">
//                                 <form onSubmit={submitHandler}>
//                                     <div className='form-group'>
//                                         <input type="text" value={product.company} onChange={changeInput} name="company" id="" className='form-control' placeholder='Mobile Company' />
//                                     </div>
//                                     <div className="form-group">
//                                         <input type="file" name="image" id="customFile" required onChange={changeImageHandler} />
//                                     </div>
//                                     <div className='form-group'>
//                                         <input type="text" value={product.model} onChange={changeInput} name="model" id="" className='form-control' placeholder='Model' />
//                                     </div>
//                                     <div className='form-group'>
//                                         <input type="text" value={product.price} onChange={changeInput} name="price" id="" className='form-control' placeholder='Price' />
//                                     </div>
//                                     <div className='form-group'>
//                                         <input type="text" value={product.specification} onChange={changeInput} name="specification" id="" className='form-control' placeholder='Specifications' />
//                                     </div>
//                                     <input type="submit" value="Create Product" className='btn btn-success' />

//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         }
//     </Fragment>


// }

// export default UpdateProduct;

// After updating file modification
// import axios from "axios";
// import React, { Fragment, useEffect, useState } from "react";
// import { useParams, Navigate } from "react-router-dom";

// const UpdateProduct = () => {
//     let { id } = useParams();
//     let [flag, setFlag] = useState(false);
//     let [errorMessage, setErrorMessage] = useState("");
//     let [product, setProduct] = useState({ company: "", model: "", price: 0, image: "", specification: "" });

//     useEffect(() => {
//         let updateUrl = `https://basket-app-d7kp.onrender.com/api/products/${id}`;
//         axios.get(updateUrl)
//             .then((response) => {
//                 setProduct(response.data);
//             })
//             .catch((err) => {
//                 setErrorMessage(err.message);
//             });
//     }, [id]);

//     let changeInput = (event) => {
//         setProduct({ ...product, [event.target.name]: event.target.value });
//     };

//     let submitHandler = (event) => {
//         event.preventDefault();
//         let url = `https://basket-app-d7kp.onrender.com/api/products/${id}`;
//         axios.put(url, product)
//             .then((response) => {
//                 setFlag(true);
//             })
//             .catch((err) => {
//                 setErrorMessage(err.message);
//             });
//     };

//     let changeImageHandler = async (event) => {
//         let imageFile = event.target.files[0];
//         let reader = new FileReader();
//         reader.readAsDataURL(imageFile);
//         reader.addEventListener("load", () => {
//             if (reader.result) {
//                 setProduct({
//                     ...product,
//                     image: reader.result
//                 });
//             } else {
//                 alert("Error");
//             }
//         });
//     };

//     return (
//         <Fragment>
//             {flag ? (
//                 <Navigate to='/admin' />
//             ) : (
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-4">
//                             <div className="card">
//                                 <div className="card-header"><h3>Update Product</h3></div>
//                                 <div className="card-body">
//                                     {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//                                     <form onSubmit={submitHandler}>
//                                         <div className='form-group'>
//                                             <input type="text" value={product.company} onChange={changeInput} name="company" className='form-control' placeholder='Mobile Company' />
//                                         </div>
//                                         <div className="form-group">
//                                             <input type="file" name="image" id="customFile" onChange={changeImageHandler} />
//                                             {product.image && <img src={product.image} alt="Product" style={{ width: "100%", marginTop: "10px" }} />}
//                                         </div>
//                                         <div className='form-group'>
//                                             <input type="text" value={product.model} onChange={changeInput} name="model" className='form-control' placeholder='Model' />
//                                         </div>
//                                         <div className='form-group'>
//                                             <input type="text" value={product.price} onChange={changeInput} name="price" className='form-control' placeholder='Price' />
//                                         </div>
//                                         <div className='form-group'>
//                                             <input type="text" value={product.specification} onChange={changeInput} name="specification" className='form-control' placeholder='Specifications' />
//                                         </div>
//                                         <input type="submit" value="Update Product" className='btn btn-success' />
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Fragment>
//     );
// };

// export default UpdateProduct;

//After updating UI
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

const UpdateProduct = () => {
    let { id } = useParams();
    let [flag, setFlag] = useState(false);
    let [errorMessage, setErrorMessage] = useState("");
    let [product, setProduct] = useState({ company: "", model: "", price: 0, image: "", specification: "" });

    useEffect(() => {
        let updateUrl = `https://basket-app-d7kp.onrender.com/api/products/${id}`;
        axios.get(updateUrl)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((err) => {
                setErrorMessage(err.message);
            });
    }, [id]);// Here id is used because whenever id is changed the useEffect is going to occur.

    let changeInput = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    let submitHandler = (event) => {
        event.preventDefault();
        let url = `https://basket-app-d7kp.onrender.com/api/products/${id}`;
        axios.put(url, product)
            .then((response) => {
                setFlag(true);
            })
            .catch((err) => {
                setErrorMessage(err.message);
            });
    };

    let changeImageHandler = async (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load", () => {
            if (reader.result) {
                setProduct({
                    ...product,
                    image: reader.result
                });
            } else {
                alert("Error");
            }
        });
    };

    return (
        <Fragment>
            {flag ? (
                <Navigate to='/admin' />
            ) : (
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow-sm custom-card">
                            <div className="card-header bg-light">
                                <h3 className="text-center">Update Product</h3>
                            </div>
                            <div className="card-body">
                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}
                                <form onSubmit={submitHandler}>
                                    <div className='form-group mb-2'>
                                        <label htmlFor="company" className="form-label">Company</label>
                                        <input type="text" value={product.company} onChange={changeInput} name="company" className='form-control' placeholder='Mobile Company' />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="image" className="form-label">Image</label>
                                        <input type="file" name="image" id="customFile" className="form-control-file" onChange={changeImageHandler} />
                                        {product.image && (
                                            <img
                                                src={product.image}
                                                alt="Product"
                                                className="img-fluid mt-2"
                                                style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }}
                                            />
                                        )}
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label htmlFor="model" className="form-label">Model</label>
                                        <input type="text" value={product.model} onChange={changeInput} name="model" className='form-control' placeholder='Model' />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input type="number" value={product.price} onChange={changeInput} name="price" className='form-control' placeholder='Price' />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label htmlFor="specification" className="form-label">Specifications</label>
                                        <textarea value={product.specification} onChange={changeInput} name="specification" className='form-control' placeholder='Specifications' rows="2"></textarea>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className='btn btn-success'>Update Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default UpdateProduct;
