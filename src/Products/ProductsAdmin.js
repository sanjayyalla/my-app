// import axios from 'axios';
// import React, { Fragment, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// const ProductsAdmin = () => {
//     useEffect(() => {
//         getProducts();
//     }, [])
//     let [products, setProducts] = useState([]);
//     let getProducts = () => {
//         let url = 'https://basket-app-d7kp.onrender.com/api/products';
//         axios.get(url)
//             .then((response) => {
//                 setProducts(response.data);
//             })
//             .catch((err) => {

//             })
//     }
//     let delProduct = (id) => {
//         let delUrl = `https://basket-app-d7kp.onrender.com/api/products/${id}`;
//         axios.delete(delUrl)
//              .then((response)=>{
//                 getProducts(); 
//              })
//              .catch(()=>{

//              })
//     }
//     return (
//         <Fragment>
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <p className='h3'>Product Details</p>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-5">
//                         <div className="table table-hover">
//                             <thead className='bg-dark text-white'>
//                                 <tr>
//                                     <th>Product Id</th>
//                                     <th>Company</th>
//                                     <th>Model</th>
//                                     <th>Price</th>
//                                     <th>Specification </th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     products.length > 0 ? <>

//                                         {
//                                             products.map((product) => {
//                                                 return <tr>
//                                                     <td>{product._id}</td>
//                                                     <td>{product.company}</td>
//                                                     <td>{product.model}</td>
//                                                     <td>{product.price}</td>
//                                                     <td>{product.specification}</td>
//                                                     <td>
//                                                         <Link className='btn btn-warning'   to={`/update/${product._id}`}>Update</Link>
//                                                         <Link className='btn btn-danger' onClick={delProduct.bind(this, product._id)}>Delete</Link>

//                                                     </td>
//                                                 </tr>
//                                             })
//                                         }

//                                     </> : <Fragment>
//                                         <tr>
//                                             <td className='text-danger'  colSpan="6">No Products</td>
//                                         </tr>
//                                     </Fragment>
//                                 }
//                             </tbody>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }

// export default ProductsAdmin

// //After updating UI

import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsAdmin = () => {
    useEffect(() => {
        getProducts();
    }, []);
    
    let [products, setProducts] = useState([]);
    
    let getProducts = () => {
        let url = 'https://basket-app-d7kp.onrender.com/api/products';
        axios.get(url)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    
    let delProduct = (id) => {
        let delUrl = `https://basket-app-d7kp.onrender.com/api/products/${id}`;
        axios.delete(delUrl)
            .then((response) => {
                getProducts();
            })
            .catch((err) => {
                console.error(err);
            });
    };
    
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='h3'>Product Details</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <table className="table table-hover">
                            <thead className='bg-dark text-white'>
                                <tr>
                                    <th>Id</th>
                                    <th>Company</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Specification</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 ? (
                                        products.map((product) => {
                                            return (
                                                <tr key={product._id}>
                                                    <td>{product._id}</td>
                                                    <td>{product.company}</td>
                                                    <td>{product.model}</td>
                                                    <td>{product.price}</td>
                                                    <td>{product.specification}</td>
                                                    <td>
                                                        <div className="btn-group" role="group" aria-label="Action buttons">
                                                            <Link className='btn btn-warning' to={`/update/${product._id}`}>Update</Link>
                                                            <button className='btn btn-danger' onClick={() => delProduct(product._id)}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td className='text-danger' colSpan="6">No Products</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProductsAdmin;
