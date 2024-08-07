// import axios from 'axios';
// import React, { useState } from 'react'

// const CreateProduct = () => {
//     let [product, setProduct] = useState({ company: "", model: "", price: 0, image: " ", specification: "" });
//     let [errorMessage, setErrorMessage] = useState("");
//     let [submitted, setSubmitted] = useState(false);
//     let changeInput = (event) => {
//         setProduct({ ...product, [event.target.name]: event.target.value })
//     }
//     let submitHandler = (event) => {
//         event.preventDefault();
//         let url = `https://basket-app-d7kp.onrender.com/api/products`;
//         axios.post(url, product)
//             .then((response) => {
//                 setSubmitted(true);
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
//                     image:reader.result
//                 })
//             }else{
//                 alert("Error")
//             }
//         })
//     }
//     return <React.Fragment>
//         <div className="container mt-5">
//             {/* <pre>{JSON.stringify(product)}</pre> */}
//             <div className="row">
//                 <div className="col-md-4">
//                     <div className="card">
//                         <div className="card-header"><h3>Create Product</h3></div>
//                         <div className="card-body">
//                             <form onSubmit={submitHandler}>
//                                 <div className='form-group'>
//                                     <input type="text" onChange={changeInput} name="company" id="" className='form-control' placeholder='Mobile Company' />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="file" name="image" id="customFile" required onChange={changeImageHandler} />
//                                 </div>
//                                 <div className='form-group'>
//                                     <input type="text" onChange={changeInput} name="model" id="" className='form-control' placeholder='Model' />
//                                 </div>
//                                 <div className='form-group'>
//                                     <input type="text" onChange={changeInput} name="price" id="" className='form-control' placeholder='Price' />
//                                 </div>
//                                 <div className='form-group'>
//                                     <input type="text" onChange={changeInput} name="specification" id="" className='form-control' placeholder='Specifications' />
//                                 </div>
//                                 <input type="submit" value="Create Product" className='btn btn-success' />

//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </React.Fragment>
// }

// export default CreateProduct;




// //After UI update

import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateProduct.css'; 

const CreateProduct = () => {
    let [product, setProduct] = useState({ company: "", model: "", price: 0, image: " ", specification: "" });
    let [errorMessage, setErrorMessage] = useState("");
    let [submitted, setSubmitted] = useState(false);

    let changeInput = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    let submitHandler = (event) => {
        event.preventDefault();
        let url = `https://basket-app-d7kp.onrender.com/api/products`;
        axios.post(url, product)
            .then((response) => {
                setSubmitted(true);
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
        <React.Fragment>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-sm custom-card">
                        <div className="card-header bg-light">
                            <h3 className="text-center">Create Product</h3>
                        </div>
                        <div className="card-body">
                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}
                            {submitted && (
                                <div className="alert alert-success" role="alert">
                                    Product created successfully!
                                </div>
                            )}
                            <form onSubmit={submitHandler}>
                                <div className='form-group mb-2'>
                                    <label htmlFor="company" className="form-label">Company</label>
                                    <input type="text" onChange={changeInput} name="company" className='form-control' placeholder='Mobile Company' required />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input type="file" name="image" className="form-control" required onChange={changeImageHandler} />
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor="model" className="form-label">Model</label>
                                    <input type="text" onChange={changeInput} name="model" className='form-control' placeholder='Model' required />
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input type="number" onChange={changeInput} name="price" className='form-control' placeholder='Price' required />
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor="specification" className="form-label">Specifications</label>
                                    <textarea onChange={changeInput} name="specification" className='form-control' placeholder='Specifications' rows="2" required></textarea>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className='btn btn-success'>Create Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreateProduct;
